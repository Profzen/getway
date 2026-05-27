'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AtypicalHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/8 via-background to-secondary/8">
      {/* Animated gradient shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-b from-primary/28 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-t from-secondary/22 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-t from-primary/12 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">The Future of Professional Connections</span>
          </div>

          {/* Main heading with gradient text */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Elevate Your</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Professional Journey</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Connect with top talents, discover opportunities, and grow your professional network on the world&apos;s most innovative platform.
            </p>
          </div>

          {/* CTA Buttons with gradient borders */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/signup" className="inline-flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/35 hover:border-primary hover:bg-primary/5 text-foreground font-semibold"
              asChild
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>

          {/* Stats with modern design */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto">
            {[
              { number: '50K+', label: 'Users' },
              { number: '10K+', label: 'Opportunities' },
              { number: '95%', label: 'Success' }
            ].map((stat, index) => (
              <div key={index} className="group">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all">
                  {stat.number}
                </div>
                <p className="text-sm text-foreground/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary/60">
          <span className="text-xs font-semibold uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
