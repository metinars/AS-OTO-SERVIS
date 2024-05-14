import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import RootLayout from './pages/RootLayout';
import Home from './pages/HomePage/Home';
import Error from './pages/ErrorPage/Error';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Services from './pages/ServicesPage/Services';
import Contact from './pages/ContactPage/Contact';
// import FixedSocial from './components/Helper/FixedSocial';
import ScrollToUp from './components/Helper/ScrollToTop';
import WhatsappContact from './components/Helper/WhatsappContact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'hakkimizda', element: <AboutUs /> },
      { path: 'hizmetlerimiz', element: <Services /> },
      { path: 'iletisim', element: <Contact /> },
    ],
  },
]);

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <RouterProvider router={router} />
      {/* <FixedSocial /> */}
      <ScrollToUp />
      <WhatsappContact />
      <SpeedInsights />
    </>
  );
}

export default App;
