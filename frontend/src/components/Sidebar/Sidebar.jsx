import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaCar, FaUsers, FaHome } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { IoIosHelpCircle, IoIosSettings } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaSignOutAlt } from 'react-icons/fa';

import classes from './Sidebar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/sidebar/sidebar-slice';

const Sidebar = () => {
  const dispatch = useDispatch();

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
    } else {
      dispatch(sidebarActions.toggle({ status: false }));
    }
  }, [mediaQuery480]);

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  return (
    <div className={classes.sidebarContainer}>
      <div
        className={`${classes.navigation} ${!isSidebar ? classes.active : ''}`}
      >
        <ul>
          <li key={'As Oto Kaporta'}>
            <NavLink>
              <span className={classes.icon}>
                <FaCar />
              </span>
              <span className={classes.title}>
                <h2>As Oto Kaporta</h2>
              </span>
            </NavLink>
          </li>
          <li key={'Dashboard'}>
            <NavLink>
              <span className={classes.icon}>
                <FaHome />
              </span>
              <span className={classes.title}>Dashboard</span>
            </NavLink>
          </li>
          <li key={'Customers'}>
            <NavLink>
              <span className={classes.icon}>
                <FaUsers />
              </span>
              <span className={classes.title}>Customers</span>
            </NavLink>
          </li>
          <li key={'Message'}>
            <NavLink>
              <span className={classes.icon}>
                <MdMessage />
              </span>
              <span className={classes.title}>Message</span>
            </NavLink>
          </li>
          <li key={'Help'}>
            <NavLink>
              <span className={classes.icon}>
                <IoIosHelpCircle />
              </span>
              <span className={classes.title}>Help</span>
            </NavLink>
          </li>
          <li key={'Settings'}>
            <NavLink>
              <span className={classes.icon}>
                <IoIosSettings />
              </span>
              <span className={classes.title}>Settings</span>
            </NavLink>
          </li>
          <li key={'Password'}>
            <NavLink>
              <span className={classes.icon}>
                <RiLockPasswordFill />
              </span>
              <span className={classes.title}>Password</span>
            </NavLink>
          </li>
          <li key={'Sign Out'}>
            <NavLink>
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
