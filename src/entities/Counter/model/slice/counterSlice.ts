import { createSlice } from '@reduxjs/toolkit';
import { type CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions, reducer: counterReducer } = counterSlice;
