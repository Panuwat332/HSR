'use client'

import { useCitiesQuery } from './hooks'
import { Card, CardContent } from '@/components/ui/card'

export default function CityList() {
  const { data: cities, isLoading, error } = useCitiesQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading cities</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cities?.map(city => (
        <Card key={city.id}>
          <CardContent className="p-4">
            <p className="font-bold">{city.name}</p>
            <p className="text-gray-500">{city.country}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
