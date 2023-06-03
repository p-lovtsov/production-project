import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

type Props = {
  className?: string;
};

export const LoginForm = ({ className = '' }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        autoFocus
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
