import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      composeModalOpen: false,
      addContactModalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCompose: ((state) => ({...state, composeModalOpen: true})),
    closeCompose: ((state) => ({...state, composeModalOpen: false})),
    toggleCompose: ((state) => ({...state, composeModalOpen: !state.composeModalOpen})),
    openAddContact: ((state) => ({...state, addContactModalOpen: true})),
    closeAddContact: ((state) => ({...state, addContactModalOpen: false})),
    toggleAddContact: ((state) => ({...state, addContactModalOpen: !state.composeModalOpen})),
  },
})

// Action creators are generated for each case reducer function
export const { openCompose, closeCompose, toggleCompose, openAddContact, closeAddContact, toggleAddContact } = uiSlice.actions

export default uiSlice.reducer
