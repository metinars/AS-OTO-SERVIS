import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaCar, FaUsers, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { MdMessage, MdAddToPhotos } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TiUserAdd } from 'react-icons/ti';

import classes from './Sidebar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/sidebar/sidebar-slice';
import { logout } from '../../store/auth/auth-slice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mediaQuery = useMediaQuery({ maxWidth: 992 });
  const mediaQuery480 = useMediaQuery({ maxWidth: 480 });

  useEffect(() => {
    if (mediaQuery) {
      dispatch(sidebarActions.toggle({ status: false }));
    } else {
      dispatch(sidebarActions.toggle({ status: true }));
    }
  }, [mediaQuery]);

  useEffect(() => {
    if (mediaQuery480) {
      dispatch(sidebarActions.toggle({ status: true }));
    }
  }, [mediaQuery480]);

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const isLoginUser = useSelector((state) => state.auth.user);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/auth?mode=login');
  };

  return (
    <div className={classes.sidebarContainer}>
      <div
        className={`${classes.navigation} ${!isSidebar ? classes.active : ''}`}
      >
        <ul>
          <li key={'As Oto Kaporta'}>
            <NavLink to="/admin">
              <span className={classes.icon}>
                <FaCar />
              </span>
              <span className={classes.title}>
                <h2>As Oto Kaporta</h2>
              </span>
            </NavLink>
          </li>
          <li key={'Dashboard'}>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive ? classes.activeLink : undefined
              }
            >
              <span className={classes.icon}>
                <FaHome />
              </span>
              <span className={classes.title}>Dashboard</span>
            </NavLink>
          </li>
          <li key={'blogAll'}>
            <NavLink
              to="/admin/blog/all"
              end
              className={({ isActive }) =>
                isActive ? classes.activeLink : undefined
              }
            >
              <span className={classes.icon}>
                <MdMessage />
              </span>
              <span className={classes.title}>Bloglar</span>
            </NavLink>
          </li>
          <li key={'addBlog'}>
            <NavLink
              to="/admin/blog/add"
              end
              className={({ isActive }) =>
                isActive ? classes.activeLink : undefined
              }
            >
              <span className={classes.icon}>
                <MdAddToPhotos />
              </span>
              <span className={classes.title}>Blog Ekle</span>
            </NavLink>
          </li>

          <li key={'Password'}>
            <NavLink
              to={`/admin/user/${isLoginUser?.userName}/edit-password`}
              end
              className={({ isActive }) =>
                isActive ? classes.activeLink : undefined
              }
            >
              <span className={classes.icon}>
                <RiLockPasswordFill />
              </span>
              <span className={classes.title}>Password</span>
            </NavLink>
          </li>
          <li key={'user-list'}>
            <NavLink
              to={`/admin/user/list`}
              end
              className={({ isActive }) =>
                isActive ? classes.activeLink : undefined
              }
            >
              <span className={classes.icon}>
                <FaUsers />
              </span>
              <span className={classes.title}>Kullanıcılar</span>
            </NavLink>
          </li>
          {isLoginUser.role != 'admin' ? (
            ''
          ) : (
            <li key={'add-user'}>
              <NavLink
                to={`/admin/user/add`}
                end
                className={({ isActive }) =>
                  isActive ? classes.activeLink : undefined
                }
              >
                <span className={classes.icon}>
                  <TiUserAdd />
                </span>
                <span className={classes.title}>Kullanıcı Ekle</span>
              </NavLink>
            </li>
          )}
          <li key={'Sign Out'}>
            <NavLink to="#" onClick={logoutHandler}>
              <span className={classes.icon}>
                <FaSignOutAlt />
              </span>
              <span className={classes.title}>Sign Out</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
