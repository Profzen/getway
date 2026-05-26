import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { Button, Card, Screen } from '../src/components/ui'
import { colors, typography } from '@getway/theme'

export default function HomeScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.hero}>
        <Text style={styles.kicker}>GETWAY Mobile</Text>
        <Text style={styles.title}>Natif pour iOS et Android</Text>
        <Text style={styles.body}>
          Base Expo dédiée, séparée du web, prête à évoluer en tandem sans dette technique.
        </Text>
      </View>

      <Card title="Architecture" subtitle="UI dédiée mobile, sans réutiliser les composants web">
        <Text style={styles.cardText}>
          Ce squelette mobile n’importe aucun composant web. Il sert de point de départ natif,
          avec Expo Router et des écrans mobiles propres.
        </Text>
      </Card>

      <View style={styles.actions}>
        <Link href="/explore" asChild>
          <Button label="Ouvrir l’exemple d’écran" />
        </Link>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    gap: 20,
  },
  hero: {
    gap: 12,
  },
  kicker: {
    color: colors.brand,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    color: colors.text,
    fontSize: typography.display,
    lineHeight: 42,
    fontWeight: '800',
  },
  body: {
    color: colors.mutedText,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 560,
  },
  actions: {
    alignItems: 'flex-start',
  },
  cardText: {
    color: colors.mutedText,
    fontSize: 14,
    lineHeight: 22,
  },
})
