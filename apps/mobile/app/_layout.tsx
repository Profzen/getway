import { Stack } from 'expo-router'
import ThemeProvider from '../src/components/ui/theme-provider'

export default function RootLayout() {
  return (
    <ThemeProvider initialMode="dark">
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0B1220' },
        }}
      />
    </ThemeProvider>
  )
}
