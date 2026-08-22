import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import BlogDetail from '../../../components/Blog/BlogDetail';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchBlogDetail,
  fetchBlogs,
} from '../../../store/blog/blog-action';

const BlogDetailPage = () => {
  const { titleUrl } = useParams();
  const dispatch = useDispatch();

  const { blogDetail, loading, error } = useSelector(
    (state) => state.blog
  );

  const fetchBlogsList = useSelector(
    (state) => state.blog.blogs
  );

  /*
  |--------------------------------------------------------------------------
  | BLOG VERİLERİNİ GETİR
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    window.scrollTo(0, 0);

    if (titleUrl) {
      dispatch(fetchBlogs());
      dispatch(fetchBlogDetail(titleUrl));
    }
  }, [dispatch, titleUrl]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  /*
  |--------------------------------------------------------------------------
  | ERROR
  |--------------------------------------------------------------------------
  */

  if (error) {
    return (
      <>
        <Helmet>
          <title>Blog Yazısı Bulunamadı | AS Oto Kaporta</title>

          <meta
            name="robots"
            content="noindex, nofollow"
          />
        </Helmet>

        <p>Hata: {error}</p>
      </>
    );
  }

  if (!blogDetail) {
    return (
      <>
        <Helmet>
          <title>Blog Yazısı Bulunamadı | AS Oto Kaporta</title>

          <meta
            name="robots"
            content="noindex, nofollow"
          />
        </Helmet>

        <p>Blog bulunamadı</p>
      </>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | SEO
  |--------------------------------------------------------------------------
  */

  const pageTitle =
    blogDetail.metaTitle ||
    `${blogDetail.title} | AS Oto Kaporta`;

  const pageDescription =
    blogDetail.metaDescription ||
    `${blogDetail.title} hakkında detaylı bilgi alın. AS Oto Kaporta Kırşehir otomotiv, kaporta, boya ve hasar onarım blogu.`;

  const canonicalUrl =
    `https://asotokaporta.com/blog/${blogDetail.titleUrl}`;

  const socialImage =
    blogDetail.images?.[0]?.url || '';

  const keywords = Array.isArray(blogDetail.metaKeywords)
    ? blogDetail.metaKeywords.join(', ')
    : blogDetail.metaKeywords || '';

  /*
  |--------------------------------------------------------------------------
  | BLOG POSTING SCHEMA
  |--------------------------------------------------------------------------
  */

  const blogPostingSchema = {
    '@context': 'https://schema.org',

    '@type': 'BlogPosting',

    '@id': `${canonicalUrl}#article`,

    headline: blogDetail.title,

    description: pageDescription,

    url: canonicalUrl,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },

    author: {
      '@type': 'Organization',
      '@id': 'https://asotokaporta.com/#business',
      name: 'AS Oto Kaporta',
    },

    publisher: {
      '@type': 'Organization',
      '@id': 'https://asotokaporta.com/#business',
      name: 'AS Oto Kaporta',
    },

    ...(blogDetail.createdAt && {
      datePublished: new Date(
        blogDetail.createdAt
      ).toISOString(),
    }),

    ...(blogDetail.updatedAt && {
      dateModified: new Date(
        blogDetail.updatedAt
      ).toISOString(),
    }),

    ...(socialImage && {
      image: [socialImage],
    }),
  };

  /*
  |--------------------------------------------------------------------------
  | BREADCRUMB SCHEMA
  |--------------------------------------------------------------------------
  */

  const breadcrumbSchema = {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',

        position: 1,

        name: 'Ana Sayfa',

        item: 'https://asotokaporta.com/',
      },

      {
        '@type': 'ListItem',

        position: 2,

        name: 'Blog',

        item: 'https://asotokaporta.com/blog',
      },

      {
        '@type': 'ListItem',

        position: 3,

        name: blogDetail.title,

        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      {/*
      |--------------------------------------------------------------------------
      | SEO
      |--------------------------------------------------------------------------
      */}

      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        {keywords && (
          <meta
            name="keywords"
            content={keywords}
          />
        )}

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* OPEN GRAPH */}

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
          content="article"
        />

        <meta
          property="og:site_name"
          content="AS Oto Kaporta"
        />

        {socialImage && (
          <meta
            property="og:image"
            content={socialImage}
          />
        )}

        {/* ARTICLE */}

        {blogDetail.createdAt && (
          <meta
            property="article:published_time"
            content={new Date(
              blogDetail.createdAt
            ).toISOString()}
          />
        )}

        {blogDetail.updatedAt && (
          <meta
            property="article:modified_time"
            content={new Date(
              blogDetail.updatedAt
            ).toISOString()}
          />
        )}

        {/* TWITTER */}

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

        {socialImage && (
          <meta
            name="twitter:image"
            content={socialImage}
          />
        )}

        {/* BLOG POSTING SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>

        {/* BREADCRUMB SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <BlogDetail
          blogDetail={blogDetail}
          fetchBlogsList={fetchBlogsList}
        />
      </motion.div>
    </>
  );
};

export default BlogDetailPage;