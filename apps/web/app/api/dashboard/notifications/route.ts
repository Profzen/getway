import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ items: [{ id: 'n1', text: 'Welcome to GetWay' }] })
}
