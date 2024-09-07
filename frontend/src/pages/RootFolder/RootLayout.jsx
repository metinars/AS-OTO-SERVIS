import { Outlet } from 'react-router-dom';

import MainNavigation from '../../layout/MainNavigation';
import Footer from '../../layout/Footer/Footer';

const RootLayout = () => {
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
