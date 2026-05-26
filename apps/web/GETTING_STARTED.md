# GETWAY - Getting Started Guide

##  Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the project
git clone [repository-url]
cd getway-platform

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## 📖 Development

### Available Commands

```bash
# Development server (with hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Run type checking
pnpm type-check

# Format code
pnpm format
```

### Project Structure

```
getway-platform/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles & theme
│   ├── page.tsx                 # Landing page
│   ├── login/                   # Login page
│   ├── signup/                  # Signup page
│   ├── dashboard/               # Protected dashboard routes
│   ├── services/                # Services marketplace
│   ├── marketplace/             # Opportunity marketplace
│   └── [other pages]/
├── components/                  # Reusable components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── theme-toggle.tsx
│   └── ui/                      # shadcn/ui components
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

##  Customization

### Changing Colors

Edit `app/globals.css`:

```css
:root {
  /* Light mode colors */
  --primary: oklch(0.50 0.20 270);      /* Change primary color */
  --background: oklch(0.98 0 0);        /* Change background */
  /* ... */
}

.dark {
  /* Dark mode colors */
  --primary: oklch(0.50 0.20 270);
  --background: oklch(0.08 0 0);
  /* ... */
}
```

### Adding New Pages

1. Create a new folder in `app/`
2. Add `page.tsx` file
3. Export default component

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
    </main>
  )
}
```

### Using Components

```tsx
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Button>Click me</Button>
      </main>
      <Footer />
    </>
  )
}
```

---

## 🌐 Theming

### Enable Theme Toggle

The theme toggle is built into the header component:

```tsx
import { ThemeToggle } from '@/components/theme-toggle'

export default function MyComponent() {
  return <ThemeToggle />
}
```

### Detect Current Theme

```tsx
'use client'

import { useEffect, useState } from 'react'

export default function Component() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    setIsDark(saved === 'dark')
  }, [])

  return <div>{isDark ? 'Dark' : 'Light'}</div>
}
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy
vercel deploy

# Deploy to production
vercel deploy --prod
```

### Deploy to Other Platforms

#### Netlify
```bash
# Build first
pnpm build

# Deploy dist folder to Netlify
```

#### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
```

#### AWS, DigitalOcean, etc.
```bash
# Build the project
pnpm build

# Start the server
pnpm start

# Server will run on port 3000
```

---

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

For production, set these in your hosting platform's environment settings.

---

##  Responsive Testing

### Desktop Browser Testing
```bash
# Open developer tools
F12 or Right-click > Inspect

# Test responsive view
Ctrl+Shift+M (Windows/Linux)
Cmd+Shift+M (Mac)
```

### Mobile Emulation
Tested on:
- iPhone 14 (375px)
- iPad (768px)
- Desktop (1920px)

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Desktop (1920px)**
  - [ ] All pages load correctly
  - [ ] Navigation works
  - [ ] Theme toggle functions
  - [ ] Forms are functional

- [ ] **Tablet (768px)**
  - [ ] Layouts are responsive
  - [ ] Navigation adapts
  - [ ] Content is readable

- [ ] **Mobile (375px)**
  - [ ] Hamburger menu works
  - [ ] Single column layout
  - [ ] Touch-friendly buttons
  - [ ] Forms are usable

### Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

##  Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
pnpm build
```

### Theme Not Persisting
Check browser localStorage in DevTools:
- Application > Local Storage
- Look for 'theme' key

---

## 📚 Documentation Files

- `README_GETWAY.md` - Complete project documentation
- `FEATURES.md` - Detailed feature list
- `ROUTES.md` - All routes and navigation
- `PROJECT_SUMMARY.md` - Project overview
- `GETTING_STARTED.md` - This file

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind v4 Guide](https://tailwindcss.com/docs/v4)

### shadcn/ui
- [shadcn/ui Components](https://ui.shadcn.com)
- [Component Examples](https://ui.shadcn.com/docs)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🤝 Contributing

### Code Style
- Use TypeScript for type safety
- Follow existing patterns
- Use semantic HTML
- Write accessible code

### Before Submitting
- [ ] Code follows project style
- [ ] Pages are responsive
- [ ] Accessibility checked
- [ ] No console errors
- [ ] Tested on mobile/desktop

---

##  Git Workflow

```bash
# Create a new branch
git checkout -b feature/your-feature

# Make changes
git add .
git commit -m "feat: description"

# Push to remote
git push origin feature/your-feature

# Create pull request
# (on GitHub/GitLab/Bitbucket)
```

---

## 🆘 Getting Help

### Common Issues

**Q: Theme not changing?**
A: Clear localStorage and refresh:
```javascript
localStorage.clear()
location.reload()
```

**Q: Styles not applying?**
A: Clear cache and rebuild:
```bash
rm -rf .next
pnpm build
```

**Q: Port 3000 already in use?**
A: Use a different port:
```bash
pnpm dev -- -p 3001
```

### Contact Support
- Email: support@getway.com
- Visit: /contact page
- GitHub Issues: [Repository Issues]

---

##  Next Steps

### 1. Explore the Codebase
- Check out all pages in `/app`
- Review components in `/components`
- Look at styling in `app/globals.css`

### 2. Customize for Your Brand
- Update company name (search/replace GETWAY)
- Change colors in `globals.css`
- Update logo in header component
- Modify copy/text throughout

### 3. Integrate Backend
- Set up authentication
- Connect database
- Implement API endpoints
- Add real data fetching

### 4. Deploy to Production
- Set up hosting platform (Vercel recommended)
- Configure environment variables
- Set up custom domain
- Enable HTTPS

---

##  Performance Tips

- Use Next.js Image component for images
- Enable dynamic code splitting
- Optimize bundle size
- Use production builds for testing
- Monitor Core Web Vitals

---

## 🔐 Security Best Practices

- Never commit `.env.local` to git
- Use HTTPS in production
- Validate all inputs server-side
- Keep dependencies updated
- Use CSP headers in production
- Implement rate limiting
- Use secure session management

---

##  Monitoring & Analytics

Ready for:
- Google Analytics integration
- Sentry error tracking
- Vercel Analytics
- Custom event tracking

---

## 🎉 You're All Set!

The GETWAY platform is ready for:
-  Local development
-  Customization
-  Deployment
-  Backend integration

**Happy coding! **

---

Questions? Check the documentation files or contact support@getway.com

Last Updated: 2025
Version: 1.0.0
