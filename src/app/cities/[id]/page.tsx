
import { fetchCity } from '@/lib/react-query/api';

export default async function CityDetailPage({ params }: { params: { id: string } }) {
  const city = await fetchCity({ id: params.id });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{city.name}</h1>
      <p className="text-gray-600">Country: {city.country}</p>
    </div>
  )
}
