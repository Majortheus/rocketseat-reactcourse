import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', async () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 2 },
    { product: 'Pizza 02', amount: 80 },
    { product: 'Pizza 03', amount: 8 },
    { product: 'Pizza 04', amount: 5 },
    { product: 'Pizza 05', amount: 40 },
  ])
})
