export const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    500: '#6366f1'
  },
  neutral: {
    50: '#f9fafb',
    500: '#6b7280'
  }
}

export const spacing = {
  px: '1px',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem'
}

export const tailwind = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        neutral: colors.neutral
      }
    }
  }
}

export default { colors, spacing, tailwind }
