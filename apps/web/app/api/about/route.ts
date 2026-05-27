import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    mission: 'Build a collaborative digital platform for learning, work, and autonomy.',
    highlights: [
      'Shared design system across web and mobile',
      'Mobile-first native experience on iOS and Android',
      'Public HTTP APIs for all mobile-consumable capabilities',
    ],
  })
}