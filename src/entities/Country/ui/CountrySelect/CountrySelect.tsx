import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo } from 'react';
import { Country } from '../../model/types/country';

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

type Props = {
  className?: string;
  value?: Country;
  readOnly?: boolean;

  onChange?: (value: Country) => void;
};

export const CountrySelect = memo(({ className, value, readOnly, onChange }: Props) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <Select
      label={t('Выберите страну')}
      className={classNames('', {}, [className])}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHandler}
      options={options}
    />
  );
});

CountrySelect.displayName = 'CountrySelect';
