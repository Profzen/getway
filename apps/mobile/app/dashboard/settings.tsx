import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Screen, Card } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { colors, spacing } from '@getway/theme'

export default function Settings() {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    fetchJson<{ items: any[] }>('/api/dashboard/settings').then((d) => setItems(d.items || [])).catch(() => setItems([]))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Paramètres" subtitle="Préférences utilisateur">
          <View style={styles.list}>
            {items.map((item) => (
              <View key={item.id} style={styles.row}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.value}>{item.value ? 'On' : 'Off'}</Text>
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
  list: { gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  label: { color: colors.text, fontSize: 14, fontWeight: '700' },
  value: { color: colors.brand, fontSize: 14, fontWeight: '700' },
})
