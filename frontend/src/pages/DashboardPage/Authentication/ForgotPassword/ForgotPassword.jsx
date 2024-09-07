import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './ForgotPassword.module.css';
import { forgotPasswordPost } from '../../../../store/auth/auth-actions';

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();

  const forgotPasswordHandler = () => {
    dispatch(forgotPasswordPost(email));
  };

  useEffect(() => {
    document.title = 'Admin | Parolamı Unuttum';
  });

  return (
    <div className={classes.forgotPage}>
      <div className={classes.container}>
        <h2 className={classes.forgotText}>Şifremi Unuttum</h2>
        <h3>Şifrenizi değiştirmek için mail adresinizi girin</h3>
        <div className={classes.forgotForm}>
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="text"
          />
          <button onClick={forgotPasswordHandler}>Onayla</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
