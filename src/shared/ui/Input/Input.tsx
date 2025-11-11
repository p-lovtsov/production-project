import { memo, type InputHTMLAttributes, useState, useEffect, useRef } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
}

export const Input = memo((props: Props) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder = '',
    autoFocus = false,
    readOnly,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readOnly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart ?? 0);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {Boolean(placeholder) && <div className={cls.placeholder}>{`${placeholder}`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 5}px` }} />}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
