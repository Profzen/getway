import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { Screen, Card, Button } from '../src/components/ui'
import { fetchJson } from '../src/lib/api'
import { colors, spacing } from '@getway/theme'

type OnboardingPayload = {
  steps: string[]
  callToAction: string
}

export default function Onboarding() {
  const router = useRouter()
  const [data, setData] = useState<OnboardingPayload | null>(null)

  useEffect(() => {
    fetchJson<OnboardingPayload>('/api/onboarding').then(setData).catch(() => setData(null))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Bienvenue sur GetWay" subtitle="Parcours de démarrage">
          <Text style={styles.body}>{data?.callToAction ?? 'Start now and unlock the native mobile experience.'}</Text>
        </Card>

        <Card title="Étapes" subtitle="Simple et direct">
          <View style={styles.list}>
            {(data?.steps ?? []).map((step, index) => (
              <View key={step} style={styles.stepRow}>
                <Text style={styles.index}>{index + 1}</Text>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>
        </Card>

        <Button label="Commencer" onPress={() => router.push('/signup')} fullWidth />
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  body: { color: colors.text, fontSize: 15, lineHeight: 23 },
  list: { gap: 12 },
  stepRow: { flexDirection: 'row', gap: 12, alignItems: 'center' },
  index: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.brand,
    color: '#071019',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '900',
  },
  stepText: { flex: 1, color: colors.mutedText, fontSize: 14, lineHeight: 22 },
})
