import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import { AppNav } from './AppNav/AppNav';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <AppNav />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
};
