# GETWAY Routes & Navigation Map

## Complete Route Structure

### Root Routes
- `/` - Landing page (Hero, features, testimonials)
- `/not-found` - 404 error page

### Public Pages
- `/about` - Company about page (mission, values, team, timeline)
- `/contact` - Contact page (form, email, phone, FAQ)
- `/onboarding` - Role selection guide (for new users)
- `/services` - Services marketplace (catalog with search/filter)
- `/services/[id]` - Service detail page (reviews, portfolio, booking)
- `/marketplace` - Public marketplace (opportunity listing)
- `/marketplace/[id]` - Opportunity detail (description, apply, details)

### Authentication Pages
- `/login` - Login page (email/password, social login)
- `/signup` - Sign up page (registration with role selection)

### Dashboard (Protected)
#### Dashboard Home
- `/dashboard` - Dashboard overview (stats, recommendations, activity)

#### User Management
- `/dashboard/profile` - User profile (edit profile, skills, portfolio)
- `/dashboard/settings` - Settings (account, preferences, security)

#### Opportunities & Projects
- `/dashboard/opportunities` - My opportunities list (browse, filter, manage)

#### Communication
- `/dashboard/messages` - Messaging interface (conversations, chat)
- `/dashboard/notifications` - Notification center (alerts, activity)

---

## Route Statistics

| Category | Count | Routes |
|----------|-------|--------|
| **Public Pages** | 8 | `/`, `/about`, `/contact`, `/onboarding`, `/services`, `/services/[id]`, `/marketplace`, `/marketplace/[id]` |
| **Auth Pages** | 2 | `/login`, `/signup` |
| **Dashboard Pages** | 6 | `/dashboard`, `/dashboard/profile`, `/dashboard/settings`, `/dashboard/opportunities`, `/dashboard/messages`, `/dashboard/notifications` |
| **Error Pages** | 1 | `/not-found` |
| **TOTAL** | **17** | Routes |

---

## Navigation Structure

```
GETWAY
├── Home (/)
├── Services (/services)
│   └── Service Detail (/services/[id])
├── Marketplace (/marketplace)
│   └── Opportunity Detail (/marketplace/[id])
├── About (/about)
├── Contact (/contact)
├── Onboarding (/onboarding)
├── Login (/login)
├── Signup (/signup)
└── Dashboard (/dashboard) [Protected]
    ├── Overview (/dashboard)
    ├── My Opportunities (/dashboard/opportunities)
    ├── Profile (/dashboard/profile)
    ├── Settings (/dashboard/settings)
    ├── Messages (/dashboard/messages)
    └── Notifications (/dashboard/notifications)
```

---

## Page Descriptions

### Public Pages

#### 1. Landing Page (`/`)
**Purpose**: Introduce GETWAY platform
**Sections**: 
- Hero section with CTA
- Features showcase (6 features)
- Testimonials (3 users)
- Statistics
- Call-to-action section
- Footer
**Components**: Header, Footer

#### 2. Services Marketplace (`/services`)
**Purpose**: Browse and search services
**Features**:
- Service catalog grid
- Search functionality
- Category filtering (6 categories)
- Level, price, rating filters
- Service cards with ratings
**Components**: Header, Footer, Service Cards

#### 3. Service Detail (`/services/[id]`)
**Purpose**: View service information and book
**Features**:
- Service description
- Provider profile
- Portfolio showcase (3 projects)
- Client testimonials (3 reviews)
- Booking card
- Related services
**Components**: Header, Footer, Rating display

#### 4. About Page (`/about`)
**Purpose**: Learn about company
**Sections**:
- Mission statement
- Core values (3 values)
- Company timeline (4 milestones)
- Team profiles (4 members)
- Key statistics
- CTA section
**Components**: Header, Footer

#### 5. Contact Page (`/contact`)
**Purpose**: Get in touch with team
**Features**:
- Contact information (email, phone, location)
- Contact form with validation
- FAQ section (5 questions)
**Components**: Header, Footer, Contact form

#### 6. Onboarding Page (`/onboarding`)
**Purpose**: Guide new users to choose role
**Sections**:
- Role selection (3 roles with benefits)
- How it works (4 steps)
- Key features (8 features)
- FAQ (new users)
- CTA buttons
**Components**: Header

#### 7. 404 Page (`/not-found`)
**Purpose**: Handle page not found
**Features**:
- Error message
- Navigation options
- Helpful links

### Authentication Pages

#### 8. Login Page (`/login`)
**Purpose**: User login
**Features**:
- Email/password form
- Social login (Google, GitHub)
- Remember me option
- Forgot password link
- Sign up link
**Components**: Auth form

#### 9. Signup Page (`/signup`)
**Purpose**: New user registration
**Features**:
- Registration form
- Role selection
- Email verification option
- Password strength indicator
- Terms acceptance
**Components**: Auth form

### Dashboard Pages (Protected)

#### 10. Dashboard Home (`/dashboard`)
**Purpose**: User dashboard overview
**Features**:
- Welcome message
- Quick stats (4 cards)
- Recommended opportunities
- Recent activity feed
- Quick action buttons
**Components**: Dashboard Layout

