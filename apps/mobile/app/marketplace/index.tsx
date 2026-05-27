import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { Screen, Card, Button } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { colors, spacing } from '@getway/theme'

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
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemMeta}>{item.company}</Text>
                <Text style={styles.itemDescription}>{item.salary} · {item.location} · {item.type}</Text>
                <View style={styles.tags}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <Text key={tag} style={styles.tag}>{tag}</Text>
                  ))}
                </View>
                <Link href={`/marketplace/${item.id}`} asChild>
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
  item: { padding: spacing.md, borderRadius: 16, backgroundColor: colors.surfaceElevated, borderWidth: 1, borderColor: colors.border, gap: 8 },
  itemTitle: { color: colors.text, fontSize: 16, fontWeight: '800' },
  itemMeta: { color: colors.brand, fontSize: 13, fontWeight: '700' },
  itemDescription: { color: colors.mutedText, fontSize: 14, lineHeight: 21 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { color: colors.brand, backgroundColor: 'rgba(94, 234, 212, 0.1)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, fontSize: 12, fontWeight: '700' },
})
