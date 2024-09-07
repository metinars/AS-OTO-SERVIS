import React, { useEffect } from 'react';
import { FaComment, FaImage, FaCar, FaUsers } from 'react-icons/fa';

import classes from '../../../layout/Dashboard/CardBox/CardBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/auth/auth-actions';

const TopInfoCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const blogLength = useSelector((state) => state.blog.blogLength);
  const adminLength = useSelector((state) => state.auth.usersLength);

  return (
    <div className={classes.cardBox}>
      <div className={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.numbers}>{adminLength}</div>
          <div className={classes.cardName}>Admin Sayısı</div>
        </div>
        <div className={classes.iconBox}>
          <FaUsers />
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.numbers}>{blogLength}</div>
          <div className={classes.cardName}>Blog Sayısı</div>
        </div>
        <div className={classes.iconBox}>
          <FaComment />
        </div>
      </div>
      {/* <div className={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.numbers}>2</div>
          <div className={classes.cardName}>Post Sayısı</div>
        </div>
        <div className={classes.iconBox}>
          <FaImage />
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes.cardContent}>
          <div className={classes.numbers}>23</div>
          <div className={classes.cardName}>İlan Sayısı</div>
        </div>
        <div className={classes.iconBox}>
          <FaCar />
        </div>
      </div> */}
    </div>
  );
};

export default TopInfoCard;
