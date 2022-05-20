import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from '../api/index'

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
})