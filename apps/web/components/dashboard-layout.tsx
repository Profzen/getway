"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, LogOut, Settings, User as UserIcon, BarChart3, Briefcase, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DashboardLayoutProps {
	children: React.ReactNode
	userRole?: 'learner' | 'provider' | 'trainer'
}

export function DashboardLayout({ children, userRole = 'learner' }: DashboardLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const navItems = [
		{ label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
		{ label: 'My Opportunities', href: '/dashboard/opportunities', icon: Briefcase },
		{ label: 'Saved Items', href: '/dashboard/saved', icon: Heart },
		{ label: 'Profile', href: '/dashboard/profile', icon: UserIcon },
		{ label: 'Settings', href: '/dashboard/settings', icon: Settings },
	]

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="sticky top-0 z-40 bg-card border-b border-border/40 backdrop-blur-sm">
				<div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
					{/* Logo */}
					<Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
							<span className="text-primary-foreground font-bold">G</span>
						</div>
						<span className="font-bold text-lg text-foreground hidden sm:inline">GETWAY</span>
					</Link>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setSidebarOpen(!sidebarOpen)}
						className="lg:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
					>
						{sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>

					{/* User Menu - Desktop */}
					<div className="hidden lg:flex items-center gap-4">
						<span className="text-sm text-foreground/60">Welcome, User</span>
						<Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
							<LogOut className="w-4 h-4 mr-2" />
							Logout
						</Button>
					</div>
				</div>
			</header>

			<div className="flex">
				{/* Sidebar - Desktop */}
				<aside className="hidden lg:flex w-64 border-r border-border/40 bg-card flex-col">
					<nav className="flex-1 px-4 py-8 space-y-2">
						{navItems.map((item) => {
							const Icon = item.icon
							return (
								<Link
									key={item.href}
									href={item.href}
									className="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 rounded-lg transition-all"
								>
									<Icon className="w-5 h-5" />
									<span className="text-sm font-medium">{item.label}</span>
								</Link>
							)
						})}
					</nav>
					<div className="px-4 py-4 border-t border-border/40">
						<p className="text-xs text-foreground/40 mb-2">Role</p>
						<p className="text-sm font-semibold text-foreground capitalize">{userRole}</p>
					</div>
				</aside>

				{/* Mobile Sidebar */}
				{sidebarOpen && (
					<div className="fixed inset-0 z-30 lg:hidden">
						{/* Overlay */}
						<div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
						{/* Sidebar */}
						<aside className="absolute left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-card border-r border-border/40 overflow-y-auto">
							<nav className="px-4 py-8 space-y-2">
								{navItems.map((item) => {
									const Icon = item.icon
									return (
										<Link
											key={item.href}
											href={item.href}
											onClick={() => setSidebarOpen(false)}
											className="flex items-center gap-3 px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-secondary/10 rounded-lg transition-all"
										>
											<Icon className="w-5 h-5" />
											<span className="text-sm font-medium">{item.label}</span>
										</Link>
									)
								})}
							</nav>
							<div className="px-4 py-4 border-t border-border/40">
								<Button variant="ghost" size="sm" className="w-full text-foreground/70 hover:text-foreground justify-start">
									<LogOut className="w-4 h-4 mr-2" />
									Logout
								</Button>
							</div>
						</aside>
					</div>
				)}

				{/* Main Content */}
				<main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">{children}</main>
			</div>
		</div>
	)
}

export default DashboardLayout
