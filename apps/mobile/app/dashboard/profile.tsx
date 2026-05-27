import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Card } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { colors, spacing } from '@getway/theme'

export default function Profile() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    fetchJson<{ user: any }>('/api/dashboard/profile').then((d) => setUser(d.user)).catch(() => setUser(null))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Profil" subtitle={user ? user.username : 'Chargement'}>
          <Text style={styles.body}>{user?.email ?? '—'}</Text>
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  body: { color: colors.text, fontSize: 15, lineHeight: 23 },
})
