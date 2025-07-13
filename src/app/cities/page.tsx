'use client'

import CityList from '@/features/cities/CityList'

export default function CitiesPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cities</h1>
      <CityList /> {/* แสดงรายการเมือง จาก city list */} 
    </div>
  )
}
