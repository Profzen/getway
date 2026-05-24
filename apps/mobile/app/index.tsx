import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View, Switch } from 'react-native';
import { rnTheme } from '../../packages/config/src/react-native';

const highlights = [
  'Apprendre',
  'Collaborer',
  'Évoluer',
  'Travailler',
  'Gagner en autonomie',
];

export default function HomeScreen() {
  const [isDark, setIsDark] = React.useState(false);
  const t = isDark ? rnTheme.dark : rnTheme.light;

  return (
    <View style={[styles.screen, { backgroundColor: t.background }]}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.themeBar}>
          <Text style={{ color: t.text, fontWeight: '600' }}>{isDark ? 'Dark' : 'Light'}</Text>
          <Switch value={isDark} onValueChange={setIsDark} />
        </View>

        <View style={styles.hero}>
          <Text style={[styles.brand, { color: t.accent }]}>GETWAY</Text>
          <Text style={[styles.kicker, { color: t.primary }]}>Mobile Expo base</Text>
          <Text style={[styles.title, { color: t.text }]}>Votre passerelle vers l&apos;avenir numérique</Text>
          <Text style={[styles.subtitle, { color: t.textSoft }]}>Une base claire, mobile-first, conçue pour connecter les talents aux opportunités.</Text>
          <View style={styles.actions}>
            <Pressable style={[styles.primaryButton, { backgroundColor: t.primary }] }>
              <Text style={[styles.primaryButtonText, { color: t.whitePure }]}>Rejoindre</Text>
            </Pressable>
            <Pressable style={[styles.secondaryButton, { borderColor: t.border, backgroundColor: t.surface }]}>
              <Text style={[styles.secondaryButtonText, { color: t.text }]}>Découvrir</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Fondations</Text>
          <Text style={styles.cardTitle}>Progression, collaboration et autonomie</Text>
          <View style={styles.chips}>
            {highlights.map((item) => (
              <View key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Sécurité</Text>
          <Text style={styles.cardText}>
            Les données sensibles, les accès et les transitions critiques devront être gérés avec des standards de sécurité élevés.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  themeBar: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  hero: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(22, 19, 22, 0.08)',
    shadowColor: '#1e1325',
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 3,
  },
  brand: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  kicker: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  primaryButton: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  primaryButtonText: {
    fontWeight: '700',
  },
  secondaryButton: {
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  secondaryButtonText: {
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(22, 19, 22, 0.08)',
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#d4af37',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#161316',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#5d5660',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    borderRadius: 999,
    backgroundColor: 'rgba(123, 47, 190, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(123, 47, 190, 0.14)',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7b2fbe',
  },
});
