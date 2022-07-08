import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key' : '128bb5a93emsh9ae530db312c4a8p132fabjsnaeef342785c8',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
    
const createRequest = ( url ) => (
    {url, headers : cryptoApiHeaders }
) 

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails : builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory : builder.query({
            query : ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
    }) 
})

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery }  = cryptoApi; 