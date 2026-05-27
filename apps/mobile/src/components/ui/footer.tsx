import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import { spacing } from '@getway/theme'
import { useTheme } from './use-theme'

export function Footer({ children }: { children?: ReactNode }) {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderTopWidth: 1,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Footer.displayName = 'Footer'
