import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Screen, Card, useTheme } from '../src/components/ui'
import { fetchJson } from '../src/lib/api'
import { radii, spacing } from '@getway/theme'

type AboutPayload = {
  mission: string
  highlights: string[]
}

export default function AboutScreen() {
  const [data, setData] = useState<AboutPayload | null>(null)
  const { colors } = useTheme()

  useEffect(() => {
    fetchJson<AboutPayload>('/api/about').then(setData).catch(() => setData(null))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="À propos de GetWay" subtitle="Version mobile native">
          <Text style={[styles.body, { color: colors.text }]}>
            {data?.mission ?? 'Build a collaborative digital platform for learning, work, and autonomy.'}
          </Text>
        </Card>

        <Card title="Points forts" subtitle="Ce que la version mobile apporte">
          <View style={styles.list}>
            {(data?.highlights ?? []).map((item) => (
              <View key={item} style={styles.highlightItem}>
                <Text style={[styles.dot, { color: colors.brand }]}>•</Text>
                <Text style={[styles.highlightText, { color: colors.mutedText }]}>{item}</Text>
              </View>
            ))}
          </View>
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  body: { fontSize: 15, lineHeight: 23 },
  list: { gap: 10 },
  highlightItem: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  dot: { fontSize: 16, lineHeight: 22, fontWeight: '800' },
  highlightText: { fontSize: 14, lineHeight: 22, flex: 1 },
})
