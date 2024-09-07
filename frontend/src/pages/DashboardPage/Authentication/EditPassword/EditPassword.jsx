import React, { useEffect } from 'react';
import AdminEditPassword from '../../../../components/Dahsboard/AdminAuth/AdminEditPassword/AdminEditPassword';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { changePassword } from '../../../../store/auth/auth-actions';

const EditPassword = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const changePasswordStatus = useSelector((state) => state.auth);

  useEffect(() => {
    document.title = 'Admin | Edit Password';
  }, []);

  const editPasswordHandle = (editPassword) => {
    console.log('girdi');
    const { nowPassword, newPassword } = editPassword;
    dispatch(changePassword({ userName, nowPassword, newPassword }));
  };

  return (
    <div>
      {changePasswordStatus.loading && <p>Şifre değiştiriliyor...</p>}
      {changePasswordStatus.error && <p>Hata: {changePasswordStatus.error}</p>}
      <AdminEditPassword
        isSidebar={isSidebar}
        userName={userName}
        onPasswordSave={editPasswordHandle}
      />
    </div>
  );
};

export default EditPassword;
