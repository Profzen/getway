import { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Input, Button, Card, useTheme } from '../src/components/ui'
import { API_BASE } from '../src/config'
import { spacing } from '@getway/theme'

export default function SignupScreen() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { colors } = useTheme()

  async function submit() {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE.replace(/\/$/, '')}/api/signup`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, email }),
      })
      const data = await res.json()
      setResult(data.ok ? 'Compte créé' : data.error ?? 'Erreur')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Créer un compte" subtitle="Inscription native">
          <Input placeholder="username" value={username} onChangeText={setUsername} />
          <Input placeholder="email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <Button label={loading ? 'Création…' : 'S’inscrire'} onPress={submit} loading={loading} fullWidth />
          {result ? <Text style={[styles.feedback, { color: colors.brand }]}>{result}</Text> : null}
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  feedback: { fontSize: 14, fontWeight: '700' },
})
