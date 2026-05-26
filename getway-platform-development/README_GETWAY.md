# GETWAY - Connect Talents to Opportunities

A fully responsive web and mobile platform for connecting talents, learners, and service providers.

## Project Overview

GETWAY is a premium digital platform that enables professionals to discover opportunities, share expertise, and build meaningful connections. The platform supports three primary user types:
- **Learners**: Explore opportunities and learn new skills
- **Service Providers**: Offer services and build freelance careers
- **Trainers**: Share knowledge and teach others

## Design System

### Color Palette
- **Primary**: Violet `#7B2FBE` - Premium brand color
- **Light Violet**: `#A855F7` - Accent highlights
- **Dark Background**: `#0D0D0D` - Deep black
- **Light Background**: `#F7F7F7` - Off-white
- **Text**: `#CCCCCC` (light mode) / `#262626` (dark mode)

### Theme Support
- **Dark Mode**: Optimized default theme with deep blacks and vibrant violets
- **Light Mode**: Professional light theme with off-white backgrounds
- **Toggle**: Theme switcher available in header (visible on desktop and mobile)

## Pages Built

### Public Pages
| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero section with features, testimonials, and CTAs |
| Services | `/services` | Service catalog with search and filtering |
| Service Detail | `/services/[id]` | Individual service page with reviews and portfolio |
| About | `/about` | Company mission, values, team, and journey |
| Contact | `/contact` | Contact form and company information |
| Onboarding | `/onboarding` | Role selection guide for new users |
| 404 | `/not-found` | Custom error page |

### Authentication Pages
| Page | Route | Status |
|------|-------|--------|
| Login | `/login` | Built - Full form with validation |
| Signup | `/signup` | Built - Role selection and registration |

### Dashboard Pages
| Page | Route | Status |
|------|-------|--------|
| Dashboard Home | `/dashboard` | Built - Overview and stats |
| Opportunities | `/dashboard/opportunities` | Built - Browse and manage opportunities |
| Profile | `/dashboard/profile` | Built - Edit profile and manage skills |
| Settings | `/dashboard/settings` | Built - Account, preferences, and security |
| Marketplace | `/marketplace` | Built - Public service marketplace |
| Marketplace Detail | `/marketplace/[id]` | Built - Service details and booking |

## Components

### Layout Components
- `header.tsx` - Responsive header with mobile menu and theme toggle
- `footer.tsx` - Footer with links and company info
- `dashboard-layout.tsx` - Dashboard wrapper with sidebar navigation

### Reusable Components
- `auth-form.tsx` - Authentication form component
- `theme-toggle.tsx` - Dark/light mode switcher

### UI Components (shadcn/ui)
- Button
- Input fields
- Forms
- Cards
- Dropdown menus

## Technologies Used

- **Framework**: Next.js 16.2.6 (App Router)
- **Styling**: Tailwind CSS v4.2.0
- **UI Library**: shadcn/ui
- **Icons**: lucide-react
- **Fonts**: Geist (sans-serif)
- **Colors**: OKLCH color space for consistent theming

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: 1024px+ (xl, 2xl)

### Mobile Features
- Hamburger menu navigation
- Single-column layouts
- Full-width buttons and forms
- Touch-friendly spacing (44px minimum tap targets)
- Responsive images

## Theme Customization

The theme is configured using CSS custom properties in `app/globals.css`:

```css
:root {
  /* Light mode colors */
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.50 0.20 270);
  /* ... */
}

.dark {
  /* Dark mode colors */
  --background: oklch(0.08 0 0);
  --foreground: oklch(0.95 0.01 0);
  --primary: oklch(0.50 0.20 270);
  /* ... */
}
```

### Theme Detection
- Automatic detection of system preference
- localStorage persistence of user choice
- Smooth transitions between themes

## Key Features Implemented

### Design
-  Premium dark/light themes with smooth transitions
-  Consistent color scheme throughout
-  Professional typography with Geist font
-  Accessible contrast ratios (WCAG AA compliant)

### Navigation
-  Sticky header with mobile menu
-  Dashboard sidebar (collapsed on mobile)
-  Breadcrumbs and intuitive routing
-  Theme toggle in header

### User Experience
-  Responsive layouts for all devices
-  Smooth hover effects and transitions
-  Loading states and feedback
-  Form validation and error handling

### Content
-  Comprehensive landing page
-  Service marketplace with search
-  User authentication flows
-  User dashboards and profiles
-  About and contact pages

## Project Structure

```
app/
├── layout.tsx              # Root layout with theme initialization
├── globals.css             # Theme colors and Tailwind setup
├── page.tsx                # Landing page
├── login/page.tsx          # Login page
├── signup/page.tsx         # Signup page
├── onboarding/page.tsx     # Role selection
├── about/page.tsx          # About page
├── contact/page.tsx        # Contact page
├── not-found.tsx           # 404 page
├── dashboard/
│   ├── layout.tsx          # Dashboard wrapper
│   ├── page.tsx            # Dashboard home
│   ├── opportunities/page.tsx
│   ├── profile/page.tsx
│   └── settings/page.tsx
├── services/
│   ├── page.tsx            # Services listing
│   └── [id]/page.tsx       # Service detail
└── marketplace/
    ├── page.tsx            # Marketplace listing
    └── [id]/page.tsx       # Opportunity detail

components/
├── header.tsx              # Main navigation
├── footer.tsx              # Footer component
├── auth-form.tsx           # Authentication form
├── dashboard-layout.tsx    # Dashboard layout
├── theme-toggle.tsx        # Theme switcher
└── ui/                     # shadcn/ui components
```

## Getting Started

### Installation
```bash
# Clone the project
git clone [repository]

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production
```bash
# Build optimized version
pnpm build

# Start production server
pnpm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size with code splitting
- Image optimization with Next.js Image component
- CSS-in-JS for dynamic theming
- Lazy loading for marketplace items

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Future Enhancements

- [ ] Real-time messaging system
- [ ] Payment integration (Stripe)
- [ ] User authentication backend
- [ ] Database integration
- [ ] Advanced search and filtering
- [ ] Video calling features
- [ ] Notification system
- [ ] Mobile app (React Native)
- [ ] Internationalization (i18n)
- [ ] Analytics dashboard

## Contributing

When contributing, please ensure:
- Code follows the existing style
- All components are responsive
- Accessibility standards are maintained
- Theme customizations work in both light and dark modes

## License

MIT License - See LICENSE file for details

## Support

For support, please contact support@getway.com or visit the contact page at `/contact`.

---

Built with ❤️ using Next.js and Tailwind CSS
