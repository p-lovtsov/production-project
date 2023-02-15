import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

type Props = {
  className?: string;
};

export const Loader = ({ className = '' }: Props) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
