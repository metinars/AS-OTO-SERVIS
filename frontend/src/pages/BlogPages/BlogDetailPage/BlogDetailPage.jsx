import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Helmet eklendi

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
  const fetchBlogsList = useSelector((state) => state.blog.blogs);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;
  if (!blogDetail) return <p>Blog bulunamadı</p>;

  return (
    <>
      <Helmet>
        <title>
          {blogDetail.metaTitle || `${blogDetail.title} | As Oto Kaporta`}
        </title>
        <meta
          name="description"
          content={
            blogDetail.metaDescription || 'AS Oto Kaporta blog detay sayfası'
          }
        />
        <meta
          name="keywords"
          content={blogDetail.metaKeywords || 'oto, kaporta, as oto kaporta'}
        />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* <BreadCrumbs
          home={'ana sayfa'}
          current={'blog'}
          secondCurrent={'blog detay title'}
        /> */}
        <BlogDetail blogDetail={blogDetail} fetchBlogsList={fetchBlogsList} />
      </motion.div>
    </>
  );
};

export default BlogDetailPage;
