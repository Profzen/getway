---
name: Kinetic Obsidian
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1c'
  surface-container: '#202020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cfc2d5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#303030'
  outline: '#988d9e'
  outline-variant: '#4c4353'
  surface-tint: '#deb7ff'
  primary: '#deb7ff'
  on-primary: '#4a007f'
  primary-container: '#7b2fbe'
  on-primary-container: '#e4c4ff'
  inverse-primary: '#8136c4'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#deb7ff'
  on-primary-fixed: '#2c0050'
  on-primary-fixed-variant: '#6712aa'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built on the pillars of **High-Performance Collaboration** and **Technological Luxury**. It evokes a sense of "The Future, Now," positioning the product as an elite tool for innovators. The aesthetic is a sophisticated blend of **Glassmorphism** and **Corporate Modernism**, utilizing deep obsidian backgrounds to allow high-energy purples and prestigious gold accents to command attention.

The UI should feel like a high-end command center: precise, responsive, and empowering. We prioritize clarity through high contrast while softening the technical edge with translucent surfaces and atmospheric glows. The emotional response is one of confidence—users should feel they are operating the most advanced software in their industry.

## Colors

The palette is anchored in **Deep Black (#000000)** to ensure absolute depth and focus. **Premium Purple (#7B2FBE)** serves as the primary "energy" color, used for interactive elements and brand identifiers. **Light Purple (#A855F7)** is reserved for hover states and secondary highlights to create a sense of luminescence.

**Gold (#D4AF37)** is our "prestige" accent, used sparingly for high-value achievements, premium features, or critical call-to-outs. Neutrals are composed of **Anthracite Gray (#1E1E1E)** for containers and **Pure White/Silver (#CCCCCC)** for legible, high-contrast typography. The interaction between deep backgrounds and vibrant purples creates a "neon-refined" look that feels futuristic without becoming garish.

## Typography

This design system utilizes a dual-font strategy to balance character and utility. 

**Sora** is the display typeface, chosen for its geometric, futuristic construction. It should be used for all major headlines and large data points to reinforce the high-tech brand identity. **Geist** is the functional workhorse, providing extreme legibility for body copy, technical data, and UI labels. Its monospaced-adjacent metrics provide a developer-friendly, precise aesthetic that aligns with the startup's collaborative tech focus.

Maintain tight tracking on display headings to emphasize a "packed" and powerful look, while ensuring body text has ample line height for readability in a dark environment.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a premium "editorial" feel, transitioning to a fluid layout for smaller devices. We utilize a strict **8px spatial scale** to ensure mathematical harmony across all components.

- **Desktop (1440px+):** 12-column grid, 1200px max-width, 24px gutters.
- **Tablet (768px - 1439px):** 8-column fluid grid, 24px margins.
- **Mobile (Under 767px):** 4-column fluid grid, 16px margins.

Spacing should be generous between sections (`xl`) to allow the UI to breathe, but tight between related functional elements (`xs`, `sm`) to emphasize their collaborative connection.

## Elevation & Depth

Visual hierarchy is established through **Layered Intelligence**. Instead of traditional realistic shadows, we use:

1.  **Glassmorphism:** Secondary surfaces (modals, dropdowns, sidebars) use a `backdrop-filter: blur(20px)` with a 10% opacity white fill.
2.  **Silver Outlines:** Use 1px borders in `#CCCCCC` at 15% opacity to define boundaries without heavy shadows.
3.  **Atmospheric Glows:** High-elevation elements (like active cards) utilize a subtle, soft-purple outer glow (`drop-shadow`) to simulate a light source emitting from the screen.
4.  **Tonal Stacking:** The background is `#000000`, primary containers are `#121212`, and interactive cards are `#1E1E1E`. This creates depth through luminance rather than physical displacement.

## Shapes

The shape language is **Soft-Tech**. We avoid fully circular or organic shapes in favor of precise, architectural radii. Standard elements use a `4px` (0.25rem) radius to feel modern but sharp. 

Cards and larger containers utilize `8px` (`rounded-lg`) to soften the high-contrast aesthetic and add a premium "hardware" feel, reminiscent of precision-milled aluminum. Gold-accented items or high-priority CTA buttons may use a slightly more pronounced `12px` (`rounded-xl`) to draw the eye through a change in silhouette.

## Components

### Buttons
- **Primary:** Solid `#7B2FBE` with `#FFFFFF` text. Sharp corners with 4px radius.
- **Secondary:** Transparent with a 1px `#7B2FBE` border. Purple text.
- **Premium:** Black background, gold `#D4AF37` border, and gold text. Used for "Upgrade" or "Special" actions.

### Input Fields
- **Default:** Dark `#1E1E1E` background, 1px border in silver (10% opacity).
- **Focus:** Border changes to `#A855F7` with a subtle purple outer glow. Text remains `#CCCCCC`.

### Cards
- Constructed with a glassmorphic base. 1px border at 15% silver. 
- Hover state: The border opacity increases to 40% and the background shifts slightly lighter.

### Chips & Tags
- Small, uppercase Geist font. 
- Backgrounds are low-opacity versions of the status color (e.g., Purple at 10% opacity for "Active").

### Lists
- Separated by 1px silver lines at 5% opacity. 
- Interactive list items should have a slight "lift" on hover, increasing background luminance.

### Collaborative Elements
- **Presence Indicators:** Small rings around user avatars using the Primary Purple. 
- **Cursors:** Custom styled cursors for collaborative sessions that use the accent colors to identify different users.