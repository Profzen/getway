import { theme } from './theme';

export const rnTheme = {
  light: {
    background: theme.light.background,
    surface: theme.light.surface,
    surfaceSoft: theme.light.surfaceSoft,
    text: theme.light.text,
    textSoft: theme.light.textSoft,
    border: theme.light.border,
    primary: theme.light.primary,
    primaryVariant: theme.light.primaryVariant,
    accent: theme.light.accent,
    shadow: theme.light.shadow,
    radius: theme.light.radius,
    spacing: theme.light.spacing,
    fonts: theme.light.fonts,
  },
  dark: {
    background: theme.dark.background,
    surface: theme.dark.surface,
    surfaceSoft: theme.dark.surfaceSoft,
    text: theme.dark.text,
    textSoft: theme.dark.textSoft,
    border: theme.dark.border,
    primary: theme.dark.primary,
    primaryVariant: theme.dark.primaryVariant,
    accent: theme.dark.accent,
    shadow: theme.dark.shadow,
    radius: theme.dark.radius,
    spacing: theme.dark.spacing,
    fonts: theme.dark.fonts,
  },
} as const;

export type RNTheme = typeof rnTheme.light;

export default rnTheme;
