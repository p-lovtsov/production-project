import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

type Props = {
  src: string;
  className?: string;
  size?: number;
  alt?: string;
};

export const Avatar = ({ className, src, size, alt = '' }: Props) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      height: size,
      width: size,
    }),
    [size],
  );

  return <img alt={alt} src={src} style={styles} className={classNames(cls.Avatar, mods, [className])} />;
};
