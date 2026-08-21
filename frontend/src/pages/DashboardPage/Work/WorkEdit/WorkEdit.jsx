import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditWork from '../../../../components/Dahsboard/Work/EditWork/EditWork';

import {
  fetchWorkDetail,
  updateWork,
} from '../../../../store/work/work-action';

const WorkEdit = () => {
  const { workTitleUrl } = useParams();

  const dispatch = useDispatch();

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const workData = useSelector((state) => state.work.workDetail);

  useEffect(() => {
    document.title = 'Admin - İş Düzenle';
    window.scrollTo(0, 0);

    dispatch(fetchWorkDetail(workTitleUrl));
  }, [dispatch, workTitleUrl]);

  const handleSave = (updatedWorkData) => {
    dispatch(updateWork(updatedWorkData));
  };

  return (
    <EditWork
      workEditData={workData}
      isSidebar={isSidebar}
      onSave={handleSave}
    />
  );
};

export default WorkEdit;