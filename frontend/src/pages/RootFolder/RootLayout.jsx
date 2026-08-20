import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import MainNavigation from '../../layout/MainNavigation';
import Footer from '../../layout/Footer/Footer';
import FixedSocial from '../../components/Helper/FixedSocial/FixedSocial';

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

      <FixedSocial />

      <Footer />
    </>
  );
};

export default RootLayout;
