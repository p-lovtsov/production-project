import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, type AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig, } from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkExtraArg,
  type ThunkConfig
};
