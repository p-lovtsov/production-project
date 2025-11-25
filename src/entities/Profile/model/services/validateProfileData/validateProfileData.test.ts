import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const data = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  lastName: 'Lovtsov',
  first: 'Pavel',
  city: 'RZN',
  currency: Currency.EUR,
  avatar:
    'https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and lastname', () => {
    const result = validateProfileData({ ...data, first: '', lastName: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERDATA]);
  });

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', () => {
    const result = validateProfileData({ ...data, country: undefined, first: '', lastName: '', age: 0 });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USERDATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
