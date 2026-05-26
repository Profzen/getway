'use client'

import { DashboardLayout } from '@/components/dashboard-layout'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Award, Zap, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    { label: 'Profile Views', value: '1,240', change: '+12%', icon: Users },
    { label: 'Active Opportunities', value: '8', change: '+2', icon: Zap },
    { label: 'Endorsements', value: '24', change: '+4', icon: Award },
    { label: 'Success Rate', value: '94%', change: '+2%', icon: TrendingUp },
  ]

  const recentOpportunities = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'Tech Startup',
      salary: '$120k - $150k',
      location: 'Remote',
      tags: ['Design', 'UI/UX', 'Remote'],
      saved: false
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'E-commerce Platform',
      salary: '$100k - $130k',
      location: 'Hybrid',
      tags: ['React', 'Node.js', 'TypeScript'],
      saved: true
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Analytics Firm',
      salary: '$110k - $140k',
      location: 'On-site',
      tags: ['Python', 'ML', 'Analytics'],
      saved: false
    },
  ]

  return (
    <DashboardLayout userRole="learner">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, Sarah!
        </h1>
        <p className="text-foreground/60">
          Here&apos;s what&apos;s happening with your GETWAY profile today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="p-6 bg-card rounded-xl border border-border/40 hover:border-secondary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-foreground/60 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-primary font-medium">
                {stat.change} from last month
              </p>
            </div>
          )
        })}
      </div>

      {/* Recent Opportunities */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">
            Recommended Opportunities
          </h2>
          <Link
            href="/dashboard/opportunities"
            className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {recentOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="p-6 bg-card rounded-xl border border-border/40 hover:border-secondary/40 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {opportunity.title}
                    </h3>
                    {opportunity.saved && (
                      <Star className="w-5 h-5 text-primary fill-primary flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-foreground/60 mb-3">
                    {opportunity.company} • {opportunity.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {opportunity.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {opportunity.salary}
                  </p>
                </div>
                <div className="flex gap-2 sm:flex-col">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 sm:w-auto"
                  >
                    Apply
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border text-foreground hover:bg-secondary/10 flex-1 sm:w-auto"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-xl border border-border/40">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Complete Your Profile
        </h3>
        <p className="text-foreground/70 mb-4">
          Profiles that are 100% complete are 5x more likely to get matched with opportunities.
        </p>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          asChild
        >
          <Link href="/dashboard/profile">Finish Profile</Link>
        </Button>
      </div>
    </DashboardLayout>
  )
}
