import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './BlogList.module.css';
import { fetchBlogs } from '../../../store/blog/blog-action';

const BlogList = () => {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  if (!Array.isArray(blogData)) {
    return <div>Blog verileri yüklenemedi.</div>;
  }

  console.log(blogData);

  const activeBlogs = blogData.filter((blog) => blog.status === 'aktif');

  return (
    <div className={classes.blog_content_wrap}>
      <div className={classes.content_wrap}>
        {activeBlogs.length > 0 ? (
          activeBlogs.map((blog) => (
            <Link to={blog.titleUrl} key={blog._id}>
              <div className={classes.card}>
                <div className={classes['card-header']}>
                  <img
                    src={blog.images[0]?.url || 'defaultImagePath.jpg'}
                    alt={blog.title}
                  />
                </div>
                <div className={classes['card-content']}>
                  <span>{'As Oto Kaporta'}</span>
                  <h2 className={classes.title}>{blog.title}</h2>
                </div>
                <div className={classes['card-footer']}>
                  <img
                    src="https://images.unsplash.com/photo-1646904175176-b659431e2935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
                    alt={blog.uName}
                  />
                  <div className={classes.author}>
                    <p>{blog.uName}</p>
                    <small>{formatDate(blog.createdAt)}</small>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Aktif blog bulunamadı.</div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
