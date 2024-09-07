import React, { useEffect } from 'react';
import EditBlog from '../../../../components/Dahsboard/Blog/EditBlog';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBlogDetail,
  updateBlog,
} from '../../../../store/blog/blog-action';
import { useParams } from 'react-router-dom';

const BlogEdit = () => {
  const { blogTitleUrl } = useParams();
  const dispatch = useDispatch();

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);

  useEffect(() => {
    document.title = 'Blog | Edit';
    dispatch(fetchBlogDetail(blogTitleUrl));
  }, [dispatch, blogTitleUrl]);

  const handleSave = (updatedBlogData) => {
    dispatch(updateBlog(updatedBlogData));
  };
  const blogData = useSelector((state) => state.blog.blogDetail);

  return (
    <EditBlog
      blogEditData={blogData}
      isSidebar={isSidebar}
      onSave={handleSave}
    />
  );
};

export default BlogEdit;
