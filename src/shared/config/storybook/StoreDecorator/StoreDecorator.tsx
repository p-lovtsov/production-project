import { type DeepPartial } from '@reduxjs/toolkit';
import { type Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
}
