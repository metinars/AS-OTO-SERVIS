import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import RootLayout from './pages/RootLayout';
import BlogRootLayout from './pages/BlogRootLayout';
import Home from './pages/HomePage/Home';
import Error from './pages/ErrorPage/Error';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Services from './pages/ServicesPage/Services';
import Contact from './pages/ContactPage/Contact';
import ScrollToUp from './components/Helper/ScrollToTop';
import WhatsappContact from './components/Helper/WhatsappContact';
import BlogDetailPage from './pages/BlogPages/BlogDetailPage';
import BlogListPage from './pages/BlogPages/BlogsList/BlogList';
import DashboardHome from './pages/DashboardPage/DashboardHome';
import AdminRootLayout from './pages/DashboardPage/AdminRootLayout';

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
      {
        path: 'blog',
        element: <BlogRootLayout />,
        children: [
          { index: true, element: <BlogListPage /> },
          { path: 'detay', element: <BlogDetailPage /> },
        ],
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminRootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
]);

function App() {
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
