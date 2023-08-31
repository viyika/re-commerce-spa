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
      state.user = action.payload
      //save it in the local storage
      localStorage.setItem('reCommerceUser', JSON.stringify(action.payload))
    },
    logout: (state) => {
        state.isLoggedIn = false
        state.user = null
        //remove it from the local storage
        localStorage.removeItem('reCommerceUser')
    },
    status: (state) => {
      console.log("status...")
      //check if the user is logged in or not
      const user = localStorage.getItem('reCommerceUser')
      if(user) {
          state.isLoggedIn = true
          state.user = JSON.parse(user)
      } else {
          state.isLoggedIn = false
          state.user = null
      }
    }
  },
})


export const { login, logout, status } = authSlice.actions
export default authSlice.reducer