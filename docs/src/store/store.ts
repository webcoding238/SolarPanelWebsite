import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import usersReducer from './usersSlice'
import generatedDataReducer from './generatedDataSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    generatedData: generatedDataReducer
  }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch