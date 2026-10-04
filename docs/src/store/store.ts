import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import usersReducer from '../pages/Homepage/usersSlice'
import generatedDataReducer from '../pages/Tracking/generatedDataSlice'
import navigationSlice from './navigationSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    generatedData: generatedDataReducer,
    navigation: navigationSlice
  }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch