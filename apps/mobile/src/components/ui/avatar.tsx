import React from 'react'
import { Image, View, Text, StyleSheet, ImageSourcePropType } from 'react-native'
import { colors, radii, spacing } from '@getway/theme'

type AvatarProps = {
  size?: number
  source?: ImageSourcePropType | null
  initials?: string
  style?: any
}

export function Avatar({ size = 48, source, initials, style }: AvatarProps) {
  const fontSize = Math.max(12, Math.floor(size / 2.8))

  if (source) {
    return <Image source={source} style={[{ width: size, height: size, borderRadius: size / 2 }, style]} />
  }

  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, style]}>
      <Text style={[styles.text, { fontSize }]}>{initials?.slice(0, 2).toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceElevated,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    color: colors.text,
    fontWeight: '700',
  },
})

export default Avatar
