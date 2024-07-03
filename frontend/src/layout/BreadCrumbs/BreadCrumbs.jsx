import React from 'react';
import classes from './BreadCrumbs.module.css';
import { Link, NavLink } from 'react-router-dom';

const BreadCrumbs = ({ home, current, secondCurrent }) => {
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
            {secondCurrent ? (
              <>
                <Link to={`/${current}`} className={classes.breadcrumbs__home}>
                  {current}
                </Link>
                <span className={classes.breadcrumbs__delimiter}></span>
                <span className={classes.breadcrumbs__current}>
                  {secondCurrent}
                </span>
              </>
            ) : (
              <span className={classes.breadcrumbs__current}>{current}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
