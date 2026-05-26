'use client'

import { Users, Zap, Award, Globe, TrendingUp, Sparkles, Code2, BarChart3, Briefcase } from 'lucide-react'

export function AtypicalFeatures() {
  const features = [
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with thousands of talented professionals worldwide',
      span: 'col-span-1 row-span-2',
      gradient: 'from-purple-500/20 to-blue-500/20'
    },
    {
      icon: Zap,
      title: 'AI Matching',
      description: 'Smart algorithm finds perfect opportunities',
      span: 'col-span-1',
      gradient: 'from-pink-500/20 to-red-500/20'
    },
    {
      icon: Award,
      title: 'Verified Skills',
      description: 'Showcase expertise with confidence',
      span: 'col-span-1',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      icon: Globe,
      title: 'Work Anywhere',
      description: 'Fully responsive on all devices',
      span: 'col-span-2',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Growth Tools',
      description: 'Accelerate your professional journey',
      span: 'col-span-1',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Sparkles,
      title: 'Premium Experience',
      description: 'Sleek, modern, and intuitive design',
      span: 'col-span-1',
      gradient: 'from-violet-500/20 to-purple-500/20'
    }
  ]

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Choose GETWAY?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Designed for modern professionals who want to maximize their potential
          </p>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`${feature.span} group relative rounded-2xl border border-primary/20 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer`}
              >
                {/* Animated background element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
