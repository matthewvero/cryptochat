import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      composeModalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCompose: ((state) => ({...state, composeModalOpen: true})),
    closeCompose: ((state) => ({...state, composeModalOpen: false})),
  },
})

// Action creators are generated for each case reducer function
export const { openCompose, closeCompose } = uiSlice.actions

export default uiSlice.reducer
