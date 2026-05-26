import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">G</span>
          </div>
          <div className="text-sm text-muted-foreground">© Getway</div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="#" className="text-foreground/70 hover:text-foreground">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-foreground/70 hover:text-foreground">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
