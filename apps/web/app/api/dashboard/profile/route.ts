import { NextResponse } from 'next/server'

export async function GET() {
  // return mock profile
  return NextResponse.json({ user: { id: 'u1', username: 'demo', email: 'demo@getway.local' } })
}
