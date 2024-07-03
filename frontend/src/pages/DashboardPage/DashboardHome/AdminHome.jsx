import React, { useEffect } from 'react';

import classes from './AdminHome.module.css';
import CardBox from '../../../layout/Dashboard/CardBox';

const AdminHome = () => {
  useEffect(() => {
    document.title = 'Admin - Ana Sayfa';
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CardBox />
    </>
  );
};

export default AdminHome;
