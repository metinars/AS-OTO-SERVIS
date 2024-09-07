import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import classes from './ResetPassword.module.css';
import { resetPassPost } from '../../../../store/auth/auth-actions';

const ResetPassword = () => {
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useParams();

  useEffect(() => {
    document.title = 'Admin | Parola Sıfırla';
  });

  const resetPassHandler = async () => {
    try {
      await dispatch(resetPassPost({ token, password })).unwrap();
      navigate('/auth'); // Şifre sıfırlama başarılıysa giriş sayfasına yönlendir
    } catch (error) {
      console.error('Şifre sıfırlama sırasında bir hata oluştu:', error);
    }
  };
  return (
    <div className={classes.resetPage}>
      <div className={classes.container}>
        <h2 className={classes.resetText}>Yeni Şifre Oluştur</h2>
        <h3>Şifrenizi değiştirmek için yeni şifrenizi girin</h3>
        <div className={classes.resetForm}>
          <input
            placeholder="Yeni Şifre"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
          />
          <button onClick={resetPassHandler}>Onayla</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
