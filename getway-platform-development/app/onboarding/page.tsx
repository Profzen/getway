import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Onboarding() {
  const roles = [
    {
      id: 'learner',
      title: 'I\'m a Learner',
      description: 'I want to explore opportunities, learn new skills, and grow professionally',
      icon: 'Learn',
      benefits: [
        'Access to thousands of learning resources',
        'Connect with mentors and experts',
        'Track your progress and achievements',
        'Join a supportive community'
      ],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'provider',
      title: 'I\'m a Service Provider',
      description: 'I want to offer my services and build my freelance career',
      icon: '',
      benefits: [
        'Showcase your skills and portfolio',
        'Reach global clients and projects',
        'Manage projects efficiently',
        'Build your reputation and earn'
      ],
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 'trainer',
      title: 'I\'m a Trainer',
      description: 'I want to share knowledge and teach others',
      icon: 'Trainer',
      benefits: [
        'Create and manage courses',
        'Teach passionate students',
        'Generate income from your expertise',
        'Build your personal brand'
      ],
      color: 'from-orange-600 to-red-500'
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Create Your Profile',
      description: 'Set up your account and complete your profile with your skills and interests'
    },
    {
      number: 2,
      title: 'Explore Opportunities',
      description: 'Browse projects, services, and learning materials tailored to you'
    },
    {
      number: 3,
      title: 'Connect & Collaborate',
      description: 'Message with others, apply for projects, or offer your services'
    },
    {
      number: 4,
      title: 'Grow & Succeed',
      description: 'Build your reputation, earn money, or gain new skills'
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
            Welcome to GETWAY
          </h1>
          <p className="text-2xl text-foreground/70">
            Let's find your perfect match on the platform
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-card border border-border/40 rounded-xl p-8 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10 cursor-pointer group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {role.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {role.title}
              </h3>
              <p className="text-foreground/70 mb-6">
                {role.description}
              </p>

              <div className="space-y-3 mb-8">
                {role.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                asChild
              >
                <Link href={`/signup?role=${role.id}`} className="inline-flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-12 mb-16 border border-border/40">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Step Circle */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  {step.number}
                </div>

                {/* Arrow - Hidden on Mobile */}
                {step.number < steps.length && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-8 h-1 bg-primary/30"></div>
                )}

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Join GETWAY?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'World',
                title: 'Global Community',
                description: 'Connect with thousands of professionals worldwide'
              },
              {
                icon: '',
                title: 'Verified Members',
                description: 'All profiles are verified for safety and trust'
              },
              {
                icon: 'Money',
                title: 'Secure Payments',
                description: 'Transparent pricing and secure payment processing'
              },
              {
                icon: '',
                title: 'Growth Tools',
                description: 'Analytics and tools to track your progress'
              },
              {
                icon: 'Chat',
                title: 'Direct Messaging',
                description: 'Easy communication with collaborators'
              },
              {
                icon: '',
                title: 'Ratings & Reviews',
                description: 'Build your reputation through honest feedback'
              },
              {
                icon: 'Graduate',
                title: 'Learning Hub',
                description: 'Access to courses and educational resources'
              },
              {
                icon: 'Award',
                title: 'Achievements',
                description: 'Earn badges and recognition for your success'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card border border-border/40 rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-card border border-border/40 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Is GETWAY free to join?',
                answer: 'Yes, creating a profile on GETWAY is completely free. You can browse opportunities and connect with others at no cost.'
              },
              {
                question: 'How do payments work?',
                answer: 'Payments are handled securely through our platform. We support various payment methods and ensure both parties are protected.'
              },
              {
                question: 'Can I change my role later?',
                answer: 'Absolutely! You can switch between roles or have multiple profiles if you\'re both a learner and service provider.'
              },
              {
                question: 'How are disputes resolved?',
                answer: 'We have a dedicated support team to help resolve any disputes fairly and quickly.'
              }
            ].map((faq, index) => (
              <details key={index} className="group border-b border-border/40 pb-6 last:border-0">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-bold text-foreground text-lg group-hover:text-primary">
                    {faq.question}
                  </h3>
                  <span className="text-primary transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="text-foreground/70 mt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70">
            Choose your role above and create your profile today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <Link href="/signup">Sign Up Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary/10"
              asChild
            >
              <Link href="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
