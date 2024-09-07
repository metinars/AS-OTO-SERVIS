import React, { useEffect } from 'react';
import AddBlog from '../../../../components/Dahsboard/Blog/AddBlog';

const BlogAdd = () => {
  useEffect(() => {
    document.title = 'Admin - Add Blog';
    window.scrollTo(0, 0);
  }, []);
  return <AddBlog />;
};

export default BlogAdd;
