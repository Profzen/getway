import { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Screen, Input, Button, Card } from '../src/components/ui'
import { API_BASE } from '../src/config'
import { colors, spacing } from '@getway/theme'

export default function ContactScreen() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function submit() {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE.replace(/\/$/, '')}/api/contact`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      setResult(data.ok ? 'Message envoyé' : data.error ?? 'Erreur')
    } catch {
      setResult('Impossible de joindre l’API')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Contact" subtitle="Envoyer un message au support ou à l’équipe">
          <Input placeholder="Nom" value={name} onChangeText={setName} />
          <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <Input placeholder="Message" value={message} onChangeText={setMessage} multiline style={styles.message} />
          <Button label={loading ? 'Envoi…' : 'Envoyer'} onPress={submit} loading={loading} fullWidth />
          {result ? <Text style={styles.feedback}>{result}</Text> : null}
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  message: { minHeight: 120, textAlignVertical: 'top' },
  feedback: { color: colors.brand, fontSize: 14, fontWeight: '700' },
})
