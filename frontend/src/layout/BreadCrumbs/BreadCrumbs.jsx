import React from 'react';
import classes from './BreadCrumbs.module.css';
import { NavLink } from 'react-router-dom';

const BreadCrumbs = ({ home, current }) => {
  return (
    <div>
      <div className={classes.breadcrumbs__section}>
        <div className={classes.container}>
          <div className={classes.breadcrumbs__title}>{current}</div>
          <div className={classes.breadcrumbs__items}>
            <NavLink to={'/'} className={classes.breadcrumbs__home}>
              {home}
            </NavLink>
            <span className={classes.breadcrumbs__delimiter}></span>
            <span className={classes.breadcrumbs__current}>{current}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
