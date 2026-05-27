export const darkColors = {
  brand: '#7EE0C6',
  background: '#07111F',
  surface: '#101B2C',
  surfaceElevated: '#16233A',
  text: '#F8FAFC',
  mutedText: '#CBD5E1',
  border: 'rgba(255,255,255,0.08)',
  borderStrong: 'rgba(255,255,255,0.14)',
  danger: '#F87171',
  warning: '#FBBF24',
  success: '#22C55E',
}

export const lightColors = {
  brand: '#0C8F7B',
  background: '#F5F8FB',
  surface: '#FFFFFF',
  surfaceElevated: '#EDF3F8',
  text: '#0F172A',
  mutedText: '#475569',
  border: 'rgba(15, 23, 42, 0.10)',
  borderStrong: 'rgba(15, 23, 42, 0.16)',
  danger: '#DC2626',
  warning: '#D97706',
  success: '#15803D',
}

export const colors = darkColors

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
      colors: darkColors,
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
  colors: darkColors,
  radii,
  spacing,
  typography,
  shadows,
}

export const themePalettes = {
  dark: darkColors,
  light: lightColors,
}

export type ThemeMode = keyof typeof themePalettes
export type ThemeColors = typeof darkColors

export function getThemeColors(mode: ThemeMode) {
  return themePalettes[mode]
}

export default tokens
