import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code2, BarChart3, Palette } from 'lucide-react'
import Link from 'next/link'
import { AtypicalHero } from '@/components/atypical-hero'
import { AtypicalFeatures } from '@/components/atypical-features'

export default function Home() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Designer',
      company: 'Tech Startup',
      quote: 'GETWAY helped me find the perfect project that matched my skills and career goals.',
      icon: Palette
    },
    {
      name: 'Marcus Johnson',
      role: 'Full Stack Developer',
      company: 'Freelancer',
      quote: 'The opportunity matching is incredible. I found 3 great clients in my first week.',
      icon: Code2
    },
    {
      name: 'Emma Rodriguez',
      role: 'Data Scientist',
      company: 'Analytics Firm',
      quote: 'Connecting with this community accelerated my professional growth exponentially.',
      icon: BarChart3
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <AtypicalHero />
      <AtypicalFeatures />

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Loved by Professionals
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their careers on GETWAY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card rounded-xl border border-border/40 hover:border-secondary/40 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><Icon className="w-6 h-6 text-primary" /></div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-foreground/60">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/70 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border-y border-border/40 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join GETWAY today and discover opportunities that align with your goals and aspirations.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            asChild
          >
            <Link href="/signup" className="inline-flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
