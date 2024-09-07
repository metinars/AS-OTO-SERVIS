import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardHeader from '../../layout/Dashboard/DashboardMainNavigation/DashboardHeader';
import Sidebar from '../../components/Sidebar/Sidebar';

const AdminRootLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Sidebar />
      <main>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Outlet />;
        </motion.div>
      </main>
    </>
  );
};

export default AdminRootLayout;
