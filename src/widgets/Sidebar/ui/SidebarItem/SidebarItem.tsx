import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { type SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';

type Props = {
  item: SidebarItemType;
  collapsed: boolean;
};

export const SidebarItem = memo(({ item, collapsed }: Props) => {
  const { t } = useTranslation();

  return (
<AppLink
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
          <>
            <item.Icon className={cls.icon} />
            <span className={classNames(cls.link)}>{t(item.text)}</span>
          </>
        </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';
