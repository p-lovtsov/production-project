import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

type Props = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
};

export const Text = ({
  className = '',
  title,
  text,
  theme = TextTheme.PRIMARY,
}: Props) => {
  return (
    <div className={classNames('', { [cls[theme]]: true }, [className])}>
      {Boolean(title) && <p className={cls.title}>{title}</p>}
      {Boolean(text) && <p className={cls.text}>{text}</p>}
    </div>
  );
};
