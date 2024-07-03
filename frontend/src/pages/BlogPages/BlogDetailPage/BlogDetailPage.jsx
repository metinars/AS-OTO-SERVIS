import React from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../../layout/BreadCrumbs';
import BlogDetail from '../../../components/Blog/BlogDetail';

const BlogDetailPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* <BreadCrumbs
        home={'ana sayfa'}
        current={'blog'}
        secondCurrent={'blog detay title'}
      /> */}
      <BlogDetail />
    </motion.div>
  );
};

export default BlogDetailPage;
