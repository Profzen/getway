import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Card, useTheme } from '../../src/components/ui'
import { fetchJson } from '../../src/lib/api'
import { spacing } from '@getway/theme'

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const { colors } = useTheme()

  useEffect(() => {
    fetchJson<{ user: any }>('/api/dashboard/profile').then((d) => setUser(d.user)).catch(() => setUser(null))
  }, [])

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Profil" subtitle={user ? user.username : 'Chargement'}>
          <Text style={[styles.body, { color: colors.text }]}>{user?.email ?? '—'}</Text>
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  body: { fontSize: 15, lineHeight: 23 },
})
