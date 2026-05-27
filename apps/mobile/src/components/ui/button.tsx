import React, { ReactNode } from 'react'
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle, PressableProps, ActivityIndicator } from 'react-native'
import { radii, spacing } from '@getway/theme'
import { useTheme } from './use-theme'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = PressableProps & {
  label?: string
  children?: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  loading?: boolean
  icon?: ReactNode
  accessibilityLabel?: string
}

export function Button({ label, children, variant = 'primary', fullWidth = false, loading = false, icon, accessibilityLabel, style, ...props }: ButtonProps) {
  const { colors } = useTheme()
  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: { backgroundColor: colors.brand },
    secondary: { backgroundColor: colors.surfaceElevated, borderWidth: 1, borderColor: colors.border },
    ghost: { backgroundColor: 'transparent' },
  }

  const textStyles: Record<ButtonVariant, TextStyle> = {
    primary: { color: '#06101A' },
    secondary: { color: colors.text },
    ghost: { color: colors.text },
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      disabled={loading || props.disabled}
      style={({ pressed }) =>
        [styles.button, fullWidth && styles.fullWidth, variantStyles[variant], pressed && styles.pressed, style] as any
      }
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={textStyles[variant].color as string} />
      ) : (
        <>
          {icon ? <>{icon}</> : null}
          <Text style={[styles.label, textStyles[variant]]}>{label ?? children}</Text>
        </>
      )}
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
