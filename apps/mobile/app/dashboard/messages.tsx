import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Card } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { colors, spacing } from '@getway/theme'

export default function Messages() {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    fetchJson<{ items: any[] }>('/api/dashboard/messages').then((d) => setItems(d.items || [])).catch(() => setItems([]))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Messages" subtitle="Derniers échanges">
          {items.map((it) => (
            <Card key={it.id} title={it.from} subtitle={it.body} />
          ))}
          {!items.length ? <Text style={styles.empty}>Aucun message pour le moment.</Text> : null}
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  empty: { color: colors.mutedText, fontSize: 14 },
})
