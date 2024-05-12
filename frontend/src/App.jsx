import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import RootLayout from './pages/RootLayout';
import Home from './pages/HomePage/Home';
import Error from './pages/ErrorPage/Error';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Services from './pages/ServicesPage/Services';
import Contact from './pages/ContactPage/Contact';

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
  return (
    <>
      <RouterProvider router={router} /> <SpeedInsights />
    </>
  );
}

export default App;
