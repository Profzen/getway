import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Star, Clock, Users, Award, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = {
    id: params.id,
    title: 'Web Development',
    provider: 'TechCraft Studio',
    providerImage: 'Building',
    rating: 4.9,
    reviews: 156,
    price: '$50/hr',
    image: 'Globe',
    description: 'Full-stack web development with React, Node.js, and modern technologies. I specialize in building scalable, high-performance applications that solve real business problems.',
    longDescription: `With over 10 years of experience in web development, I have successfully delivered 200+ projects for startups and enterprises. My expertise spans across the entire web development lifecycle, from architecture and development to deployment and maintenance.

I am proficient in modern technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and GCP. I follow best practices in code quality, performance optimization, and security.

Whether you need a custom web application, API development, or technical consultation, I am here to help you achieve your business goals.`,
    tags: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'Next.js', 'AWS', 'PostgreSQL'],
    clients: 234,
    level: 'Professional',
    responseTime: '< 1 hour',
    completionRate: 99,
    memberSince: '2020',
    location: 'San Francisco, USA',
    
    highlights: [
      'Full-stack web application development',
      'REST API and GraphQL development',
      'Database design and optimization',
      'Cloud deployment (AWS, GCP, Heroku)',
      'Performance optimization and monitoring',
      'Code review and technical consultation'
    ],

    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Built a scalable e-commerce platform with React, Node.js, and PostgreSQL',
        client: 'TechRetail Inc',
        value: '$45K'
      },
      {
        title: 'SaaS Dashboard',
        description: 'Developed an analytics dashboard handling 10M+ events/day',
        client: 'DataFlow Solutions',
        value: '$60K'
      },
      {
        title: 'Mobile API',
        description: 'Created REST API for mobile app with 500K+ daily active users',
        client: 'App Startup',
        value: '$35K'
      }
    ],

    testimonials: [
      {
        author: 'John Smith',
        company: 'TechRetail Inc',
        avatar: 'User',
        quote: 'Exceptional work! The developer delivered exactly what we needed on time and within budget. Highly professional and responsive.',
        rating: 5
      },
      {
        author: 'Emily Chen',
        company: 'DataFlow Solutions',
        avatar: 'User',
        quote: 'Brilliant technical solutions and excellent communication. Would definitely work together again.',
        rating: 5
      },
      {
        author: 'Michael Rodriguez',
        company: 'App Startup',
        avatar: 'User',
        quote: 'Great attention to detail and problem-solving skills. A true professional.',
        rating: 5
      }
    ]
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">{service.image}</div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {service.title}
                </h1>
                <p className="text-xl text-foreground/70 mb-4">
                  by {service.provider}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-secondary fill-secondary" />
                    <span className="font-bold text-foreground">{service.rating}</span>
                    <span className="text-foreground/60">({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Users className="w-5 h-5" />
                    <span>{service.clients} clients</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card border border-border/40 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Service</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {service.longDescription}
              </p>

              <h3 className="text-lg font-bold text-foreground mb-4">What I Offer:</h3>
              <ul className="space-y-3">
                {service.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.portfolio.map((project, index) => (
                  <div key={index} className="bg-card border border-border/40 rounded-xl p-6">
                    <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <span className="text-sm text-foreground/60">{project.client}</span>
                      <span className="font-bold text-primary">{project.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Client Testimonials</h2>
              <div className="space-y-6">
                {service.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-card border border-border/40 rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                        <p className="text-sm text-foreground/60">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-foreground/70 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-card border border-border/40 rounded-xl p-8 space-y-6">
              {/* Price */}
              <div className="text-center pb-6 border-b border-border/40">
                <div className="text-4xl font-bold text-primary mb-2">
                  {service.price}
                </div>
                <p className="text-foreground/70">hourly rate</p>
              </div>

              {/* Provider Info */}
              <div className="text-center">
                <div className="text-5xl mb-3">{service.providerImage}</div>
                <h3 className="font-bold text-foreground mb-1">
                  {service.provider}
                </h3>
                <div className="flex items-center justify-center gap-1 mb-4 text-sm text-foreground/70">
                  <MapPin className="w-4 h-4" />
                  {service.location}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm">
                  <span className="text-primary font-semibold">{service.level}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3 py-6 border-t border-b border-border/40">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Response time</span>
                  <span className="font-semibold text-foreground">{service.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Completion rate</span>
                  <span className="font-semibold text-foreground">{service.completionRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Member since</span>
                  <span className="font-semibold text-foreground">{service.memberSince}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div>
                <h4 className="font-bold text-foreground mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Contact Provider
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-border text-foreground hover:bg-secondary/10"
              >
                Save Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-card border-y border-border/40 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Similar Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background border border-border/40 rounded-xl p-6">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-bold text-foreground mb-2">Web Development Service {i}</h3>
                <p className="text-sm text-foreground/70 mb-4">Professional web development services</p>
                <div className="flex items-center justify-between">
                  <div>
                    <Star className="w-4 h-4 text-secondary fill-secondary inline-block" />
                    <span className="text-sm font-semibold text-foreground ml-1">4.8</span>
                  </div>
                  <span className="text-primary font-bold">$50/hr</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
