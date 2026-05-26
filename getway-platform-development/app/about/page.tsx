import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const team = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Founder',
      bio: 'Visionary entrepreneur with 10+ years in tech startup ecosystem',
      avatar: 'User'
    },
    {
      name: 'Marcus Thompson',
      role: 'CTO',
      bio: 'Full-stack engineer passionate about building scalable platforms',
      avatar: 'User'
    },
    {
      name: 'Sarah Patel',
      role: 'Head of Community',
      bio: 'Community builder focused on creating meaningful connections',
      avatar: 'Users'
    },
    {
      name: 'David Kim',
      role: 'Product Manager',
      bio: 'Product strategist dedicated to user success',
      avatar: 'User'
    }
  ]

  const timeline = [
    {
      year: '2022',
      title: 'Founded GETWAY',
      description: 'Started with a vision to connect talents globally'
    },
    {
      year: '2023',
      title: 'Reached 10K Members',
      description: 'Rapid growth across North America and Europe'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: '$5M funding round to expand globally'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Launched in 15 countries with 50K+ active members'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Our Mission: Transform How <span className="text-primary">Opportunities</span> Happen
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            GETWAY is building the world's most inclusive platform where talents, learners, and service providers converge to create extraordinary opportunities for growth and collaboration.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-card border-y border-border/40 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-background rounded-xl border border-border/40">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Community First</h3>
              <p className="text-foreground/70">
                We believe in the power of human connection. Our platform thrives when our community members support and lift each other.
              </p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border/40">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
              <p className="text-foreground/70">
                We continuously evolve with cutting-edge technology to provide the best matching and collaboration experience possible.
              </p>
            </div>

            <div className="p-8 bg-background rounded-xl border border-border/40">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Global Impact</h3>
              <p className="text-foreground/70">
                Breaking barriers, we enable talent from anywhere to access opportunities everywhere. True global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-foreground/70">
            From idea to global platform in just a few years
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-1 h-16 bg-primary/30 mt-4" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  {item.year}: {item.title}
                </h3>
                <p className="text-foreground/70 text-lg mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-card border-y border-border/40 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-foreground/70">
              Passionate people building the future of work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border/40 text-center hover:border-secondary/40 transition-all"
              >
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-foreground/70">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              50K+
            </div>
            <p className="text-foreground/70">Active Members</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              15
            </div>
            <p className="text-foreground/70">Countries</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              $250M+
            </div>
            <p className="text-foreground/70">Value Created</p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              95%
            </div>
            <p className="text-foreground/70">Success Rate</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border-y border-border/40 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Be part of a movement that's transforming how opportunities happen around the world.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            asChild
          >
            <Link href="/signup" className="inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
