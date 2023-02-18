import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();
  console.log('test workflow');

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
