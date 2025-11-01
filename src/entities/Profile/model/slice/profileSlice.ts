import { createSlice } from '@reduxjs/toolkit';
import { type ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
