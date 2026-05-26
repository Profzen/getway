import { Text, View, StyleSheet } from 'react-native'
import { Button, Card, Screen, useTheme } from '../src/components/ui'
import { Link } from 'expo-router'

export default function TestScreen() {
  const { tokens, toggle, mode } = useTheme()

  return (
    <Screen>
      <View style={styles.wrap}>
        <Text style={[styles.title, { color: tokens.colors.text }]}>Test UI</Text>

        <Card title="Theme" subtitle={`mode: ${mode}`}>
          <Button label="Toggle theme" onPress={toggle} />
        </Card>

        <View style={styles.links}>
          <Link href="/" asChild>
            <Button label="Back" variant="ghost" />
          </Link>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  wrap: { gap: 16 },
  title: { fontSize: 22, fontWeight: '800' },
  links: { marginTop: 16 },
})
