import React from 'react'
import { View, StyleSheet, ViewProps, Platform, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { spacing } from '@getway/theme'
import { useTheme } from './use-theme'

export function Screen({ style, children, ...props }: ViewProps & { children?: React.ReactNode }) {
  const { colors } = useTheme()

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.screen}
        {...props}
      >
        <View style={[styles.inner, style]}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  screen: { flex: 1 },
  inner: {
    flex: 1,
    padding: spacing.lg,
  },
})
