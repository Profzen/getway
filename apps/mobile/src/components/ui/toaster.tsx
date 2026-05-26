import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { Toast, ToastVariant } from './toast'
import { spacing } from '@getway/theme'

type ToastItem = { id: string; message: string; variant?: ToastVariant }

type ToasterContextValue = {
  showToast: (message: string, variant?: ToastVariant) => void
}

const ToasterContext = createContext<ToasterContextValue | undefined>(undefined)

export function ToasterProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const showToast = useCallback((message: string, variant?: ToastVariant) => {
    const id = String(Date.now())
    setToasts((s) => [...s, { id, message, variant }])
    setTimeout(() => {
      setToasts((s) => s.filter((t) => t.id !== id))
    }, 3500)
  }, [])

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <View pointerEvents="box-none" style={styles.container}>
        {toasts.map((t) => (
          <Toast key={t.id} message={t.message} variant={t.variant} />
        ))}
      </View>
    </ToasterContext.Provider>
  )
}

export function useToaster() {
  const ctx = useContext(ToasterContext)
  if (!ctx) throw new Error('useToaster must be used within ToasterProvider')
  return ctx
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    zIndex: 9999,
  },
})

ToasterProvider.displayName = 'ToasterProvider'
