import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//import type { RootState } from '../../store/store'

export interface NavigationState {
  webpage: string
}

const initialState: NavigationState = {
  webpage: 'Homepage'
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setWebpage(state, action: PayloadAction<string>) {
      state.webpage = action.payload
    },
  },
  selectors: {
    getWebpage: (state) => state.webpage
  }
})

export const { getWebpage } = navigationSlice.selectors
export const { setWebpage } = navigationSlice.actions

export default navigationSlice.reducer