import React from 'react'
import { View, Text, StyleSheet, ViewProps } from 'react-native'
import { colors, radii, spacing, shadows } from '@getway/theme'

type CardProps = ViewProps & {
  title?: string
  subtitle?: string
}

export function Card({ title, subtitle, children, style, ...props }: CardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
      {(title || subtitle) && (
        <View style={styles.header}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.lg,
    ...shadows.soft,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: 4,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.mutedText,
    fontSize: 13,
    lineHeight: 20,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
})

Card.displayName = 'Card'
