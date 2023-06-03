import { createSlice } from '@reduxjs/toolkit';
import { type UserSchema } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice;
