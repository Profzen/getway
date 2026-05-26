'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, DollarSign, Clock, Heart, Share2, CheckCircle, Users } from 'lucide-react'
import Link from 'next/link'

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const opportunity = {
    id: params.id,
    title: 'Senior Product Designer',
    company: 'TechCorp',
    salary: '$120k - $150k',
    location: 'Remote',
    type: 'Full-time',
    image: '',
    rating: 4.8,
    reviews: 24,
    applicants: 342,
    description: `We&apos;re looking for an experienced Senior Product Designer to lead the design of our next-generation products. You&apos;ll work closely with product managers, engineers, and stakeholders to create intuitive and beautiful user experiences.

This is a unique opportunity to shape the future of our platform and have a significant impact on millions of users worldwide. We&apos;re looking for someone who is passionate about design excellence, user-centered thinking, and collaborative problem-solving.`,
    responsibilities: [
      'Lead the design of new product features and improvements',
      'Conduct user research and usability testing',
      'Create wireframes, mockups, and prototypes',
      'Collaborate with cross-functional teams',
      'Establish and maintain design systems',
      'Mentor junior designers and provide design feedback',
    ],
    requirements: [
      '5+ years of experience in product design',
      'Strong portfolio demonstrating design excellence',
      'Proficiency in design tools (Figma, Adobe XD, etc.)',
      'Experience with user research and testing',
      'Understanding of web and mobile design principles',
      'Excellent communication and collaboration skills',
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health insurance',
      '4 weeks paid vacation',
      'Remote work flexibility',
      'Professional development budget',
      'Collaborative and inclusive culture',
    ],
    tags: ['Design', 'UI/UX', 'Remote', 'Full-time'],
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Marketplace
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="p-8 bg-card rounded-xl border border-border/40">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-6">
                <div className="text-5xl">{opportunity.image}</div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {opportunity.title}
                  </h1>
                  <p className="text-lg text-foreground/60 mb-4">{opportunity.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {opportunity.salary}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {opportunity.type}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6 border-y border-border/40">
                <div>
                  <p className="text-2xl font-bold text-foreground">{opportunity.rating}</p>
                  <p className="text-xs text-foreground/60">Rating ({opportunity.reviews} reviews)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{opportunity.applicants}</p>
                  <p className="text-xs text-foreground/60">Applicants</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">95%</p>
                  <p className="text-xs text-foreground/60">Match Score</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-8 bg-card rounded-xl border border-border/40">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Role</h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed whitespace-pre-wrap">
                {opportunity.description}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="p-8 bg-card rounded-xl border border-border/40">
              <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {opportunity.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="p-8 bg-card rounded-xl border border-border/40">
              <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <ul className="space-y-3">
                {opportunity.requirements.map((requirement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-8 bg-card rounded-xl border border-border/40">
              <h2 className="text-2xl font-bold text-foreground mb-4">Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {opportunity.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 flex-shrink-0" />
                    <span className="text-foreground/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* CTA Card */}
              <div className="p-6 bg-card rounded-xl border border-border/40">
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold mb-1">
                      Salary Range
                    </p>
                    <p className="text-2xl font-bold text-primary">{opportunity.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold mb-1">
                      Job Type
                    </p>
                    <p className="text-lg font-semibold text-foreground">{opportunity.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wide font-semibold mb-1">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-foreground">{opportunity.location}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Apply Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-secondary/10 flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Save Job
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-secondary/10 flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Company Card */}
              <div className="p-6 bg-card rounded-xl border border-border/40">
                <h3 className="text-lg font-bold text-foreground mb-4">About {opportunity.company}</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {opportunity.company} is a leading technology company focused on creating innovative solutions for modern businesses.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-secondary/10"
                  size="sm"
                >
                  View Company Profile
                </Button>
              </div>

              {/* Tags */}
              <div className="p-6 bg-card rounded-xl border border-border/40">
                <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-4">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  )
}
