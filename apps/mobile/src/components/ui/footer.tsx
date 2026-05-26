import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import { spacing, colors } from '@getway/theme'

export function Footer({ children }: { children?: ReactNode }) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
})

Footer.displayName = 'Footer'
