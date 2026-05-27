import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello from GetWay', items: [{ id: 1, name: 'Demo Item' }] })
}
