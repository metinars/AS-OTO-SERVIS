import React, { useEffect } from 'react';

import CardBox from '../../../layout/Dashboard/CardBox';

const AdminHome = () => {
  useEffect(() => {
    document.title = 'Admin - Home';
  }, []);
  return (
    <>
      <CardBox />
    </>
  );
};

export default AdminHome;
