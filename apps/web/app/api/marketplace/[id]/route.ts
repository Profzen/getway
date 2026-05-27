import { NextResponse } from 'next/server'

const items = {
  m1: {
    id: 'm1',
    title: 'Senior Product Designer',
    company: 'TechCorp',
    category: 'design',
    salary: '$120k - $150k',
    location: 'Remote',
    type: 'Full-time',
    rating: 4.8,
    reviews: 24,
    details: 'Lead product direction, build design systems, and partner with engineering.',
    tags: ['Design', 'UI/UX', 'Remote'],
  },
  m2: {
    id: 'm2',
    title: 'Full Stack Developer',
    company: 'StartupHub',
    category: 'development',
    salary: '$100k - $130k',
    location: 'Hybrid',
    type: 'Full-time',
    rating: 4.6,
    reviews: 18,
    details: 'Build product features across the stack with a modern React and Node.js stack.',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
}

export async function GET({ params }: { params: { id: string } }) {
  const item = items[params.id]
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json(item)
}
