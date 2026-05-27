import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { spacing } from '@getway/theme'
import { useTheme } from './use-theme'

type HeaderProps = {
  title?: string
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
}

export function Header({ title, left, right, onBack }: HeaderProps) {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
      <View style={styles.side}>
        {left ? (
          <>{left}</>
        ) : onBack ? (
          <Pressable onPress={onBack}>
            <Text style={[styles.back, { color: colors.brand }]}>Back</Text>
          </Pressable>
        ) : null}
      </View>
      <View style={styles.titleWrap}>
        <Text numberOfLines={1} style={[styles.title, { color: colors.text }]}>
          {title}
        </Text>
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
  },
  titleWrap: { flex: 1, alignItems: 'center' },
  title: { fontSize: 17, fontWeight: '700' },
  side: { width: 72, alignItems: 'flex-start' },
  back: { fontWeight: '600' },
})

Header.displayName = 'Header'
