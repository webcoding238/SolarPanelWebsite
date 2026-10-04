import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

interface NavigationState {
  webpage: string | null
}

const initialState: NavigationState = {
  webpage: 'Homepage'
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setWebpage(state, action: PayloadAction<String>) {
      state.webpage = action.payload.type
    },
  },
  selectors: {
    getWebpage: (state) => state.webpage
  }
})

export const { getWebpage } = navigationSlice.selectors
export const { setWebpage } = navigationSlice.actions

export default navigationSlice.reducer