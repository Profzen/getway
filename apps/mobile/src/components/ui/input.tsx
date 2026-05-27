import React from 'react'
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'
import { spacing, typography } from '@getway/theme'
import { useTheme } from './use-theme'

type InputProps = TextInputProps & {
  label?: string
  error?: string | boolean
}

export function Input({ label, error, style, ...props }: InputProps) {
  const { colors } = useTheme()

  return (
    <View style={styles.wrap}>
      {label ? <Text style={[styles.label, { color: colors.mutedText }]}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.mutedText}
        style={[
          styles.input,
          {
            color: colors.text,
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
          style,
        ]}
        {...props}
      />
      {error ? <Text style={[styles.error, { color: colors.danger }]}>{typeof error === 'string' ? error : 'Error'}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: { gap: 6 },
  label: { fontSize: 13 },
  input: {
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: typography.body,
  },
  error: { fontSize: 12, marginTop: 4 },
})

export default Input
