import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WorkList from '../../../../components/Dahsboard/Work/WorkList/WorkList';
import { fetchWorks } from '../../../../store/work/work-action';

const Works = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.work.works);
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  useEffect(() => {
    document.title = 'Admin - Yaptığımız İşler';
    window.scrollTo(0, 0);

    dispatch(fetchWorks());
  }, [dispatch]);

  return (
    <div>
      <WorkList works={works} isSidebar={isSidebar} />
    </div>
  );
};

export default Works;