export async function fetchCities() {
  const res = await fetch('http://localhost:3000/cities');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
