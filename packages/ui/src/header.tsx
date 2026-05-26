'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button } from './button'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border/40 backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">G</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">GETWAY</span>
        </Link>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm text-foreground/60">Welcome, User</span>
          <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
            Logout
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
