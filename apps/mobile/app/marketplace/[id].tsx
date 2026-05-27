import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
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
  details: string
  tags: string[]
}

export default function MarketplaceDetail() {
  const params = useLocalSearchParams()
  const id = params.id as string
  const [item, setItem] = useState<Opportunity | null>(null)

  useEffect(() => {
    if (!id) return
    fetchJson<Opportunity>(`/api/marketplace/${id}`).then(setItem).catch(() => setItem(null))
  }, [id])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title={item?.title ?? 'Chargement'} subtitle={item?.company ?? 'Marketplace'}>
          <Text style={styles.description}>{item?.details ?? '—'}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>{item?.salary ?? ''}</Text>
            <Text style={styles.meta}>{item?.location ?? ''}</Text>
            <Text style={styles.meta}>{item?.type ?? ''}</Text>
          </View>
          <Text style={styles.detail}>Rating: {item?.rating ?? '—'} · Reviews: {item?.reviews ?? '—'}</Text>
          <View style={styles.tags}>
            {item?.tags?.map((tag) => (
              <Text key={tag} style={styles.tag}>{tag}</Text>
            ))}
          </View>
          <Button label="Postuler" fullWidth />
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  description: { color: colors.text, fontSize: 15, lineHeight: 23 },
  metaRow: { flexDirection: 'row', gap: 10, flexWrap: 'wrap' },
  meta: { color: colors.brand, fontSize: 13, fontWeight: '700' },
  detail: { color: colors.mutedText, fontSize: 13, lineHeight: 20 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { color: colors.brand, backgroundColor: 'rgba(94, 234, 212, 0.1)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, fontSize: 12, fontWeight: '700' },
})
