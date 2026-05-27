import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { username, email } = body as { username?: string; email?: string }
  if (!username || !email) return NextResponse.json({ error: 'missing' }, { status: 400 })
  // TODO: create user in DB
  return NextResponse.json({ ok: true, user: { username, email } })
}
