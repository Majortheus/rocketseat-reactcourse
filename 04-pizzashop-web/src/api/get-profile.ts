import { api } from '@/lib/axios'

export type GetProfileResponse = {
  id: string
  name: string
  email: string
  phone: string
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
