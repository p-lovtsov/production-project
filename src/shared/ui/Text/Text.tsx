import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

type Props = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
};

export const Text = memo(
  ({
    className = '',
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  }: Props) => {
    const mods: Mods = {
      [cls[theme]]: true,
      [cls[align]]: true,
    };

    return (
      <div className={classNames('', mods, [className])}>
        {Boolean(title) && <p className={cls.title}>{title}</p>}
        {Boolean(text) && <p className={cls.text}>{text}</p>}
      </div>
    );
  }
);

Text.displayName = 'Text';
