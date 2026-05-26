# GETWAY - Quick Start Guide

## What You Have

A complete, modern, production-ready web application with:
- 27+ pages fully built
- Atypical modern design
- Light mode (violet dominant) + Dark mode
- Professional icons everywhere (no emojis)
- 100% responsive (mobile, tablet, desktop)

---

## In 3 Steps

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

### 3. Open Browser
```
http://localhost:3000
```

That's it! Everything works.

---

## Theme Switching

- Click the sun/moon icon in the header
- Or toggle via the mobile menu
- Your preference is saved automatically

---

## Light Mode

The light theme features:
- Violet as dominant color (#7B2FBE)
- Modern gradient backgrounds
- Professional typography
- Perfect for daytime use

## Dark Mode

The dark theme features:
- Deep black backgrounds
- Violet accents
- High contrast for readability
- Perfect for nighttime use

---

## Key Pages to Explore

**Home Page** `/`
- Modern hero with gradient animations
- Asymmetric feature grid
- Professional testimonials

**Services** `/services`
- Service catalog
- Detailed service pages
- Professional cards

**Marketplace** `/marketplace`
- Opportunity listing
- Advanced filtering
- Responsive grid

**Dashboard** `/dashboard`
- User overview
- Profile management
- Messages
- Notifications
- Settings

---

## For Developers

### File Structure
```
/app - All pages
/components - React components
/app/globals.css - Theme system (OKLCH colors)
```

### Customizing Colors

Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.50 0.20 270); /* Change this */
  --secondary: oklch(0.63 0.14 270); /* Or this */
}
```

### Adding Pages
```bash
mkdir -p app/my-page
# Create app/my-page/page.tsx
```

### Using Components
All shadcn/ui components pre-installed:
- Button
- Card
- Input
- Select
- Dialog
- And 20+ more...

---

## Build & Deploy

### Build
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm start
```

### Deploy to Vercel
```bash
vercel
```

---

## Mobile Testing

### Test on iPhone
```bash
# The app is fully responsive
# Test on actual device or:
# Chrome DevTools → iPhone 12/14/15
```

### Responsive Breakpoints
- Mobile: 320-640px
- Tablet: 640-1024px  
- Desktop: 1024px+

---

## Documentation

Read these files for more details:

1. **README.md** - Overview
2. **GETTING_STARTED.md** - Full setup guide
3. **FEATURES.md** - All features explained
4. **ROUTES.md** - Every page documented
5. **THEME_GUIDE.md** - Color system explained
6. **FINAL_SUMMARY.md** - Comprehensive details

---

## Common Customizations

### Change Primary Color
Edit `globals.css` - line with `--primary`

### Change Font
Edit `layout.tsx` - import different Google Font

### Add New Component
```bash
npx shadcn-ui@latest add button
```

### Add New Page
```bash
mkdir app/new-page
# Create page.tsx
```

---

## Troubleshooting

**Port 3000 already in use?**
```bash
pnpm dev -- -p 3001
```

**Tailwind classes not working?**
```bash
# Clear cache
rm -rf .next
pnpm dev
```

**Theme not switching?**
```bash
# Clear localStorage
localStorage.clear()
# Refresh page
```

---

## Next Steps

1.  Run the dev server
2.  Explore all pages
3.  Test light/dark modes
4.  Try on mobile
5.  Customize colors
6.  Connect to backend
7.  Deploy!

---

## Need Help?

- Check `/docs` folder for detailed guides
- Refer to official docs:
  - Next.js: https://nextjs.org
  - Tailwind: https://tailwindcss.com
  - shadcn/ui: https://ui.shadcn.com

---

## Important Files

- `app/layout.tsx` - Root layout with theme script
- `app/globals.css` - All colors and fonts
- `app/page.tsx` - Home page (atypical hero)
- `components/header.tsx` - Navigation with theme toggle
- `components/atypical-hero.tsx` - Modern hero component
- `components/atypical-features.tsx` - Asymmetric grid

---

**Everything is already set up. Just run `pnpm dev` and enjoy!**
