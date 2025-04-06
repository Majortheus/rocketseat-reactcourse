import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  async () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+5511999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  },
)
