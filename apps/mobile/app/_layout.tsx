import { Stack } from 'expo-router'
import ThemeProvider, { useThemeContext } from '../src/components/ui/theme-provider'

function AppStack() {
  const { colors } = useThemeContext()

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider initialMode="dark">
      <AppStack />
    </ThemeProvider>
  )
}
