import React, { useEffect } from 'react';

import AddUser from '../../../../components/Dahsboard/AdminAuth/AddUser';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../../store/auth/auth-actions';

const AddUserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = 'Admin | Kullanıcı Ekle';
  });
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  const addUserHandle = (addUserData) => {
    console.log(addUserData);
    dispatch(addUser(addUserData));
  };

  return <AddUser isSidebar={isSidebar} onSaveUser={addUserHandle} />;
};

export default AddUserPage;
