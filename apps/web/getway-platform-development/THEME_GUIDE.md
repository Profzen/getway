# GETWAY - Theme & Color System Guide

##  Design System Overview

GETWAY uses a sophisticated color system with two complete themes:
- **Dark Mode** (Default) - Premium, modern look
- **Light Mode** - Professional, clean look

Both themes use the same color psychology with adapted values for optimal contrast and readability.

---

## 🌓 Theme Architecture

### Color Implementation
- **Technology**: CSS Custom Properties (CSS Variables)
- **Color Space**: OKLCH (perceptually uniform)
- **System**: Two complete theme definitions
- **Persistence**: localStorage (user preference)
- **Detection**: System preference + user override

### File Structure
```
app/
├── globals.css           # Theme definitions & colors
└── layout.tsx            # Theme initialization script
components/
├── theme-toggle.tsx      # Theme switcher component
└── header.tsx            # Contains theme toggle
```

---

##  Color Palettes

### Dark Mode (Default)

```css
:root {
  /* Activated when .dark class is on <html> */
}

.dark {
  --background: oklch(0.08 0 0);           /* #0D0D0D - Deep Black */
  --foreground: oklch(0.95 0.01 0);        /* #CCCCCC - Off-white */
  --card: oklch(0.12 0 0);                 /* #1E1E1E - Charcoal */
  --card-foreground: oklch(0.95 0.01 0);   /* #CCCCCC */
  --primary: oklch(0.50 0.20 270);         /* #7B2FBE - Violet */
  --primary-foreground: oklch(0.95 0.01 0);/* #FFFFFF */
  --secondary: oklch(0.63 0.14 270);       /* #A855F7 - Light Violet */
  --secondary-foreground: oklch(0.95 0.01 0);
  --muted: oklch(0.25 0 0);                /* #3F3F3F */
  --muted-foreground: oklch(0.65 0 0);     /* #A3A3A3 */
  --border: oklch(0.20 0 0);               /* #333333 */
  --input: oklch(0.15 0 0);                /* #262626 */
  --destructive: oklch(0.60 0.20 15);      /* Red */
  /* ... more colors */
}
```

### Light Mode

```css
:root {
  --background: oklch(0.98 0 0);           /* #F7F7F7 - Off-white */
  --foreground: oklch(0.15 0 0);           /* #262626 - Dark Gray */
  --card: oklch(1 0 0);                    /* #FFFFFF - Pure White */
  --card-foreground: oklch(0.15 0 0);      /* #262626 */
  --primary: oklch(0.50 0.20 270);         /* #7B2FBE - Violet */
  --primary-foreground: oklch(0.95 0.01 0);/* #FFFFFF */
  --secondary: oklch(0.63 0.14 270);       /* #A855F7 - Light Violet */
  --secondary-foreground: oklch(0.95 0.01 0);
  --muted: oklch(0.92 0 0);                /* #EBEBEB */
  --muted-foreground: oklch(0.55 0 0);     /* #8D8D8D */
  --border: oklch(0.90 0 0);               /* #E8E8E8 */
  --input: oklch(0.95 0 0);                /* #F2F2F2 */
  --destructive: oklch(0.60 0.20 15);      /* Red */
  /* ... more colors */
}
```

---

##  Color Semantics

### Primary Colors
- **Primary** (`#7B2FBE`): Main brand color
  - CTAs and important buttons
  - Links and highlights
  - Focus states
  - Selected states

- **Secondary** (`#A855F7`): Supporting color
  - Badges and labels
  - Hover states
  - Accents
  - Icons

### Neutral Colors
- **Background**: Page background
- **Foreground**: Text color
- **Card**: Component backgrounds
- **Muted**: Disabled or secondary text
- **Border**: Dividers and borders
- **Input**: Form field backgrounds

### Semantic Colors
- **Destructive**: Danger, delete, errors (Red)
- **Success**: Positive actions (Green)
- **Warning**: Cautions (Yellow)
- **Info**: Informational (Blue)

---

##  Using Colors in Components

### CSS Classes

Use Tailwind classes to apply theme colors:

```html
<!-- Background colors -->
<div class="bg-background">Content</div>
<div class="bg-card">Card content</div>
<div class="bg-muted">Muted area</div>

<!-- Text colors -->
<p class="text-foreground">Main text</p>
<p class="text-muted-foreground">Secondary text</p>

<!-- Border colors -->
<div class="border border-border">Bordered</div>

<!-- Interactive colors -->
<button class="bg-primary text-primary-foreground">Primary Button</button>
<button class="bg-secondary text-secondary-foreground">Secondary Button</button>
```

### Inline Styles (Not Recommended)

```tsx
//  Don't use hardcoded colors
<div style={{ backgroundColor: '#7B2FBE' }}>Wrong</div>

//  Do use CSS variables
<div style={{ backgroundColor: 'var(--primary)' }}>Correct</div>
```

---

## 🔄 Theme Toggle Implementation

### How It Works

1. **User clicks theme toggle**
2. **localStorage is updated** (`theme: 'dark'` or `theme: 'light'`)
3. **HTML class is updated** (`class="dark"` or `class=""`)
4. **CSS variables change** automatically
5. **Page re-renders** with new colors

### Code Example

```tsx
// components/theme-toggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check saved preference or system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (saved) {
      setIsDark(saved === 'dark')
    } else {
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark, mounted])

  if (!mounted) return null

  return (
    <Button
      onClick={() => setIsDark(!isDark)}
      variant="ghost"
      size="icon"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
```

### HTML Initialization

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              const isDark = theme === 'dark';
              if (isDark) {
                document.documentElement.classList.add('dark');
              }
            })()
          `,
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

##  Customizing Colors

### Step 1: Edit globals.css

```css
.dark {
  /* Change primary color */
  --primary: oklch(0.45 0.22 290);  /* New violet shade */
  
  /* Change secondary color */
  --secondary: oklch(0.65 0.15 280);
  
  /* Change background */
  --background: oklch(0.10 0 0);    /* Slightly lighter black */
  
  /* ... update other colors */
}

:root {
  /* Light mode colors */
  --primary: oklch(0.45 0.22 290);
  /* ... */
}
```

### Step 2: Update Across App

All components automatically update because they use CSS variables.

### Step 3: Test Changes

1. Clear cache: `Ctrl+Shift+R` (Hard Refresh)
2. Clear localStorage: `localStorage.clear()`
3. Test in both dark and light modes

---

##  OKLCH Color Space

### Why OKLCH?

OKLCH is a perceptually uniform color space:
- **O** (Lightness): 0-1 (0=black, 1=white)
- **K** (Chroma/Saturation): 0-0.4 (0=gray, 0.4=saturated)
- **L** (Hue): 0-360 (color angle)

### Converting Hex to OKLCH

```
#7B2FBE (Violet) = oklch(0.50 0.20 270)

0.50 = Lightness (medium brightness)
0.20 = Chroma (saturated)
270 = Hue (purple/violet)
```

### Conversion Tools
- [OkLCh Color Picker](https://oklch.evilmartians.io/)
- [Color Converter](https://colorjs.io/)

---

##  Color Usage Best Practices

###  Do's
- Use semantic color names (primary, secondary, muted)
- Apply theme-aware colors through Tailwind classes
- Test contrast ratios (WCAG AA minimum)
- Use color + visual design (not color alone)
- Provide alternatives for color-blind users

###  Don'ts
- Don't hardcode hex colors
- Don't rely on color alone for meaning
- Don't exceed WCAG AA contrast minimums (4.5:1)
- Don't use system colors directly
- Don't forget to test both themes

---

## 🧪 Testing Colors

### Contrast Checker
Check color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/):
- Light text on dark background:  Pass
- Dark text on light background:  Pass
- Muted text: Check ratio

### Color Blindness Test
Test with [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/):
- Deuteranopia (Red-Green)
- Protanopia (Red-Green)
- Tritanopia (Blue-Yellow)

### Browser DevTools
Inspect colors in real-time:
```javascript
// In browser console
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary')
console.log(primary) // "oklch(0.50 0.20 270)"
```

---

##  Theme Component Integration

### Global Usage

```tsx
// All components automatically use theme colors
<div className="bg-card text-foreground border border-border">
  Theme colors applied automatically
</div>
```

### Conditional Styling

```tsx
'use client'

export function MyComponent() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? 'bg-card' : 'bg-white'}>
      Conditionally themed
    </div>
  )
}
```

---

##  Mobile Theme Detection

Respects system preference:

```css
@media (prefers-color-scheme: light) {
  /* Light mode */
}

@media (prefers-color-scheme: dark) {
  /* Dark mode */
}
```

User override is stored in localStorage and takes precedence.

---

## 🔗 Related Files

- `app/globals.css` - Theme definitions
- `app/layout.tsx` - Theme initialization
- `components/theme-toggle.tsx` - Toggle component
- `components/header.tsx` - Uses theme toggle
- `tailwind.config.ts` - Tailwind theme config

---

##  Advanced Theming

### Creating Additional Themes

```css
/* Light theme variant */
.light {
  --background: oklch(0.99 0 0);
  --primary: oklch(0.55 0.18 265);
  /* ... */
}

/* Blue theme variant */
.blue {
  --primary: oklch(0.50 0.20 260);
  --secondary: oklch(0.65 0.15 250);
  /* ... */
}
```

### Multi-Theme Support

```tsx
export function ThemeProvider() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'blue'>('dark')

  useEffect(() => {
    const html = document.documentElement
    html.className = theme
  }, [theme])

  return (
    <select onChange={(e) => setTheme(e.target.value)}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      <option value="blue">Blue</option>
    </select>
  )
}
```

---

## 📚 Resources

- [OKLCH Color Guide](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS Customization](https://tailwindcss.com/docs/configuration)
- [WCAG Color Contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)

---

## 🎓 Summary

The GETWAY theme system provides:
-  Two complete, professional themes
-  Automatic switching with user control
-  WCAG AA compliance
-  Perceptually uniform colors (OKLCH)
-  Easy customization
-  System preference detection

**All pages automatically support both themes!**

---

Last Updated: 2025
