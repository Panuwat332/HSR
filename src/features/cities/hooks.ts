import { useQuery } from '@tanstack/react-query'
import { getCities, City } from './api'

// เพิ่ม parameter (เช่น search) ให้ custom hook
export function useCitiesQuery(params?: { search?: string }) {
  return useQuery<City[]>({
    queryKey: ['cities', params], // ใช้ params เป็นส่วนหนึ่งของ key เพื่อ cache ข้อมูล ไม่ต้องโหลดซ้ำ
    queryFn: () => getCities(params), // ส่ง params เข้าไปในฟังก์ชัน getCities เพื่อดึงข้อมูลเมืองที่ตรงกับเงื่อนไขจาก API
  });
}
//เท่าทีเข้าใจคือ ใน querykey เนี่ย มี cache จากข้อมูลเดิมอยู่มั้ยถ้าไม่มีก็จะโหลดจาก getCities ใหม่