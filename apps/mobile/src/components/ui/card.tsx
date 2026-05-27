import React from 'react'
import { View, Text, StyleSheet, ViewProps } from 'react-native'
import { radii, spacing, shadows } from '@getway/theme'
import { useTheme } from './use-theme'

type CardProps = ViewProps & {
  title?: string
  subtitle?: string
}

export function Card({ title, subtitle, children, style, ...props }: CardProps) {
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
        style,
      ]}
      {...props}
    >
      {(title || subtitle) && (
        <View style={styles.header}>
          {title ? <Text style={[styles.title, { color: colors.text }]}>{title}</Text> : null}
          {subtitle ? <Text style={[styles.subtitle, { color: colors.mutedText }]}>{subtitle}</Text> : null}
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: radii.lg,
    ...shadows.soft,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 20,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
})

Card.displayName = 'Card'
