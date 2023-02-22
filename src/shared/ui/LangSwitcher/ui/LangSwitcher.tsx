import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

type Props = {
  className?: string;
  short?: boolean;
};

export const LangSwitcher = ({ className = '', short }: Props) => {
  const { t, i18n } = useTranslation('translation');

  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t((short ?? false) ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
