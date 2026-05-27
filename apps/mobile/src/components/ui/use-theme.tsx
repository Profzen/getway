import { useThemeContext } from './theme-provider'

export function useTheme() {
  const ctx = useThemeContext()
  return {
    mode: ctx.mode,
    tokens: ctx.tokens,
    colors: ctx.colors,
    toggle: ctx.toggle,
    setMode: ctx.setMode,
  }
}

export default useTheme
