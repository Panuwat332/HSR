export interface City {
  id: number
  name: string
  country: string
}

export async function getCities(): Promise<City[]> {
  const res = await fetch('http://localhost:3000/cities')
  if (!res.ok) throw new Error('Failed to fetch cities')
  return res.json()
}
