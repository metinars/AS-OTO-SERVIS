import React from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../../layout/BreadCrumbs';
import BlogList from '../../../components/Blog/BlogList';

const BlogListPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BreadCrumbs home={'Ana Sayfa'} current={'Blog'} />
      <BlogList />
    </motion.div>
  );
};

export default BlogListPage;
