import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import MainNavigation from '../../layout/MainNavigation';
import Footer from '../../layout/Footer/Footer';

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
