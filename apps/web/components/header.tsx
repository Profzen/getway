"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/marketplace', label: 'Marketplace' },
		{ href: '/about', label: 'About' },
	]

	return (
		<header className="sticky top-0 z-50 bg-background border-b border-border/40 backdrop-blur-sm">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
					<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
						<span className="text-primary-foreground font-bold text-lg">G</span>
					</div>
					<span className="font-bold text-lg text-foreground hidden sm:inline">GETWAY</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-1">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/10 rounded-lg transition-colors"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* CTA Buttons */}
				<div className="hidden md:flex items-center gap-3">
					<ThemeToggle />
					<Button variant="ghost" size="sm" asChild>
						<Link href="/login">Login</Link>
					</Button>
					<Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
						<Link href="/signup">Sign Up</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</nav>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden border-t border-border/40 bg-card/50 backdrop-blur-sm">
					<div className="px-4 py-4 space-y-2">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/10 rounded-lg transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<div className="pt-4 border-t border-border/40 space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium">Theme</span>
								<ThemeToggle />
							</div>
							<Button variant="ghost" size="sm" className="w-full" asChild>
								<Link href="/login">Login</Link>
							</Button>
							<Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
								<Link href="/signup">Sign Up</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
