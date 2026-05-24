import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function StitchIndex() {
  const base = path.join(process.cwd(), 'stitch_getway_collaborative_digital_ecosystem', 'stitch_getway_collaborative_digital_ecosystem');
  let items: string[] = [];
  try {
    items = fs.readdirSync(base).filter((d) => fs.existsSync(path.join(base, d, 'code.html')));
  } catch (e) {
    items = [];
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Stitch maquettes</h1>
      <p>Liste des maquettes disponibles (ouvrir pour rendu pixel‑faithful).</p>
      <ul>
        {items.map((i) => (
          <li key={i}>
            <Link href={`/stitch/${i}`}>{i}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
