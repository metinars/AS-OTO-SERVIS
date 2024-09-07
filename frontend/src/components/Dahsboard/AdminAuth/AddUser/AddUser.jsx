import React, { useState } from 'react';

import classes from './AddUser.module.css';

const AddUser = ({ isSidebar, onSaveUser }) => {
  const [userData, setUserData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    avatar: null, // Görsel dosyasını burada tutacağız
    role: 'notAdmin', // Varsayılan olarak 'Kullanıcı' seçili
  });

  const userAddHandle = (e) => {
    const { name, value, files } = e.target;

    if (name === 'avatar') {
      setUserData((prevData) => ({
        ...prevData,
        avatar: files[0],
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    console.log(`${name}: ${value}`);
    console.log('Güncel Role Değeri: ', userData.role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveUser(userData);
  };

  return (
    <div
      className={`${classes.addUserSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <div className={classes.addUserContainer}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label>Ad Soyad</label>
            <input
              name="name"
              type="text"
              id="name"
              className={classes.input}
              value={userData.name}
              onChange={userAddHandle}
            />
          </div>
          <div className={classes.formGroup}>
            <label>Kullanıcı Adı:</label>
            <input
              name="userName"
              type="text"
              id="userName"
              className={classes.input}
              value={userData.userName}
              onChange={userAddHandle}
            />
          </div>
          <div className={classes.formGroup}>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              className={classes.input}
              value={userData.email}
              onChange={userAddHandle}
            />
          </div>
          <div className={classes.formGroup}>
            <label>Parola:</label>
            <input
              name="password"
              type="password"
              id="password"
              className={classes.input}
              value={userData.password}
              onChange={userAddHandle}
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="statu">Yetkinlik</label>
            <select
              id="statu"
              name="role"
              className={classes.select}
              value={userData.role}
              onChange={userAddHandle}
            >
              <option value={(setUserData.role = 'notAdmin')}>Kullanıcı</option>
              <option value={(setUserData.role = 'admin')}>Admin</option>
            </select>
          </div>
          <div className={classes.formGroup}>
            <label>Profil Resmi:</label>
            <input
              name="avatar"
              type="file"
              id="avatar"
              className={classes.input}
              onChange={userAddHandle}
            />
          </div>
          <button type="submit" className={classes.button}>
            Kullanıcı Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
