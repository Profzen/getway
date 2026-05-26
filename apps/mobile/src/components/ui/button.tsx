import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, PressableProps } from 'react-native'
import { colors, radii, spacing } from '@getway/theme'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PressableProps & {
  label: string
  variant?: ButtonVariant
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: colors.brand,
  },
  secondary: {
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
}

const textStyles: Record<ButtonVariant, TextStyle> = {
  primary: {
    color: '#06101A',
  },
  secondary: {
    color: colors.text,
  },
  ghost: {
    color: colors.text,
  },
}

export function Button({ label, variant = 'primary', fullWidth = false, style, ...props }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        fullWidth && styles.fullWidth,
        variantStyles[variant],
        pressed && styles.pressed,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.label, textStyles[variant]]}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
})
