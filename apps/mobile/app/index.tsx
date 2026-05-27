import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { Button, Card, Header, Screen, useTheme } from '../src/components/ui'
import { colors, radii, spacing, typography } from '@getway/theme'

const sections = [
  { href: '/about', title: 'About', subtitle: 'Mission et repères' },
  { href: '/services', title: 'Services', subtitle: 'Offres et expertise' },
  { href: '/marketplace', title: 'Marketplace', subtitle: 'Opportunités ouvertes' },
  { href: '/dashboard', title: 'Dashboard', subtitle: 'Espace utilisateur' },
  { href: '/login', title: 'Login', subtitle: 'Connexion native' },
  { href: '/signup', title: 'Signup', subtitle: 'Créer un compte' },
]

export default function HomeScreen() {
  const router = useRouter()
  const { mode, toggle } = useTheme()

  return (
    <Screen style={styles.screen}>
      <Header
        title="GetWay Mobile"
        right={
          <Pressable onPress={toggle} style={styles.modeButton}>
            <Text style={styles.modeButtonText}>{mode === 'dark' ? 'Light' : 'Dark'}</Text>
          </Pressable>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.kicker}>Native iOS + Android</Text>
          <Text style={styles.title}>Une vraie app mobile, pas un simple écran de confirmation.</Text>
          <Text style={styles.body}>
            Cette version Expo consomme les routes HTTP du web et affiche les parcours principaux
            dans une interface native dédiée au mobile.
          </Text>

          <View style={styles.heroActions}>
            <Button label="Explorer" onPress={() => router.push('/explore')} fullWidth />
            <Link href="/marketplace" asChild>
              <Button label="Voir les opportunités" variant="secondary" fullWidth />
            </Link>
          </View>
        </View>

        <View style={styles.statsRow}>
          <Card style={styles.statCard} title="Routes" subtitle="Web + API">
            <Text style={styles.statValue}>13+</Text>
          </Card>
          <Card style={styles.statCard} title="Mobile" subtitle="iOS / Android">
            <Text style={styles.statValue}>Expo</Text>
          </Card>
        </View>

        <Card title="Navigation principale" subtitle="Accès direct aux écrans natifs">
          <View style={styles.sectionGrid}>
            {sections.map((section) => (
              <Link key={section.href} href={section.href} asChild>
                <Pressable style={({ pressed }) => [styles.sectionCard, pressed && styles.sectionPressed]}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
                </Pressable>
              </Link>
            ))}
          </View>
        </Card>

        <Card title="Ce qui tourne déjà" subtitle="Le mobile parle au web via HTTP">
          <Text style={styles.listItem}>• Login / signup via API</Text>
          <Text style={styles.listItem}>• Services avec détail natif</Text>
          <Text style={styles.listItem}>• Marketplace avec cartes et filtres</Text>
          <Text style={styles.listItem}>• Dashboard avec profil, messages et notifications</Text>
        </Card>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  modeButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: radii.full,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
  },
  modeButtonText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 12,
  },
  hero: {
    padding: spacing.lg,
    borderRadius: radii.xl,
    backgroundColor: 'rgba(94, 234, 212, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(94, 234, 212, 0.18)',
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
    lineHeight: 40,
    fontWeight: '900',
  },
  body: {
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 23,
  },
  heroActions: {
    gap: 10,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
  },
  statValue: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  sectionGrid: {
    gap: spacing.md,
  },
  sectionCard: {
    padding: spacing.md,
    borderRadius: radii.lg,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 4,
  },
  sectionPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  sectionSubtitle: {
    color: colors.mutedText,
    fontSize: 13,
  },
  listItem: {
    color: colors.mutedText,
    fontSize: 14,
    lineHeight: 22,
  },
})
