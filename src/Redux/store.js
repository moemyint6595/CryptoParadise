import { configureStore } from '@reduxjs/toolkit'

import { cryptoApi } from '../Services/CryptoApi';
import { cryptoNewsApi } from '../Services/CryptoNewsApi'
import openReducer from './Openmenuslice'

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
        opentoggle : openReducer
    }
})