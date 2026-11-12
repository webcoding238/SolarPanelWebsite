import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NavigationState {
  webpage: string,
  themePopup: boolean,
  isDarkTheme: boolean
}

const initialState: NavigationState = {
  webpage: 'Homepage',
  themePopup: true,
  isDarkTheme: false
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setWebpage(state, action: PayloadAction<string>) {
      state.webpage = action.payload
    },
    closeThemePopup(state, action: PayloadAction<boolean>) {
      state.themePopup = action.payload
    },
    toggleThemeContrast(state, action: PayloadAction<boolean>) {
      state.isDarkTheme = action.payload
    },
  },
  selectors: {
    getWebpage: (state) => state.webpage,
    getThemePopup: (state) => state.themePopup,
    getThemeContrast: (state) => state.isDarkTheme
  }
})

export const { getWebpage } = navigationSlice.selectors
export const { setWebpage } = navigationSlice.actions
export const { getThemePopup } = navigationSlice.selectors
export const { closeThemePopup } = navigationSlice.actions
export const { getThemeContrast } = navigationSlice.selectors
export const { toggleThemeContrast } = navigationSlice.actions

export default navigationSlice.reducer