export const colors = {
  brand: '#7EE0C6',
  background: '#0B1220',
  surface: '#111B2D',
  surfaceElevated: '#16233A',
  text: '#F8FAFC',
  mutedText: '#CBD5E1',
  border: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.14)',
  danger: '#F87171',
  warning: '#FBBF24',
  success: '#22C55E',
}

export const radii = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  full: 999,
}

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
}

export const typography = {
  display: 36,
  title: 28,
  subtitle: 20,
  body: 16,
  caption: 12,
}

export const shadows = {
  soft: {
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
}

export const tailwind = {
  theme: {
    extend: {
      colors,
      borderRadius: {
        xs: `${radii.xs}px`,
        sm: `${radii.sm}px`,
        md: `${radii.md}px`,
        lg: `${radii.lg}px`,
        xl: `${radii.xl}px`,
        full: `${radii.full}px`,
      },
    },
  },
}

export const tokens = {
  colors,
  radii,
  spacing,
  typography,
  shadows,
}

export default tokens
