import React from 'react'
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'
import { colors, spacing, typography } from '@getway/theme'

type InputProps = TextInputProps & {
  label?: string
  error?: string | boolean
}

export function Input({ label, error, style, ...props }: InputProps) {
  return (
    <View style={styles.wrap}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput placeholderTextColor={colors.mutedText} style={[styles.input, style]} {...props} />
      {error ? <Text style={styles.error}>{typeof error === 'string' ? error : 'Error'}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: { gap: 6 },
  label: { color: colors.mutedText, fontSize: 13 },
  input: {
    color: colors.text,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: typography.body,
  },
  error: { color: colors.danger, fontSize: 12, marginTop: 4 },
})

export default Input
