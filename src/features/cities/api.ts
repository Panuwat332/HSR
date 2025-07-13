export interface City {
  id: number
  name: string
  country: string
}

// เพิ่ม parameter (เช่น search/filter) ให้ getCities
export async function getCities(params?: { search?: string }): Promise<City[]> {
  let url = 'http://localhost:3000/cities';
  if (params?.search) {
    url += `?search=${encodeURIComponent(params.search)}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch cities');
  return res.json();
}
