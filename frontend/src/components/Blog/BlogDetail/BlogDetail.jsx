import React from 'react';
import { CiSearch } from 'react-icons/ci';

import classes from './BlogDetail.module.css';
import image from '../../../assets/images/blog/post19-detail.jpeg';

import blog1 from '../../../assets/images/blog/post5-890x664.jpg';
import blog2 from '../../../assets/images/blog/post6-890x664.jpeg';
import blog3 from '../../../assets/images/blog/post7-890x664.jpeg';

const BlogDetail = () => {
  return (
    <div className={classes.container}>
      <div className={classes.blogTopImage}>
        <div className={classes.imageOverlay}></div>
        <img src={image} alt="Blog görseli" className={classes.image} />
        <h1 className={classes.title}>
          THE BEST SOAP AND WAX TO COVER YOUR CAR WITH
        </h1>
      </div>
      <div className={classes.content}>
        {/* <div className={classes.author}>
          <img
            src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
            alt="Yazar avatarı"
            className={classes.avatar}
          />
          <div className={classes.authorInfo}>
            <p className={classes.authorName}>As Oto Kaporta</p>
            <p className={classes.publishDate}>21 Mayıs 2024</p>
          </div>
        </div> */}
        <div className={classes.mainContent}>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2 className={classes.blogSectionTitle}>Blog İçeriği</h2>
          <p className={classes.blogContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={classes.blogContent}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className={classes.sidebar}>
          {/* <div className={classes.logoContainer}>
            <img src={logo} alt="Logo" className={classes.logo} />
          </div> */}
          <h3 className={classes.sidebarTitle}>Ara</h3>
          <div className={classes.search}>
            <input
              type="text"
              placeholder="Ara.."
              className={classes.searchInput}
            />
            <CiSearch className={classes.searchIcon} />
          </div>
          <div className={classes.recentPosts}>
            <h2>RECENT POSTS</h2>
            <ul>
              <li className={classes.postItem}>
                <img src={blog1} alt={''} className={classes.postImage} />
                <div className={classes.postInfo}>
                  <a>Must-Do Regular Checkups for a Better Car Operation</a>
                  <span className={classes.postDate}>Aug 6, 2023</span>
                </div>
              </li>
              <li className={classes.postItem}>
                <img src={blog2} alt={''} className={classes.postImage} />
                <div className={classes.postInfo}>
                  <a>Must-Do Regular Checkups for a Better Car Operation</a>
                  <span className={classes.postDate}>Aug 6, 2023</span>
                </div>
              </li>
              <li className={classes.postItem}>
                <img src={blog1} alt={''} className={classes.postImage} />
                <div className={classes.postInfo}>
                  <a>Must-Do Regular Checkups for a Better Car Operation</a>
                  <span className={classes.postDate}>Aug 6, 2023</span>
                </div>
              </li>
              <li className={classes.postItem}>
                <img src={blog2} alt={''} className={classes.postImage} />
                <div className={classes.postInfo}>
                  <a>Must-Do Regular Checkups for a Better Car Operation</a>
                  <span className={classes.postDate}>Aug 6, 2023</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
