import { NextResponse } from 'next/server'

const services = {
  s1: {
    id: 's1',
    title: 'Web Development',
    provider: 'TechCraft Studio',
    price: '$50/hr',
    rating: 4.9,
    reviews: 156,
    clients: 234,
    level: 'Professional',
    description: 'Full-stack web development with React, Node.js, and modern technologies',
    tags: ['React', 'Node.js', 'TypeScript', 'Tailwind'],
  },
  s2: {
    id: 's2',
    title: 'UI/UX Design',
    provider: 'Design Collective',
    price: '$55/hr',
    rating: 4.9,
    reviews: 202,
    clients: 312,
    level: 'Professional',
    description: 'Modern interface design, prototyping, and user experience optimization',
    tags: ['Figma', 'Prototyping', 'UX Research', 'Design Systems'],
  },
}

export async function GET({ params }: { params: { id: string } }) {
  const item = services[params.id]
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 })
  return NextResponse.json(item)
}
