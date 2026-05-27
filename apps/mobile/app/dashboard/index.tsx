import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Screen, Card, Button } from '../../src/components/ui'
import { Link } from 'expo-router'
import { colors, spacing } from '@getway/theme'

const sections = [
  { href: '/dashboard/profile', title: 'Profil' },
  { href: '/dashboard/messages', title: 'Messages' },
  { href: '/dashboard/notifications', title: 'Notifications' },
  { href: '/dashboard/opportunities', title: 'Opportunités' },
  { href: '/dashboard/settings', title: 'Paramètres' },
]

export default function DashboardIndex() {
  return (
    <Screen style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Card title="Dashboard" subtitle="Espace de pilotage natif">
          <Text style={styles.body}>
            Accès rapide aux sections utilisateur, aux alertes et aux opportunités.
          </Text>
        </Card>

        <Card title="Raccourcis">
          <View style={styles.grid}>
            {sections.map((section) => (
              <Link key={section.href} href={section.href} asChild>
                <Button label={section.title} variant="secondary" fullWidth />
              </Link>
            ))}
          </View>
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: { paddingHorizontal: 0, paddingTop: 0 },
  content: { padding: spacing.lg, gap: spacing.lg },
  body: { color: colors.mutedText, fontSize: 14, lineHeight: 22 },
  grid: { gap: spacing.md },
})
