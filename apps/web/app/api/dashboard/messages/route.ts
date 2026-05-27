import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ items: [{ id: 'm1', from: 'system', body: 'Welcome message' }] })
}
