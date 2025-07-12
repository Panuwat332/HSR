import { useQuery } from '@tanstack/react-query'
import { getCities, City } from './api'

export function useCitiesQuery() {
  return useQuery<City[]>({
    queryKey: ['cities'],
    queryFn: getCities,
  })
}
