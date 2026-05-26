import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { colors, spacing } from '@getway/theme'

type HeaderProps = {
  title?: string
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
}

export function Header({ title, left, right, onBack }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>{left ? <>{left}</> : onBack ? <Pressable onPress={onBack}><Text style={styles.back}>Back</Text></Pressable> : null}</View>
      <View style={styles.titleWrap}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
      </View>
      <View style={styles.side}>{right}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  titleWrap: { flex: 1, alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '700', color: colors.text },
  side: { width: 72, alignItems: 'flex-start' },
  back: { color: colors.brand, fontWeight: '600' },
})

Header.displayName = 'Header'
