import { API_BASE } from '../config'

export async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const normalizedBase = API_BASE.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const response = await fetch(`${normalizedBase}${normalizedPath}`, init)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}