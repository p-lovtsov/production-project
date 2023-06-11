import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type User, type UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice;
