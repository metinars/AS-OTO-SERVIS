import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import BreadCrumbs from '../../../layout/BreadCrumbs';
import BlogList from '../../../components/Blog/BlogList';

const BlogListPage = () => {
  const pageTitle =
    'Oto Kaporta, Boya ve Hasar Onarımı Blogu | AS Oto Kırşehir';

  const pageDescription =
    "Kırşehir'de oto kaporta, boya, boyasız göçük onarımı, PDR, kasko ve araç hasar onarımı hakkında bilgilendirici yazıları AS Oto blogunda inceleyin.";

  const canonicalUrl = 'https://asotokaporta.com/blog';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="AS Oto Kaporta"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <BreadCrumbs
          home="Ana Sayfa"
          current="Blog"
        />

        <BlogList />
      </motion.div>
    </>
  );
};

export default BlogListPage;