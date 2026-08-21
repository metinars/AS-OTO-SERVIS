import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';

import RootLayout from './pages/RootFolder/RootLayout';
import BlogRootLayout from './pages/RootFolder/BlogRootLayout';

import Home from './pages/HomePage/Home';
import Error from './pages/ErrorPage/Error';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Services from './pages/ServicesPage/Services';
import Contact from './pages/ContactPage/Contact';
import QrPage from './pages/QrPage/QrPage';

import KirsehirOtoKaporta from './layout/ServiceDetailPages/KirsehirOtoKaporta';
import KirsehirBoyasizGocuk from './layout/ServiceDetailPages/KirsehirBoyasizGocuk';
import KirsehirOtoBoya from './layout/ServiceDetailPages/KirsehirOtoBoya';
import KirsehirSigortaKasko from './layout/ServiceDetailPages/KirsehirSigortaKasko';
import KirsehirLokalBoya from './layout/ServiceDetailPages/KirsehirLokalBoya';
import KirsehirDoluHasari from './layout/ServiceDetailPages/KirsehirDoluHasari';

import BlogDetailPage from './pages/BlogPages/BlogDetailPage';
import BlogListPage from './pages/BlogPages/BlogsList/BlogList';

/*
|--------------------------------------------------------------------------
| PUBLIC WORK PAGES
|--------------------------------------------------------------------------
*/

import WorksList from './pages/WorksPages/WorksList/WorksList';
import WorkDetail from './pages/WorksPages/WorkDetail/WorkDetail';

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

import WorkAdd from './pages/DashboardPage/Work/WorkAdd/WorkAdd';
import Works from './pages/DashboardPage/Work/Works/Works';
import WorkEdit from './pages/DashboardPage/Work/WorkEdit/WorkEdit';

import EditPassword from './pages/DashboardPage/Authentication/EditPassword';
import AddUserPage from './pages/DashboardPage/Authentication/AddUser/AddUser';
import UsersPage from './pages/DashboardPage/Authentication/UsersPage';

import SearchResult from './components/Dahsboard/AdminAuth/SearchResult';

import BlogStatusMessage from './components/UI/StatusMessages/BlogStatusMessage';
import AuthStatusMessage from './components/UI/StatusMessages/AuthStatusMessage';

const router = createBrowserRouter([
  /*
  |--------------------------------------------------------------------------
  | QR
  |--------------------------------------------------------------------------
  */

  {
    path: '/qr',
    element: <QrPage />,
    errorElement: <Error />,
  },

  /*
  |--------------------------------------------------------------------------
  | PUBLIC SITE
  |--------------------------------------------------------------------------
  */

  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'hakkimizda',
        element: <AboutUs />,
      },

      {
        path: 'hizmetlerimiz',
        element: <Services />,
      },

      /*
      |--------------------------------------------------------------------------
      | HİZMETLER
      |--------------------------------------------------------------------------
      */

      {
        path: 'hizmetler/kirsehir-oto-kaporta',
        element: <KirsehirOtoKaporta />,
      },

      {
        path: 'hizmetler/kirsehir-boyasiz-gocuk-onarimi',
        element: <KirsehirBoyasizGocuk />,
      },

      {
        path: 'hizmetler/kirsehir-oto-boya',
        element: <KirsehirOtoBoya />,
      },

      {
        path: 'hizmetler/kirsehir-sigorta-kasko-hasar-onarimi',
        element: <KirsehirSigortaKasko />,
      },

      {
        path: 'hizmetler/kirsehir-lokal-boya',
        element: <KirsehirLokalBoya />,
      },

      {
        path: 'hizmetler/kirsehir-dolu-hasari-onarimi',
        element: <KirsehirDoluHasari />,
      },

      /*
      |--------------------------------------------------------------------------
      | YAPTIĞIMIZ İŞLER - PUBLIC
      |--------------------------------------------------------------------------
      */

      {
        path: 'yaptigimiz-isler',
        children: [
          {
            index: true,
            element: <WorksList />,
          },

          {
            path: ':titleUrl',
            element: <WorkDetail />,
          },
        ],
      },

      /*
      |--------------------------------------------------------------------------
      | İLETİŞİM
      |--------------------------------------------------------------------------
      */

      {
        path: 'iletisim',
        element: <Contact />,
      },

      /*
      |--------------------------------------------------------------------------
      | BLOG - PUBLIC
      |--------------------------------------------------------------------------
      */

      {
        path: 'blog',
        element: <BlogRootLayout />,
        children: [
          {
            index: true,
            element: <BlogListPage />,
          },

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

  /*
  |--------------------------------------------------------------------------
  | ADMIN
  |--------------------------------------------------------------------------
  */

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

      /*
      |--------------------------------------------------------------------------
      | BLOG ADMIN
      |--------------------------------------------------------------------------
      */

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

      /*
      |--------------------------------------------------------------------------
      | YAPTIĞIMIZ İŞLER - ADMIN
      |--------------------------------------------------------------------------
      */

      {
        path: 'work',
        element: <AdminRootLayout />,
        children: [
          {
            path: 'all',
            element: <Works />,
          },

          {
            path: 'add',
            element: <WorkAdd />,
          },

          {
            path: ':workTitleUrl',
            id: 'work-title-url',
            children: [
              {
                path: 'edit',
                element: <WorkEdit />,
              },
            ],
          },
        ],
      },

      /*
      |--------------------------------------------------------------------------
      | KULLANICILAR
      |--------------------------------------------------------------------------
      */

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

  /*
  |--------------------------------------------------------------------------
  | AUTH
  |--------------------------------------------------------------------------
  */

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

      <BlogStatusMessage />
      <AuthStatusMessage />

      <SpeedInsights />
    </>
  );
}

export default App;