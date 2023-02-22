
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

type Props = {
  className?: string;
};

export const Navbar = ({ className = '' }: Props) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
    </div>
  );
};
