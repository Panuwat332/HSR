'use client'


import { useCitiesQuery } from './hooks'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

// เพิ่ม prop params เพื่อรองรับ parameter
type CityListProps = {
  search?: string;
};

export default function CityList({ search }: CityListProps) {
  const { data: cities, isLoading, error } = useCitiesQuery({ search });// ส่ง search เข้าไปใน hook (จะส่ง search parameter นี้ไปยัง API เพื่อ filter หรือค้นหาข้อมูลเมืองที่ตรงกับ search นั้น 
                                                                        // เช่น bangkok มันก้จะไปหาข้อมูลที่ตรงกัน ไม่รู้เข้าใจถูกป่าว)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading cities</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cities?.map(city => (
        <Card key={city.id}>
          <CardContent className="p-4">
            <Link href={`/cities/${city.id}`} className="font-bold text-blue-600 hover:underline">
              {city.name}
            </Link>
            <p className="text-gray-500">{city.country}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
