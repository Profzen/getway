import { View, StyleSheet, ViewProps } from 'react-native'
import { colors, spacing } from '@getway/theme'

export function Screen({ style, ...props }: ViewProps) {
  return <View style={[styles.screen, style]} {...props} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
})
