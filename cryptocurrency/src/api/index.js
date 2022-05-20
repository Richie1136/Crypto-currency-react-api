import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoHeaders = {
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '655bdaa00dmsh1dfed893f79b687p102403jsn162126e9f66e'
  }
}

const cryptoUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequests = (url) => ({ url, headers: cryptoHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: cryptoUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequests('/exchanges')
    })
  })
})