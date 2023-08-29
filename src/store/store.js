import { configureStore } from '@reduxjs/toolkit'
import authReducer, { status } from './authSlice'

const store =  configureStore({
  reducer: {
    auth: authReducer,
  },
})

store.dispatch(status())

export default store;