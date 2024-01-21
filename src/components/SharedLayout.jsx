import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Loader } from './Loader/Loader';
import { AppBar } from './AppBar/AppBar';
import { Layout } from './Layout';

export const SharedLayout = () => {
  return (
    <Layout>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </Layout>
  );
};
