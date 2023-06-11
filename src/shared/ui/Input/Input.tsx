import { memo, type InputHTMLAttributes, useState, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo((props: Props) => {
  const { className = '', value, onChange, type = 'text', placeholder = '', autoFocus = false, ...otherProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  const onFocus = () => {
    setIsFocused(true);
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart ?? 0);
  }

  return <div className={classNames(cls.InputWrapper, {}, [className])}>
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
        {...otherProps}
      />
      {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 5}px` }}/>}
    </div>
  </div>;
});

Input.displayName = 'Input';
