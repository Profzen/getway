import { useThemeContext } from './theme-provider'

export function useTheme() {
  const ctx = useThemeContext()
  return {
    mode: ctx.mode,
    tokens: ctx.tokens,
    toggle: ctx.toggle,
  }
}

export default useTheme
