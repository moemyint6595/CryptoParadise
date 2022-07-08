import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '128bb5a93emsh9ae530db312c4a8p132fabjsnaeef342785c8',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = ( url ) => (
    {url, headers : cryptoNewsHeader }
) 

export const cryptoNewsApi = createApi({

    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getNews : builder.query({
            query : ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)   
        })
    })
})

export const { useGetNewsQuery } = cryptoNewsApi;