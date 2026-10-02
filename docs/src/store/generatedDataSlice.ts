import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export const dummyDataThunk = createAsyncThunk(
  'generatedData/getGeneratedData',
  async () => {

    let responseSet = []
    const min = 1680
    const max = 3010
    const countMin = 12
    const countMax = 45
    let count = 0

    async function getCount() {
        return count = Math.floor(Math.random() * (countMax - countMin + 1)) + countMin;
    }

    async function response() {
        await getCount()
        for (let i = 0; i < count; i++) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            responseSet.push(randomNum);
        }
    }

   await response();

    function longDistance(responseSetThis) {
        const longest = []
        for (let i = 0; i < responseSetThis.length; i++) {
            if (responseSetThis[i] > 2000) {
                longest.push(responseSetThis[i]);
            }
        }
        return longest;
    }

    return await longDistance.call(null, responseSet);
  }
);

interface GeneratedDataState {
  shippingDistances: [];
  status: 'not received' | 'loading' | 'succeeded' | 'failed';
  error: string | null
}

const initialState: GeneratedDataState = {
  shippingDistances: [],
  status: 'not received',
  error: 'No error'
}

export const generatedDataSlice = createSlice({
  name: 'generatedData',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(dummyDataThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(dummyDataThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.shippingDistances = action.payload;
      })
      .addCase(dummyDataThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || action.error.stack;
      });
  },
  selectors: {
    getGeneratedData: (state) => state.shippingDistances,
    getStatus: (state) => state.status,
    getError: (state) => state.error
  }
})

export const { getGeneratedData, getStatus, getError } = generatedDataSlice.selectors

export default generatedDataSlice.reducer