import React, { createContext, useContext, useState, ReactNode } from 'react'
import { StatusBar } from 'react-native'
import tokens, { getThemeColors, type ThemeColors, type ThemeMode } from '@getway/theme'

type ThemeContextValue = {
  mode: ThemeMode
  tokens: typeof tokens
  colors: ThemeColors
  toggle: () => void
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children, initialMode = 'dark' }: { children: ReactNode; initialMode?: ThemeMode }) {
  const [mode, setMode] = useState<ThemeMode>(initialMode)
  const colors = getThemeColors(mode)

  const value: ThemeContextValue = {
    mode,
    tokens,
    colors,
    setMode,
    toggle: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')),
  }

  return (
    <ThemeContext.Provider value={value}>
      <StatusBar barStyle={mode === 'dark' ? 'light-content' : 'dark-content'} />
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider')
  return ctx
}

export default ThemeProvider
