import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';
import { Modal } from 'shared/ui/Modal/Modal';

type Props = {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ className = '', isOpen, onClose }: Props) => {
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
