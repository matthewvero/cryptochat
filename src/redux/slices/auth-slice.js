import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: ((state, {payload}) => ({...state, userProfile: payload})),
    clearUser: ((state) => ({...state, userProfile: {}})),
    setPublicAddress: ((state, {payload}) => ({...state, publicAddress: payload})),
    clearPublicAddress: ((state) => ({...state, publicAddress: null}))
  },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser, setPublicAddress, clearPublicAddress } = authSlice.actions

export default authSlice.reducer