import { Currency } from 'entities/Currency/model/types/currency';
import { memo, ReactEventHandler, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

type Props = {
  className?: string;
  value?: Currency;
  readOnly?: boolean;

  onChange?: (value: Currency) => void;
};

export const CurrencySelect = memo(({ className, value, readOnly, onChange }: Props) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите валюту')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
});

CurrencySelect.displayName = 'CurrencySelect';
