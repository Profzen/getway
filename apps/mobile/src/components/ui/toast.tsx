import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing, radii } from '@getway/theme'

export type ToastVariant = 'info' | 'success' | 'error'

type ToastProps = {
  message: string
  variant?: ToastVariant
}

export function Toast({ message, variant = 'info' }: ToastProps) {
  const bg = variant === 'success' ? colors.success : variant === 'error' ? colors.danger : colors.surface
  const color = variant === 'success' ? '#06211A' : variant === 'error' ? '#2A0A0A' : colors.text

  return (
    <View style={[styles.container, { backgroundColor: bg }]}> 
      <Text style={[styles.text, { color }]}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
    marginVertical: spacing.xs,
    minWidth: 160,
    maxWidth: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },
  text: {
    fontSize: 14,
  },
})

Toast.displayName = 'Toast'
