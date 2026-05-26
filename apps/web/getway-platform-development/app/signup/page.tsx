'use client'

import Link from 'next/link'
import { AuthForm } from '@/components/auth-form'
import { ArrowLeft } from 'lucide-react'

export default function SignupPage() {
  const handleSignup = (data: any) => {
    console.log('Signup attempt:', data)
    // TODO: Implement actual authentication
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card flex flex-col">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4 mx-auto">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Join GETWAY
            </h1>
            <p className="text-foreground/60">
              Create your account and start connecting with opportunities
            </p>
          </div>

          {/* Auth Form */}
          <AuthForm type="signup" onSubmit={handleSignup} />

          {/* Divider */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/40"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-foreground/50">Or sign up with</span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-card border border-border/40 rounded-lg hover:border-secondary/40 transition-all text-foreground/70 hover:text-foreground text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-card border border-border/40 rounded-lg hover:border-secondary/40 transition-all text-foreground/70 hover:text-foreground text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.016 12.016 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-foreground/60 text-sm mt-8">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 text-center text-foreground/40 text-xs border-t border-border/40">
        <p>Your data is protected by enterprise-grade encryption</p>
      </div>
    </div>
  )
}
