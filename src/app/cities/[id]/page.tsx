import { notFound } from 'next/navigation'

async function fetchCity(id: string) {
  const res = await fetch(`http://localhost:3000/cities/${id}`)

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function CityDetailPage({ params }: { params: { id: string } }) {
  const city = await fetchCity(params.id)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{city.name}</h1>
      <p className="text-gray-600">Country: {city.country}</p>
    </div>
  )
}
