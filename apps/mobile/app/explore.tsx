import { View, Text, StyleSheet } from 'react-native'
import { Screen, Card, useTheme } from '../src/components/ui'

export default function ExploreScreen() {
  const { colors } = useTheme()

  return (
    <Screen style={styles.screen}>
      <Text style={[styles.title, { color: colors.text }]}>Écran d’exemple</Text>
      <Card title="Navigation native" subtitle="Toujours séparée du web">
        <Text style={[styles.body, { color: colors.mutedText }]}>
          Ici seront branchés les parcours mobiles natifs, indépendants du web, tout en partageant
          les règles de design du produit.
        </Text>
      </Card>
      <View style={styles.note}>
        <Text style={[styles.noteText, { color: colors.mutedText }]}>
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
  title: { fontSize: 28, fontWeight: '800' },
  body: { fontSize: 16, lineHeight: 24 },
  note: {
    borderLeftWidth: 3,
    borderLeftColor: '#0C8F7B',
    paddingLeft: 12,
  },
  noteText: { fontSize: 14, lineHeight: 22 },
})
