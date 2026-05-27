import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { Screen, Card, Button, useTheme } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { spacing } from '@getway/theme'

type Opportunity = {
  id: string
  title: string
  company: string
  salary: string
  location: string
  type: string
  rating: number
  reviews: number
  tags: string[]
}

export default function MarketplaceList() {
  const [items, setItems] = useState<Opportunity[]>([])
  const { colors } = useTheme()

  useEffect(() => {
    fetchJson<{ items: Opportunity[] }>('/api/marketplace')
      .then((data) => setItems(data.items || []))
      .catch(() => setItems([]))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Marketplace" subtitle="Opportunités ouvertes">
          <View style={styles.grid}>
            {items.map((item) => (
              <View key={item.id} style={styles.item}>
                <Text style={[styles.itemTitle, { color: colors.text }]}>{item.title}</Text>
                <Text style={[styles.itemMeta, { color: colors.brand }]}>{item.company}</Text>
                <Text style={[styles.itemDescription, { color: colors.mutedText }]}>{item.salary} · {item.location} · {item.type}</Text>
                <View style={styles.tags}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <Text key={tag} style={[styles.tag, { color: colors.brand, backgroundColor: 'rgba(12, 143, 123, 0.10)' }]}>{tag}</Text>
                  ))}
                </View>
                <Link href={{ pathname: '/marketplace/[id]', params: { id: item.id } } as any} asChild>
                  <Button label="Ouvrir l’offre" variant="secondary" fullWidth />
                </Link>
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
  grid: { gap: spacing.md },
  item: { padding: spacing.md, borderRadius: 16, backgroundColor: 'rgba(12, 143, 123, 0.06)', borderWidth: 1, borderColor: 'rgba(12, 143, 123, 0.12)', gap: 8 },
  itemTitle: { fontSize: 16, fontWeight: '800' },
  itemMeta: { fontSize: 13, fontWeight: '700' },
  itemDescription: { fontSize: 14, lineHeight: 21 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, fontSize: 12, fontWeight: '700' },
})
