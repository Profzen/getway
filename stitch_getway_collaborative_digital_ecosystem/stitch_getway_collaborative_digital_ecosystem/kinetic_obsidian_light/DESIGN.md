---
name: Kinetic Obsidian Light
colors:
  surface: '#fff7fe'
  surface-dim: '#e1d7e3'
  surface-bright: '#fff7fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf0fd'
  surface-container: '#f5ebf7'
  surface-container-high: '#efe5f1'
  surface-container-highest: '#e9dfec'
  on-surface: '#1f1a22'
  on-surface-variant: '#4c4353'
  inverse-surface: '#342e38'
  inverse-on-surface: '#f8edfa'
  outline: '#7e7384'
  outline-variant: '#cfc2d5'
  surface-tint: '#8136c4'
  primary: '#6204a5'
  on-primary: '#ffffff'
  primary-container: '#7b2fbe'
  on-primary-container: '#e4c4ff'
  inverse-primary: '#deb7ff'
  secondary: '#8127cf'
  on-secondary: '#ffffff'
  secondary-container: '#9c48ea'
  on-secondary-container: '#fffbff'
  tertiary: '#5e3a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#7e4f00'
  on-tertiary-container: '#ffc681'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#deb7ff'
  on-primary-fixed: '#2c0050'
  on-primary-fixed-variant: '#6712aa'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#ffddb7'
  tertiary-fixed-dim: '#fbba68'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#fff7fe'
  on-background: '#1f1a22'
  surface-variant: '#e9dfec'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Sora
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style
This design system represents a high-performance, premium evolution of the GETWAY brand, pivoting from a dark aesthetic to a luminous, high-clarity light mode. The brand personality is professional, forward-thinking, and meticulously clean, designed for power users who require precision and sophistication.

The style is **Modern Corporate** with a **Minimalist-Futuristic** edge. It leverages expansive whitespace, sharp typography, and subtle tonal depth to create a sense of organized energy. The UI should evoke an emotional response of clarity and reliability, ensuring that the "Kinetic" aspect of the brand is expressed through fluid transitions and purposeful layout rather than visual clutter.

## Colors
The palette centers on "Premium Purple" as the core driver of action and brand recognition. By placing this vibrant primary color against a canvas of pure white and off-white neutrals, we achieve a high-contrast environment that feels both elite and accessible.

- **Primary (#7B2FBE):** Used for primary actions, active states, and brand-critical iconography.
- **Secondary (#A855F7):** Used for hover states, accents, and supportive UI elements to add depth to the purple spectrum.
- **Surface & Background:** A strict hierarchy where `#FFFFFF` is used for elevated components (cards, modals) and `#F8F9FA` is used for the application background to provide soft contrast.
- **Text:** Deep charcoal `#121212` ensures WCAG AAA compliance for body text, while a secondary grey is used for metadata and placeholder text.

## Typography
Sora is the exclusive typeface for the design system. Its geometric structure and generous x-height provide the "futuristic" feel requested while maintaining exceptional legibility in a light-mode context.

Headlines should utilize tighter letter-spacing and heavier weights to command attention. Body text remains spacious to ensure a comfortable reading experience during long sessions. Use "Label" styles for UI-specific elements like buttons, badges, and navigation items to differentiate interactive text from content.

## Layout & Spacing
The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a 1280px max-width container for desktop, centering the user's focus. 

- **Grid:** Use a 12-column grid for desktop (24px gutter) and a 4-column grid for mobile (16px margin).
- **Rhythm:** All spacing must be multiples of 4px. Use `md (16px)` for standard component padding and `lg (24px)` for section separation.
- **Density:** Maintain "Airy" density to support the premium feel. Never crowd elements; favor vertical stacking with generous `xxl` margins between distinct content blocks.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** and **Ambient Shadows**. Because the background is a very light grey (#F8F9FA), pure white (#FFFFFF) surfaces naturally appear "lifted."

- **Level 0 (Background):** #F8F9FA.
- **Level 1 (Cards/Surfaces):** #FFFFFF with a 1px border of #EDEDED. No shadow.
- **Level 2 (Interactive/Floating):** #FFFFFF with a soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.04)`.
- **Level 3 (Modals/Overlays):** #FFFFFF with a deeper shadow: `0px 12px 40px rgba(0, 0, 0, 0.08)`.

Avoid heavy black shadows; instead, use low-opacity neutral tints to maintain the "clean" aesthetic.

## Shapes
The shape language is consistently **Rounded**. This softens the technical nature of the Sora typeface and makes the "Kinetic" UI feel more organic and approachable.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Elements:** Main content containers and large image cards use a 1rem (16px) radius.
- **Specialty Elements:** Badges and search bars should utilize "full" rounding (pill-shaped) to distinguish them as high-interaction or status-based components.

## Components

### Buttons
- **Primary:** Solid #7B2FBE background with white text. 8px border radius.
- **Secondary:** Transparent background with a 1px #7B2FBE border and #7B2FBE text.
- **Ghost:** No background or border. #7B2FBE text. Subtle #F8F9FA background on hover.

### Input Fields
- **Default State:** #FFFFFF background, 1px border (#D1D5DB).
- **Focus State:** 2px border (#7B2FBE) with a soft purple outer glow (4px spread, 10% opacity).

### Cards
- Always use #FFFFFF background. 
- Use a 1px #EDEDED border to define the edge against the #F8F9FA background. 
- Internal padding should be a minimum of 24px (lg).

### Chips & Badges
- Use a light tint of the primary color (#F5EEFF) for the background and the primary color (#7B2FBE) for the text to indicate activity without the visual weight of a solid button.

### Lists
- Use thin #EDEDED dividers between list items. 
- Use 16px of vertical padding per item to maintain the "premium" airy feel.