import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    items: [
      { id: 'theme', label: 'Dark mode', value: true },
      { id: 'notifications', label: 'Push notifications', value: true },
      { id: 'privacy', label: 'Private profile', value: false },
    ],
  })
}