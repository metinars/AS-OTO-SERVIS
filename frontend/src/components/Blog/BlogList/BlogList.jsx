import React from 'react';

import blog1 from '../../../assets/images/blog/post5-890x664.jpg';
import blog2 from '../../../assets/images/blog/post6-890x664.jpeg';
import blog3 from '../../../assets/images/blog/post7-890x664.jpeg';
import classes from './BlogList.module.css';

const BlogList = () => {
  return (
    <div className={classes.blog_content_wrap}>
      <div className={classes.content_wrap}>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <img src={blog1} alt="" />
          </div>
          <div className={classes['card-content']}>
            <span>Technology</span>
            <a className={classes.title} href="#">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <div className={classes['card-footer']}>
            <img
              src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt=""
            />
            <div className={classes.author}>
              <p>John Doe</p>
              <small>2h ago</small>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <img src={blog2} alt="" />
          </div>
          <div className={classes['card-content']}>
            <span>Technology</span>
            <a className={classes.title} href="#">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <div className={classes['card-footer']}>
            <img
              src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt=""
            />
            <div className={classes.author}>
              <p>John Doe</p>
              <small>2h ago</small>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <img src={blog3} alt="" />
          </div>
          <div className={classes['card-content']}>
            <span>Technology</span>
            <a className={classes.title} href="#">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <div className={classes['card-footer']}>
            <img
              src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt=""
            />
            <div className={classes.author}>
              <p>John Doe</p>
              <small>2h ago</small>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <img src={blog1} alt="" />
          </div>
          <div className={classes['card-content']}>
            <span>Technology</span>
            <a className={classes.title} href="#">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <div className={classes['card-footer']}>
            <img
              src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt=""
            />
            <div className={classes.author}>
              <p>John Doe</p>
              <small>2h ago</small>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <img src={blog2} alt="" />
          </div>
          <div className={classes['card-content']}>
            <span>Technology</span>
            <a className={classes.title} href="#">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <div className={classes['card-footer']}>
            <img
              src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt=""
            />
            <div className={classes.author}>
              <p>John Doe</p>
              <small>2h ago</small>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes['card-header']}>
            <img src={blog3} alt="" />
          </div>
          <div className={classes['card-content']}>
            <span>Technology</span>
            <a className={classes.title} href="#">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <div className={classes['card-footer']}>
            <img
              src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
              alt=""
            />
            <div className={classes.author}>
              <p>John Doe</p>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
