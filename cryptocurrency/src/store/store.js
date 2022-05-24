import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from '../api/index'
import { cryptoNewsApi } from "../api/cryptoNews";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  },
})