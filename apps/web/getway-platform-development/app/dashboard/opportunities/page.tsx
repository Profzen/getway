'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Filter, Star, MapPin, DollarSign, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const opportunities = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'Tech Startup',
      salary: '$120k - $150k',
      location: 'Remote',
      type: 'Full-time',
      tags: ['Design', 'UI/UX', 'Remote'],
      description: 'Lead design for our web and mobile products.',
      posted: '2 days ago',
      saved: false,
      match: 95
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'E-commerce Platform',
      salary: '$100k - $130k',
      location: 'Hybrid',
      type: 'Full-time',
      tags: ['React', 'Node.js', 'TypeScript'],
      description: 'Build scalable web applications.',
      posted: '1 week ago',
      saved: true,
      match: 88
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Analytics Firm',
      salary: '$110k - $140k',
      location: 'On-site',
      type: 'Full-time',
      tags: ['Python', 'ML', 'Analytics'],
      description: 'Work on ML models and data analysis.',
      posted: '3 days ago',
      saved: false,
      match: 82
    },
    {
      id: 4,
      title: 'UX Researcher',
      company: 'Design Agency',
      salary: '$90k - $120k',
      location: 'Remote',
      type: 'Contract',
      tags: ['Research', 'UX', 'User Testing'],
      description: 'Conduct user research and testing.',
      posted: '5 days ago',
      saved: false,
      match: 78
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Cloud Infrastructure',
      salary: '$130k - $160k',
      location: 'Hybrid',
      type: 'Full-time',
      tags: ['Kubernetes', 'Docker', 'AWS'],
      description: 'Manage cloud infrastructure and deployment.',
      posted: '1 day ago',
      saved: false,
      match: 85
    },
  ]

  const filteredOpportunities = opportunities.filter(opp =>
    opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <DashboardLayout userRole="learner">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Opportunities
        </h1>
        <p className="text-foreground/60">
          Browse and apply to opportunities that match your skills.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
            <Input
              type="text"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border text-foreground placeholder:text-foreground/40 focus:border-primary"
            />
          </div>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-secondary/10 flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="p-4 bg-card rounded-xl border border-border/40 space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Job Type
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-primary" />
                  <span className="text-sm text-foreground/70">Full-time</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-primary" />
                  <span className="text-sm text-foreground/70">Contract</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-primary" />
                  <span className="text-sm text-foreground/70">Freelance</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Location
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-primary" />
                  <span className="text-sm text-foreground/70">Remote</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-primary" />
                  <span className="text-sm text-foreground/70">Hybrid</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded accent-primary" />
                  <span className="text-sm text-foreground/70">On-site</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <p className="text-sm text-foreground/60 mb-4">
        Showing {filteredOpportunities.length} opportunity{filteredOpportunities.length !== 1 ? 's' : ''}
      </p>

      {/* Opportunities List */}
      <div className="space-y-4">
        {filteredOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="p-6 bg-card rounded-xl border border-border/40 hover:border-secondary/40 transition-all group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {opportunity.title}
                  </h3>
                  {opportunity.saved && (
                    <Star className="w-5 h-5 text-primary fill-primary flex-shrink-0 mt-0.5" />
                  )}
                </div>

                <p className="text-sm text-foreground/60 mb-2">
                  {opportunity.company}
                </p>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {opportunity.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {opportunity.type}
                  </div>
                </div>

                <p className="text-sm text-foreground/70 mb-3">
                  {opportunity.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-foreground/40">
                  Posted {opportunity.posted}
                </p>
              </div>

              {/* Match and Actions */}
              <div className="flex flex-col items-start lg:items-end gap-3">
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {opportunity.match}% match
                </div>
                <div className="flex gap-2 w-full lg:w-auto">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 lg:flex-none"
                    asChild
                  >
                    <Link href={`/dashboard/opportunities/${opportunity.id}`}>
                      View
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary/10"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
