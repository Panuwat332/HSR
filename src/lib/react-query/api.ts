const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchCities() {
  const res = await fetch(`${BASE_URL}/cities`)
  if (!res.ok) throw new Error('Failed to fetch cities')
  return res.json()
}

// ปรับ fetchCity ให้รับ parameter object
export async function fetchCity(params: { id: string | number }) {
  const { id } = params;
  const res = await fetch(`${BASE_URL}/cities/${id}`);
  if (!res.ok) throw new Error('Failed to fetch city');
  return res.json();
}
