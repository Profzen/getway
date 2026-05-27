import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    steps: [
      'Create your account',
      'Complete your profile',
      'Explore opportunities and services',
    ],
    callToAction: 'Start now and unlock the native mobile experience.',
  })
}