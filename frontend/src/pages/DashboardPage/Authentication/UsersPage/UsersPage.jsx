import React, { useEffect } from 'react';
import UsersList from '../../../../components/Dahsboard/AdminAuth/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../../store/auth/auth-actions';

const UsersPage = () => {
  const dispatch = useDispatch();
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const usersData = useSelector((state) => state.auth.usersList);

  useEffect(() => {
    document.title = 'Admin | Kullanıcılar';
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(usersData);

  return <UsersList isSidebar={isSidebar} usersData={usersData} />;
};

export default UsersPage;
