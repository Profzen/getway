import React from 'react'
import { View, StyleSheet, ViewProps, Platform, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, spacing } from '@getway/theme'

export function Screen({ style, children, ...props }: ViewProps & { children?: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.screen} {...props}>
        <View style={[styles.inner, style]}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1 },
  inner: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
})
