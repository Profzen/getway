import { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Input, Button, Card, useTheme } from '../src/components/ui'
import { API_BASE } from '../src/config'
import { spacing } from '@getway/theme'

export default function LoginScreen() {
  const [username, setUsername] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { colors } = useTheme()

  async function submit() {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE.replace(/\/$/, '')}/api/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username }),
      })
      const data = await res.json()
      setToken(data.token ?? null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Connexion" subtitle="Authentification native">
          <Input placeholder="username" value={username} onChangeText={setUsername} />
          <Button label={loading ? 'Connexion…' : 'Se connecter'} onPress={submit} loading={loading} fullWidth />
          {token ? <Text style={[styles.token, { color: colors.brand }]}>Token: {token}</Text> : null}
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  token: { fontSize: 13, lineHeight: 20, fontWeight: '700' },
})
