import { type EnhancedStore, type AnyAction, type CombinedState, type Reducer, type ReducersMapObject, type Dispatch } from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type CounterSchema } from 'entities/Counter';
import { type ProfileSchema } from 'entities/Profile';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername';
import { type NavigateOptions, type To } from 'react-router-dom';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // async reducers
  loginForm?: Partial<LoginSchema>;
  profile?: Partial<ProfileSchema>;
};

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
}
