import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
  test('should return ', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
