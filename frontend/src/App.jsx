import React, { useState, useEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import RootLayout from './pages/RootFolder/RootLayout';
import BlogRootLayout from './pages/RootFolder/BlogRootLayout';
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
import AdminRootLayout from './pages/RootFolder/AdminRootLayout';
import AuthenticationPage, {
  action as authAction,
} from './pages/DashboardPage/Authentication/Authentication';
import { checkAuthLoader } from './util/auth';
import { CheckStatuLoader } from './util/userStatu';
import ForgotPassword from './pages/DashboardPage/Authentication/ForgotPassword';
import ResetPassword from './pages/DashboardPage/Authentication/ResetPassword/ResetPassword';
import Blogs from './pages/DashboardPage/Blog/Blogs';
import BlogEdit from './pages/DashboardPage/Blog/BlogEdit/BlogEdit';
import BlogAdd from './pages/DashboardPage/Blog/BlogAdd/BlogAdd';
import EditPassword from './pages/DashboardPage/Authentication/EditPassword';
import AddUserPage from './pages/DashboardPage/Authentication/AddUser/AddUser';
import UsersPage from './pages/DashboardPage/Authentication/UsersPage';
import SearchResult from './components/Dahsboard/AdminAuth/SearchResult';
import BlogStatusMessage from './components/UI/StatusMessages/BlogStatusMessage';
import AuthStatusMessage from './components/UI/StatusMessages/AuthStatusMessage';

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
          {
            path: ':titleUrl',
            children: [
              {
                index: true,
                element: <BlogDetailPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminRootLayout />,
    loader: checkAuthLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'blog',
        element: <AdminRootLayout />,
        children: [
          {
            index: true,
          },
          {
            path: 'all',
            element: <Blogs />,
          },
          {
            path: '?search/:query',
            element: <SearchResult />,
          },
          {
            path: 'add',
            element: <BlogAdd />,
          },
          {
            path: ':blogTitleUrl',
            id: 'blog-title-url',
            children: [
              {
                path: 'edit',
                element: <BlogEdit />,
              },
            ],
          },
        ],
      },
      {
        path: 'user',
        element: <AdminRootLayout />,
        children: [
          {
            path: ':userName',
            id: 'user-name',
            children: [
              {
                path: 'edit-password',
                element: <EditPassword />,
              },
            ],
          },
          {
            path: 'list',
            element: <UsersPage />,
          },
          {
            path: 'add',
            id: 'add-user',
            loader: CheckStatuLoader,
            element: <AddUserPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthenticationPage />,
    action: authAction,
  },
  {
    path: 'forgot',
    element: <ForgotPassword />,
  },
  {
    path: 'reset/:token',
    element: <ResetPassword />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <FixedSocial /> */}
      <ScrollToUp />
      <BlogStatusMessage />
      <AuthStatusMessage />
      <WhatsappContact />
      <SpeedInsights />
    </>
  );
}

export default App;
