const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const crypto = require('crypto');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest));
      }
      if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
      file.on('error', (err) => reject(err));
    }).on('error', reject);
  });
}

function sanitizeFilename(u) {
  try {
    const parsed = new URL(u);
    const ext = path.extname(parsed.pathname) || '.png';
    const hash = crypto.createHash('sha1').update(u).digest('hex').slice(0, 12);
    return `${hash}${ext}`;
  } catch (e) {
    return 'asset_' + Buffer.from(u).toString('hex').slice(0, 8) + '.png';
  }
}

async function main() {
  const stitchRoot = path.join(process.cwd(), 'stitch_getway_collaborative_digital_ecosystem', 'stitch_getway_collaborative_digital_ecosystem');
  const publicRoot = path.join(process.cwd(), 'apps', 'web', 'public', 'stitch');
  ensureDir(publicRoot);

  const slugs = fs.readdirSync(stitchRoot, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
  const mapping = {};

  for (const slug of slugs) {
    const codePath = path.join(stitchRoot, slug, 'code.html');
    if (!fs.existsSync(codePath)) continue;
    const html = fs.readFileSync(codePath, 'utf8');
    const urls = new Set();
    // img src
    const imgRe = /<img[^>]+src=["']([^"']+)["']/g;
    let m;
    while ((m = imgRe.exec(html)) !== null) urls.add(m[1]);
    // background url('...')
    const bgRe = /url\(["']?([^"')]+)["']?\)/g;
    while ((m = bgRe.exec(html)) !== null) urls.add(m[1]);

    const slugPublic = path.join(publicRoot, slug);
    ensureDir(slugPublic);

    for (const u of urls) {
      if (!u.startsWith('http')) continue;
      const filename = sanitizeFilename(u);
      const dest = path.join(slugPublic, filename);
      try {
        if (!fs.existsSync(dest)) {
          console.log('Downloading', u, '->', dest);
          // eslint-disable-next-line no-await-in-loop
          await download(u, dest);
        } else {
          console.log('Already exists', dest);
        }
        const publicPath = `/stitch/${slug}/${filename}`;
        mapping[u] = publicPath;
      } catch (err) {
        console.error('Failed to download', u, err.message);
      }
    }
  }

  // write mapping
  const mapPath = path.join(process.cwd(), 'scripts', 'stitch_asset_map.json');
  fs.writeFileSync(mapPath, JSON.stringify(mapping, null, 2));
  console.log('Wrote mapping to', mapPath);

  // Replace in converted pages
  const pagesRoot = path.join(process.cwd(), 'apps', 'web', 'src', 'app', 'stitch');
  if (fs.existsSync(pagesRoot)) {
    const files = fs.readdirSync(pagesRoot, { withFileTypes: true }).filter(f => f.isDirectory()).map(d => path.join(pagesRoot, d.name, 'page.tsx'))
      .filter(p => fs.existsSync(p));
    for (const f of files) {
      let content = fs.readFileSync(f, 'utf8');
      let changed = false;
      for (const [orig, local] of Object.entries(mapping)) {
        if (content.includes(orig)) {
          content = content.split(orig).join(local);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(f, content, 'utf8');
        console.log('Updated', f);
      }
    }
  }

  console.log('Done.');
}

main().catch(err => { console.error(err); process.exit(1); });
