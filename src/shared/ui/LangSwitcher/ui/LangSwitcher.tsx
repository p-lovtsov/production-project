import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

type Props = {
  className?: string;
};

export const LangSwitcher = ({ className = '' }: Props) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
