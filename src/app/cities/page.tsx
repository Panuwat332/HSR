'use client'

import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { fetchCities } from '@/lib/api'
import { City } from '@/features/cities/api'


export default function CitiesPage() {
  const { data, isLoading, error } = useQuery<City[]>({
    queryKey: ['cities'],
    queryFn: fetchCities,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cities</h1>
      <ul className="space-y-2">
        {data?.map((city) => (
          <li key={city.id}>
            <Link
              href={`/cities/${city.id}`}
              className="text-blue-600 hover:underline"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
