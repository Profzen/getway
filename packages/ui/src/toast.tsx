'use client'

import * as React from 'react'
import { X } from 'lucide-react'

import { cn } from './lib/utils'

export type ToastProps = React.ComponentProps<'div'> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastActionElement = React.ReactElement

export function Toast({ className, children, ...props }: ToastProps) {
  return (
    <div
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed right-0 flex w-full max-w-md gap-4 rounded-md border bg-card p-4 shadow-lg',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function ToastTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('font-semibold', className)} {...props} />
}

export function ToastDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-sm text-muted-foreground', className)} {...props} />
}

export function ToastClose(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="ml-auto" aria-label="Close" {...props}>
      <X className="w-4 h-4" />
    </button>
  )
}

export function ToastViewport() {
  return <div className="fixed bottom-6 right-6 z-[9999] flex max-w-[var(--viewport-width)] flex-col gap-3" />
}
