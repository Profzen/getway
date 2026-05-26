import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Users, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      provider: 'TechCraft Studio',
      rating: 4.9,
      reviews: 156,
      price: '$50/hr',
      image: 'Globe',
      description: 'Full-stack web development with React, Node.js, and modern technologies',
      tags: ['React', 'Node.js', 'TypeScript', 'Tailwind'],
      clients: 234,
      level: 'Professional'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      provider: 'AppMasters',
      rating: 4.8,
      reviews: 128,
      price: '$60/hr',
      image: '',
      description: 'iOS and Android development using React Native and Flutter',
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      clients: 189,
      level: 'Professional'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      provider: 'Design Collective',
      rating: 4.9,
      reviews: 202,
      price: '$55/hr',
      image: '',
      description: 'Modern interface design, prototyping, and user experience optimization',
      tags: ['Figma', 'Prototyping', 'UX Research', 'Design Systems'],
      clients: 312,
      level: 'Professional'
    },
    {
      id: 4,
      title: 'Cloud Architecture',
      provider: 'CloudExperts',
      rating: 4.7,
      reviews: 94,
      price: '$80/hr',
      image: 'Cloud',
      description: 'AWS, GCP, and Azure cloud solutions for scalable applications',
      tags: ['AWS', 'GCP', 'Kubernetes', 'DevOps'],
      clients: 145,
      level: 'Advanced'
    },
    {
      id: 5,
      title: 'Data Science & ML',
      provider: 'AI Innovators',
      rating: 4.8,
      reviews: 117,
      price: '$75/hr',
      image: 'AI',
      description: 'Machine learning models, data analysis, and AI implementation',
      tags: ['Python', 'TensorFlow', 'Data Analysis', 'ML Ops'],
      clients: 156,
      level: 'Advanced'
    },
    {
      id: 6,
      title: 'Digital Marketing',
      provider: 'Marketing Plus',
      rating: 4.6,
      reviews: 143,
      price: '$45/hr',
      image: '',
      description: 'SEO, social media strategy, and digital marketing campaigns',
      tags: ['SEO', 'SEM', 'Social Media', 'Analytics'],
      clients: 267,
      level: 'Professional'
    },
    {
      id: 7,
      title: 'Business Consulting',
      provider: 'Strategy Partners',
      rating: 4.9,
      reviews: 89,
      price: '$100/hr',
      image: '',
      description: 'Strategic planning, business development, and growth consulting',
      tags: ['Strategy', 'Growth', 'Operations', 'Fundraising'],
      clients: 98,
      level: 'Professional'
    },
    {
      id: 8,
      title: 'Content Writing',
      provider: 'WriteWell Studio',
      rating: 4.7,
      reviews: 176,
      price: '$40/hr',
      image: 'Write',
      description: 'Blog posts, technical writing, and content strategy',
      tags: ['Copywriting', 'Blog', 'Technical Writing', 'SEO Writing'],
      clients: 421,
      level: 'Intermediate'
    }
  ]

  const categories = [
    { name: 'Development', count: 245, icon: '' },
    { name: 'Design', count: 189, icon: '' },
    { name: 'Marketing', count: 167, icon: '' },
    { name: 'Business', count: 134, icon: '' },
    { name: 'Data & AI', count: 89, icon: 'AI' },
    { name: 'Writing', count: 112, icon: 'Write' }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Professional Services & <span className="text-primary">Expertise</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover thousands of vetted professionals ready to help with your projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <input
              type="text"
              placeholder="Search services..."
              className="px-4 py-3 bg-card border border-border/40 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Search
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="p-4 bg-card border border-border/40 rounded-lg hover:border-secondary/40 transition-all text-center group"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary">
                {category.name}
              </h3>
              <p className="text-xs text-foreground/60">({category.count})</p>
            </button>
          ))}
        </div>
      </section>

      {/* Filter & Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="font-bold text-foreground mb-4">Level</h3>
                <div className="space-y-2">
                  {['Beginner', 'Intermediate', 'Professional', 'Advanced'].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border/40"
                      />
                      <span className="text-sm text-foreground/80">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Price Range</h3>
                <div className="space-y-2">
                  {['Under $50', '$50 - $100', '$100 - $200', 'Over $200'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border/40"
                      />
                      <span className="text-sm text-foreground/80">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3].map((stars) => (
                    <label key={stars} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border/40"
                      />
                      <span className="text-sm text-foreground/80">
                        {stars}+ Stars
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/marketplace/${service.id}`}
                  className="bg-card border border-border/40 rounded-xl overflow-hidden hover:border-secondary/40 transition-all group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.image}</div>
                      <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded text-sm">
                        <Star className="w-4 h-4 text-secondary fill-secondary" />
                        <span className="text-secondary font-semibold">{service.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      {service.provider}
                    </p>
                    <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div>
                        <div className="text-lg font-bold text-primary">
                          {service.price}
                        </div>
                        <p className="text-xs text-foreground/60">
                          {service.clients} clients
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
