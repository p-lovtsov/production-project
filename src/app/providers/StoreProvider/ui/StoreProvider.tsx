import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';
import { useNavigate } from 'react-router-dom';

type Props = {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export const StoreProvider = ({ children, initialState, asyncReducers }: Props) => {
  const navigate = useNavigate();
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  );

  return <Provider store={store}>
    {children}
  </Provider>;
};
