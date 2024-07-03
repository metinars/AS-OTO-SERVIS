import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../../layout/Dashboard/DashboardMainNavigation/DashboardHeader';
import Sidebar from '../../components/Sidebar/Sidebar';

const AdminRootLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminRootLayout;
