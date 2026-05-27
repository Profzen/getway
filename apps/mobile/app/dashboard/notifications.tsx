import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Card, useTheme } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { spacing } from '@getway/theme'

export default function Notifications() {
  const [items, setItems] = useState<any[]>([])
  const { colors } = useTheme()

  useEffect(() => {
    fetchJson<{ items: any[] }>('/api/dashboard/notifications').then((d) => setItems(d.items || [])).catch(() => setItems([]))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Notifications" subtitle="Alertes système">
          {items.map((it) => (
            <Card key={it.id} title={it.text} />
          ))}
          {!items.length ? <Text style={[styles.empty, { color: colors.mutedText }]}>Aucune notification pour le moment.</Text> : null}
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  empty: { fontSize: 14 },
})
