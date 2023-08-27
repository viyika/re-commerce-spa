import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
        state.isLoggedIn = false
    },
    userInfo: (state) => {
      state.user = ""
    },
  },
})


export const { login, logout, userInfo } = authSlice.actions
export default authSlice.reducer