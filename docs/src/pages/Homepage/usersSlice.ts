import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

export const dummyApiThunk = createAsyncThunk(
  'users/getUser',
  async () => {
    const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }
);

export interface User {
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
    lat: string,
    lng: string
    }
  },
    company: {
    bs: string,
    catchPhrase: string,
    name: string
  },
  email: string,
  id: number;
  name: string;
  phone: string,
  username: string,
  website: string
}

interface UsersState {
  users: User[];
  status: 'not received' | 'loading' | 'succeeded' | 'failed';
  error: string | null
}

const initialState: UsersState = {
  users: [],
  status: 'not received',
  error: 'No error'
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(dummyApiThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(dummyApiThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload.slice(0, 5);
      })
      .addCase(dummyApiThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || action.error.stack;
      });
  },
  selectors: {
    getUsers: (state) => state.users,
    getStatus: (state) => state.status,
    getError: (state) => state.error
  }
})

export const { getUsers, getStatus, getError } = usersSlice.selectors

export default usersSlice.reducer