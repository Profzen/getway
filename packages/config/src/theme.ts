export const theme = {
  light: {
    // Core colors (light-first, following CDC)
    base: '#f6f1ea',
    background: '#f6f1ea',
    surface: '#FFFFFF',
    surfaceSoft: '#fdfbf8',
    text: '#161316',
    textSoft: '#5d5660',
    border: 'rgba(22, 19, 22, 0.08)',

    // Brand colors from CDC
    black: '#000000',
    white: '#CCCCCC',
    whitePure: '#FFFFFF',
    purplePremium: '#7B2FBE',
    purpleLight: '#A855F7',
    anthracite: '#1E1E1E',
    lightGray: '#D9D9D9',
    gold: '#D4AF37',

    // Semantic
    primary: '#7B2FBE',
    primaryVariant: '#A855F7',
    accent: '#D4AF37',

    // Elevation / shadow
    shadow: '0 18px 60px rgba(20, 14, 24, 0.08)',

    // Spacing & radii
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 40,
    },
    radius: {
      sm: 8,
      md: 16,
      lg: 24,
    },

    // Typography (base stack)
    fonts: {
      ui: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
    },
  },
  dark: {
    // Core colors
    base: '#000000',
    background: '#000000',
    surface: '#131313',
    surfaceSoft: '#0e0e0e',
    text: '#e5e2e1',
    textSoft: '#cfc2d5',
    border: 'rgba(204, 204, 204, 0.14)',

    // Brand variants
    black: '#000000',
    white: '#CCCCCC',
    purplePremium: '#7B2FBE',
    purpleLight: '#A855F7',
    anthracite: '#1E1E1E',
    lightGray: '#D9D9D9',
    gold: '#E9C349',

    // Semantic
    primary: '#DEB7FF',
    primaryVariant: '#A855F7',
    accent: '#E9C349',

    // Elevation / shadow
    shadow: '0 24px 80px rgba(0, 0, 0, 0.32)',

    // Spacing & radii
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 40,
    },
    radius: {
      sm: 8,
      md: 16,
      lg: 24,
    },

    // Typography
    fonts: {
      ui: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
    },
  },
} as const;
