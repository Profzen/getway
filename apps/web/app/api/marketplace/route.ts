import { NextResponse } from 'next/server'

const items = [
  {
    id: 'm1',
    title: 'Senior Product Designer',
    company: 'TechCorp',
    category: 'design',
    salary: '$120k - $150k',
    location: 'Remote',
    type: 'Full-time',
    rating: 4.8,
    reviews: 24,
    tags: ['Design', 'UI/UX', 'Remote'],
  },
  {
    id: 'm2',
    title: 'Full Stack Developer',
    company: 'StartupHub',
    category: 'development',
    salary: '$100k - $130k',
    location: 'Hybrid',
    type: 'Full-time',
    rating: 4.6,
    reviews: 18,
    tags: ['React', 'Node.js', 'TypeScript'],
  },
]

export async function GET() {
  return NextResponse.json({ items })
}
