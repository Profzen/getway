import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { username } = body as { username?: string }

  if (!username) {
    return new NextResponse(JSON.stringify({ error: 'username required' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const token = `mock-token-${Math.random().toString(36).slice(2)}`
  return NextResponse.json({ token, user: { username } })
}
