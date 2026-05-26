import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            404
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
            Page Not Found
          </h2>
        </div>

        <p className="text-lg text-foreground/70 max-w-md mx-auto">
          Oops! It seems like the page you&apos;re looking for has disappeared into the digital void.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            asChild
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border text-foreground hover:bg-secondary/10"
            asChild
          >
            <Link href="/marketplace">Browse Opportunities</Link>
          </Button>
        </div>

        <div className="pt-12 text-7xl">
          🚀
        </div>
      </div>
    </main>
  )
}
