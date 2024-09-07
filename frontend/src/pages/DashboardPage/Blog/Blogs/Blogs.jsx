import React, { useEffect } from 'react';
import BlogList from '../../../../components/Dahsboard/Blog/BlogList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../../store/blog/blog-action';

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  useEffect(() => {
    document.title = 'Admin - Bloglar';
    window.scrollTo(0, 0);
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div>
      <BlogList blogs={blogs} isSidebar={isSidebar} />
    </div>
  );
};

export default Blogs;
