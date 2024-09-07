import React, { useState } from 'react';
import classes from './AdminEditPassword.module.css';

const AdminEditPassword = ({ isSidebar, userName, onPasswordSave }) => {
  const [nowPassword, setNowPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert('Yeni şifreler uyuşmuyor');
      return;
    }
    onPasswordSave({ nowPassword, newPassword });
  };

  return (
    <div
      className={`${classes.editPasswordSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <div className={classes.editPasswordContainer}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Mevcut Şifreniz:</label>
            <input
              name="nowPassword"
              type="password"
              id="nowPassword"
              value={nowPassword}
              onChange={(e) => setNowPassword(e.target.value)}
              className={classes.input}
            />
          </div>
          <div className={classes.formGroup}>
            <label>Yeni Şifreniz:</label>
            <input
              name="newPassword"
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={classes.input}
            />
          </div>
          <div className={classes.formGroup}>
            <label>Yeni Şifrenizi Onaylayın:</label>
            <input
              name="confirmNewPassword"
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className={classes.input}
            />
          </div>
          <button type="submit" className={classes.button}>
            Şifreyi Değiştir
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditPassword;
