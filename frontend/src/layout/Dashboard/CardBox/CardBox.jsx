import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FaEye,
  FaShoppingCart,
  FaComment,
  FaHandHoldingUsd,
} from 'react-icons/fa';

import classes from './CardBox.module.css';

const CardBox = () => {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  return (
    <div
      className={`${classes.cardBoxSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <div className={classes.cardBox}>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.numbers}>1,324</div>
            <div className={classes.cardName}>Daily Views</div>
          </div>
          <div className={classes.iconBox}>
            <FaEye />
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.numbers}>80</div>
            <div className={classes.cardName}>Sales</div>
          </div>
          <div className={classes.iconBox}>
            <FaShoppingCart />
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.numbers}>268</div>
            <div className={classes.cardName}>Comments</div>
          </div>
          <div className={classes.iconBox}>
            <FaComment />
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.cardContent}>
            <div className={classes.numbers}>$965</div>
            <div className={classes.cardName}>Earning</div>
          </div>
          <div className={classes.iconBox}>
            <FaHandHoldingUsd />
          </div>
        </div>
      </div>

      <div className={classes.dahsboardDetails}>
        <div className={classes.recentOrders}>
          <div className={classes.cardHeader}>
            <h2>Recent Orders</h2>
            <Link to="#" className={classes.btn}>
              View All
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className={`${classes.status} ${classes.delivered}`}>
                    Delivered
                  </span>
                </td>
              </tr>
              <tr>
                <td>Window Coolers</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <span className={`${classes.status} ${classes.pending}`}>
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$620</td>
                <td>Paid</td>
                <td>
                  <span className={`${classes.status} ${classes.return}`}>
                    Return
                  </span>
                </td>
              </tr>
              <tr>
                <td>Hp Laptop</td>
                <td>$6000</td>
                <td>Due</td>
                <td>
                  <span className={`${classes.status} ${classes.inprogress}`}>
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>Paid</td>
                <td>
                  <span className={`${classes.status} ${classes.delivered}`}>
                    Delivered
                  </span>
                </td>
              </tr>
              <tr>
                <td>Window Coolers</td>
                <td>$110</td>
                <td>Due</td>
                <td>
                  <span className={`${classes.status} ${classes.pending}`}>
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$620</td>
                <td>Paid</td>
                <td>
                  <span className={`${classes.status} ${classes.return}`}>
                    Return
                  </span>
                </td>
              </tr>
              <tr>
                <td>Hp Laptop</td>
                <td>$6000</td>
                <td>Due</td>
                <td>
                  <span className={`${classes.status} ${classes.inprogress}`}>
                    In Progress
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
