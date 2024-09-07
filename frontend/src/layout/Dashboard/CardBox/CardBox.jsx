import React from 'react';
import { useSelector } from 'react-redux';

import classes from './CardBox.module.css';
import TopInfoCard from '../../../components/Dahsboard/TopInfoCard';
import BlogInfoCard from '../../../components/Dahsboard/BlogInfoCard';

const CardBox = () => {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  return (
    <div
      className={`${classes.cardBoxSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <TopInfoCard />

      <div className={classes.dahsboardDetails}>
        <BlogInfoCard />
        {/* <div className={classes.recentCustomers}>
          <div className={classes.cardHeader}>
            <h2>Recent Customers</h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className={classes.imgBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
                  </div>
                </td>
                <td>
                  <h4>
                    David<span>Italy</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.imgBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
                  </div>
                </td>
                <td>
                  <h4>
                    David<span>Italy</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.imgBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
                  </div>
                </td>
                <td>
                  <h4>
                    David<span>Italy</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.imgBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
                  </div>
                </td>
                <td>
                  <h4>
                    David<span>Italy</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.imgBox}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9tjaExsY-srL4VsHNE_OKGVCJ-eIFNBktw&usqp=CAU" />
                  </div>
                </td>
                <td>
                  <h4>
                    David<span>Italy</span>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default CardBox;
