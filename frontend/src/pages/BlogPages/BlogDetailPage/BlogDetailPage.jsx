import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../../layout/BreadCrumbs';
import BlogDetail from '../../../components/Blog/BlogDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlogDetail, fetchBlogs } from '../../../store/blog/blog-action';

const BlogDetailPage = () => {
  const { titleUrl } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (titleUrl) {
      dispatch(fetchBlogs());
      dispatch(fetchBlogDetail(titleUrl));
    }
  }, [dispatch, titleUrl]);

  const { blogDetail, loading, error } = useSelector((state) => state.blog);
  const fetchBlogsList = useSelector((state) => state.blog.blogs.result);

  useEffect(() => {
    document.title = `${blogDetail?.title} | As Oto Kaporta`;
  }, [blogDetail]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!blogDetail) return <p>Blog bulunamadı</p>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* <BreadCrumbs
        home={'ana sayfa'}
        current={'blog'}
        secondCurrent={'blog detay title'}
      /> */}
      <BlogDetail blogDetail={blogDetail} fetchBlogsList={fetchBlogsList} />
    </motion.div>
  );
};

export default BlogDetailPage;
