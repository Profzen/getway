'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, MapPin, DollarSign, Clock, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Opportunities', count: 1240 },
    { id: 'design', label: 'Design', count: 180 },
    { id: 'development', label: 'Development', count: 420 },
    { id: 'data', label: 'Data & Analytics', count: 150 },
    { id: 'marketing', label: 'Marketing', count: 220 },
    { id: 'business', label: 'Business', count: 270 },
  ]

  const opportunities = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'TechCorp',
      category: 'design',
      salary: '$120k - $150k',
      location: 'Remote',
      type: 'Full-time',
      rating: 4.8,
      reviews: 24,
      image: '',
      tags: ['Design', 'UI/UX', 'Remote']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupHub',
      category: 'development',
      salary: '$100k - $130k',
      location: 'Hybrid',
      type: 'Full-time',
      rating: 4.6,
      reviews: 18,
      image: '',
      tags: ['React', 'Node.js', 'TypeScript']
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Analytics Inc',
      category: 'data',
      salary: '$110k - $140k',
      location: 'On-site',
      type: 'Full-time',
      rating: 4.9,
      reviews: 31,
      image: '',
      tags: ['Python', 'ML', 'Analytics']
    },
    {
      id: 4,
      title: 'Marketing Manager',
      company: 'GrowthCo',
      category: 'marketing',
      salary: '$80k - $110k',
      location: 'Remote',
      type: 'Full-time',
      rating: 4.5,
      reviews: 15,
      image: '',
      tags: ['Marketing', 'Strategy', 'Analytics']
    },
    {
      id: 5,
      title: 'Business Analyst',
      company: 'ConsultPro',
      category: 'business',
      salary: '$90k - $120k',
      location: 'Hybrid',
      type: 'Full-time',
      rating: 4.7,
      reviews: 22,
      image: '',
      tags: ['Analysis', 'Excel', 'SQL']
    },
    {
      id: 6,
      title: 'UI/UX Researcher',
      company: 'DesignStudio',
      category: 'design',
      salary: '$95k - $125k',
      location: 'Remote',
      type: 'Contract',
      rating: 4.8,
      reviews: 19,
      image: 'Search',
      tags: ['Research', 'UX', 'Testing']
    },
  ]

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          opp.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === 'all' || opp.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-card border-b border-border/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Discover Opportunities
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Browse thousands of opportunities from top companies hiring now.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-background border-border text-foreground placeholder:text-foreground/40 focus:border-primary text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 p-6 bg-card rounded-xl border border-border/40">
              <h2 className="text-lg font-bold text-foreground mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center justify-between ${
                      activeCategory === cat.id
                        ? 'bg-primary/20 text-primary font-semibold'
                        : 'text-foreground/70 hover:text-foreground hover:bg-secondary/10'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs bg-border/40 px-2 py-1 rounded">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content - Opportunities */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-foreground/60">
                Showing {filteredOpportunities.length} of {opportunities.length} opportunities
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-border text-foreground hover:bg-secondary/10"
              >
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOpportunities.map((opp) => (
                <Link
                  key={opp.id}
                  href={`/marketplace/${opp.id}`}
                  className="group p-6 bg-card rounded-xl border border-border/40 hover:border-secondary/40 transition-all hover:shadow-lg hover:shadow-secondary/10"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{opp.image}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-foreground/60">{opp.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold text-foreground">{opp.rating}</span>
                    </div>
                    <span className="text-foreground/40">({opp.reviews} reviews)</span>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4 py-4 border-y border-border/40">
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <DollarSign className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">{opp.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{opp.type}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {opp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredOpportunities.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-foreground/60 mb-4">
                  No opportunities found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary/10"
                  onClick={() => {
                    setSearchTerm('')
                    setActiveCategory('all')
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
