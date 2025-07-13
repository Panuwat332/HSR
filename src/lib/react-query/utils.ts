import { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}


export const queryKeys = {
  cities: ['cities'],
  city: (id: string | number) => ['city', id],
}
