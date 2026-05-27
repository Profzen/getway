import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { name, email, message } = body as { name?: string; email?: string; message?: string }
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 })
  }
  // TODO: wire to email/service
  return NextResponse.json({ ok: true })
}
