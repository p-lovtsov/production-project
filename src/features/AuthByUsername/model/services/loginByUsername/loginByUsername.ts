import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, type User } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface Props {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, Props>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      console.log('error', err);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
