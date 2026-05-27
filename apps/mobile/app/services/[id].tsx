import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { Screen, Card, Button, useTheme } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { spacing } from '@getway/theme'

type Service = {
  id: string
  title: string
  provider: string
  price: string
  rating: number
  reviews: number
  clients: number
  level: string
  description: string
  tags: string[]
}

export default function ServiceDetail() {
  const params = useLocalSearchParams()
  const id = params.id as string
  const [item, setItem] = useState<Service | null>(null)
  const { colors } = useTheme()

  useEffect(() => {
    if (!id) return
    fetchJson<Service>(`/api/services/${id}`).then(setItem).catch(() => setItem(null))
  }, [id])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title={item?.title ?? 'Chargement'} subtitle={item?.provider ?? 'Service natif'}>
          <Text style={[styles.description, { color: colors.text }]}>{item?.description ?? '—'}</Text>
          <View style={styles.metaRow}>
            <Text style={[styles.meta, { color: colors.brand }]}>{item?.price ?? ''}</Text>
            <Text style={[styles.meta, { color: colors.brand }]}>{item?.level ?? ''}</Text>
          </View>
          <Text style={[styles.detail, { color: colors.mutedText }]}>Rating: {item?.rating ?? '—'} · Reviews: {item?.reviews ?? '—'}</Text>
          <Text style={[styles.detail, { color: colors.mutedText }]}>Clients: {item?.clients ?? '—'}</Text>
          <View style={styles.tags}>
            {item?.tags?.map((tag) => (
              <Text key={tag} style={[styles.tag, { color: colors.brand, backgroundColor: 'rgba(12, 143, 123, 0.10)' }]}>{tag}</Text>
            ))}
          </View>
          <Button label="Contacter ce prestataire" fullWidth />
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  description: { fontSize: 15, lineHeight: 23 },
  metaRow: { flexDirection: 'row', gap: 12, flexWrap: 'wrap' },
  meta: { fontSize: 13, fontWeight: '700' },
  detail: { fontSize: 13, lineHeight: 20 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, fontSize: 12, fontWeight: '700' },
})
