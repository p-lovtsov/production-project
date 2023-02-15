import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

type Props = {
  className?: string;
};

export const PageLoader = ({ className = '' }: Props) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
