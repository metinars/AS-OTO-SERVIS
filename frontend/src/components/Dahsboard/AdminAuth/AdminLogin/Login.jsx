import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../../store/auth/auth-actions';
import classes from './Login.module.css';
import AuthStatusMessage from '../../../UI/StatusMessages/AuthStatusMessage';

const Login = () => {
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
    document.title = 'Giriş Yap';
  }, [navigate, isAuthenticated]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value.toLowerCase().replace(/\s/g, '');
    const password = passwordRef.current.value;

    const user = {
      userName: userName,
      password: password,
    };

    try {
      await dispatch(login(user)).unwrap();
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  React.useEffect(() => {
    if (user) {
      console.log('Current user in state:', user);
    }
  }, [user]);

  return (
    <div className={classes.loginPage}>
      <div className={classes.loginCard}>
        <h2>Giriş Yap</h2>
        <h3>Giriş Bilgilerinizi Girin</h3>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Kullanıcı Adı" ref={userNameRef} />
          <input type="password" placeholder="Parola" ref={passwordRef} />
          <Link to="/forgot">Şifremi Unuttum</Link>
          <button type="submit" disabled={loading}>
            {loading ? 'Giriş Yapılıyor' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
