import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';

type SelectOption = {
  value: string;
  content: string;
};

type Props = {
  label?: string;
  className?: string;
  options?: SelectOption[];
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
};

export const Select = memo(({ className, label, options, value, readOnly, onChange }: Props) => {
  const mods: Mods = {
    [cls.readOnly]: readOnly,
  };

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const optionsList = useMemo(() => {
    return options?.map(({ value, content }: SelectOption) => (
      <option key={value} className={cls.option} value={value}>
        {content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <label htmlFor={`select-${label}`} className={cls.label}>{`${label} > `}</label>}
      <select
        id={`select-${label}`}
        disabled={readOnly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});

Select.displayName = 'Select';
