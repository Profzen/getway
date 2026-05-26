import { View, Text, StyleSheet } from 'react-native'
import { Screen, Card } from '../src/components/ui'
import { colors } from '@getway/theme'

export default function ExploreScreen() {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}>Écran d’exemple</Text>
      <Card title="Navigation native" subtitle="Toujours séparée du web">
        <Text style={styles.body}>
          Ici seront branchés les parcours mobiles natifs, indépendants du web, tout en partageant
          les règles de design du produit.
        </Text>
      </Card>
      <View style={styles.note}>
        <Text style={styles.noteText}>
          Les futures vues iOS et Android vivront ici, avec leurs composants natifs et leurs états propres.
        </Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
  },
  body: {
    color: colors.mutedText,
    fontSize: 16,
    lineHeight: 24,
  },
  note: {
    borderLeftWidth: 3,
    borderLeftColor: colors.brand,
    paddingLeft: 12,
  },
  noteText: {
    color: colors.mutedText,
    fontSize: 14,
    lineHeight: 22,
  },
})
