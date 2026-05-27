import { NextResponse } from 'next/server'

const services = [
  {
    id: 's1',
    title: 'Web Development',
    provider: 'TechCraft Studio',
    price: '$50/hr',
    rating: 4.9,
    level: 'Professional',
    description: 'Full-stack web development with React, Node.js, and modern technologies',
    tags: ['React', 'Node.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 's2',
    title: 'UI/UX Design',
    provider: 'Design Collective',
    price: '$55/hr',
    rating: 4.9,
    level: 'Professional',
    description: 'Modern interface design, prototyping, and user experience optimization',
    tags: ['Figma', 'Prototyping', 'UX Research', 'Design Systems'],
  },
]

export async function GET() {
  return NextResponse.json({ items: services })
}
