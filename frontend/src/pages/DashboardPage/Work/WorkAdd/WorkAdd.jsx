import React, { useEffect } from 'react';

import AddWork from '../../../../components/Dahsboard/Work/AddWork';

const WorkAdd = () => {
  useEffect(() => {
    document.title = 'Admin - İş Ekle';
    window.scrollTo(0, 0);
  }, []);

  return <AddWork />;
};

export default WorkAdd;