#### 11. Opportunities (`/dashboard/opportunities`)
**Purpose**: Manage opportunities
**Features**:
- Opportunities list/grid
- Advanced search
- Filtering sidebar
- Sort options
- Apply/manage buttons
**Components**: Dashboard Layout

#### 12. Profile (`/dashboard/profile`)
**Purpose**: Manage user profile
**Features**:
- Profile information form
- Skills management
- Portfolio section
- Work experience
- Certifications
- Profile visibility settings
**Components**: Dashboard Layout, Forms

#### 13. Settings (`/dashboard/settings`)
**Purpose**: Account and privacy settings
**Sections**:
- Account settings
- Email & communication
- Notifications preferences
- Privacy & security
- Danger zone (delete account)
- Logout
**Components**: Dashboard Layout, Toggle switches

#### 14. Messages (`/dashboard/messages`)
**Purpose**: Direct messaging
**Features**:
- Conversations list
- Chat interface
- Search conversations
- Online status
- Unread indicators
- Call/video buttons
- Message input
**Components**: Dashboard Layout, Chat interface

#### 15. Notifications (`/dashboard/notifications`)
**Purpose**: Notification center
**Features**:
- Notification list
- Filter by type
- Mark as read
- Delete notifications
- Timestamps
- Settings link
**Components**: Dashboard Layout

---

## Component Usage Map

### Header Component (`components/header.tsx`)
**Used on**: All pages (except dashboards)
**Features**:
- GETWAY logo
- Navigation menu (desktop)
- Hamburger menu (mobile)
- Auth buttons (login/signup)
- Theme toggle

### Footer Component (`components/footer.tsx`)
**Used on**: All public pages
**Features**:
- Company info
- Quick links
- Social media
- Newsletter signup
- Copyright

### Dashboard Layout (`components/dashboard-layout.tsx`)
**Used on**: All `/dashboard/*` pages
**Features**:
- Sidebar navigation
- Main content area
- User welcome message
- Responsive design

### Auth Form (`components/auth-form.tsx`)
**Used on**: `/login`, `/signup`
**Features**:
- Form inputs
- Validation
- Social login buttons

### Theme Toggle (`components/theme-toggle.tsx`)
**Used on**: Header component (desktop & mobile)
**Features**:
- Dark/light mode switcher
- Icon changes based on theme
- localStorage persistence

---

## Deep Linking & Parameters

### Dynamic Routes
- `/services/[id]` - Service ID parameter
  - Example: `/services/1`
  - Type: Numeric ID
  
- `/marketplace/[id]` - Opportunity ID parameter
  - Example: `/marketplace/1`
  - Type: Numeric ID

### URL Parameters (Ready for Implementation)
- `/services?search=web-dev`
- `/services?category=development`
- `/services?level=professional`
- `/dashboard/opportunities?filter=applied`
- `/marketplace?sort=newest`

---

## SEO & Meta Tags

All pages include:
- Unique title tags
- Meta descriptions
- Open Graph tags (ready for implementation)
- Canonical URLs

### Page Titles
- `/` - "GETWAY - Connect Talents to Opportunities"
- `/about` - "About GETWAY"
- `/contact` - "Contact GETWAY"
- `/services` - "Professional Services & Expertise"
- `/login` - "Login to GETWAY"
- `/signup` - "Sign Up for GETWAY"
- `/dashboard` - "My Dashboard"
- etc.

---

## Future Enhancements

### Planned Routes
- `/search` - Global search page
- `/projects` - Create/manage projects
- `/team` - Team collaboration
- `/billing` - Payment & billing
- `/help` - Help center
- `/admin` - Admin dashboard

### API Routes (Ready to add)
- `/api/auth/login`
- `/api/auth/signup`
- `/api/services`
- `/api/opportunities`
- `/api/messages`
- `/api/users`

---

## Accessibility Features

### Navigation
-  Semantic navigation structure
-  Skip to main content link
-  Keyboard navigation
-  ARIA labels
-  Focus indicators

### Link Accessibility
-  Descriptive link text
-  Clear visual hierarchy
-  Color not sole identifier

---

## Performance Considerations

### Code Splitting
- Dashboard layouts are code-split
- Dynamic imports ready for implementation
- Image lazy loading ready

### Caching Strategy
- Static pages: ISR (Incremental Static Regeneration)
- Dynamic pages: Server-side rendering

---

## Security Routing

### Protected Routes
- All `/dashboard/*` routes should be protected
- Requires authentication
- Ready for middleware implementation

### Public Routes
- All other routes are public
- No authentication required

---

## Mobile-First Navigation

### Mobile (320px - 640px)
- Hamburger menu 
- Stack-based layout 
- Full-width buttons 
- Single column content 

### Desktop (1024px+)
- Full horizontal menu 
- Sidebar navigation (dashboard) 
- Multi-column layouts 
- Optimized spacing 

---

## Browser History Management

All routes support:
-  Browser back/forward
-  Bookmarking
-  Direct navigation
-  Deep linking

---

## Summary

**Total Routes: 17**
- 8 Public Pages
- 2 Auth Pages  
- 6 Dashboard Pages
- 1 Error Page

**All routes are fully implemented and ready for:**
- Backend integration
- Database connection
- User authentication
- Real data fetching

---

Last Updated: 2025
