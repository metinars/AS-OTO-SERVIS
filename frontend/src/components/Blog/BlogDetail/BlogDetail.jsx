import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

import classes from './BlogDetail.module.css';
import blog1 from '../../../assets/images/blog/post5-890x664.jpg';

const BlogDetail = ({ blogDetail, fetchBlogsList = [] }) => {
  const activeBlogs = fetchBlogsList
    .filter((blog) => blog.status === 'aktif')
    .filter((blog) => blog.titleUrl !== blogDetail?.titleUrl)
    .slice(0, 6);

  const hasImages = blogDetail?.images && blogDetail.images.length > 0;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <article className={classes.container}>
      <section className={classes.hero}>
        <div className={classes.imageOverlay}></div>

        <img
          src={hasImages ? blogDetail.images[0]?.url : blog1}
          alt={blogDetail?.title || 'As Oto Kaporta Blog'}
          className={classes.image}
        />

        <div className={classes.heroContent}>
          <span>AS OTO KAPORTA BLOG</span>
          <h1>{blogDetail?.title}</h1>

          <div className={classes.meta}>
            <div>
              <FaUserAlt />
              <span>{blogDetail?.name || 'As Oto Kaporta'}</span>
            </div>

            <div>
              <FaCalendarAlt />
              <span>{formatDate(blogDetail?.createdAt)}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.content}>
        <main className={classes.mainContent}>
          <div className={classes.articleCard}>
            <h2>{blogDetail?.title}</h2>

            <div
              className={classes.blogContent}
              dangerouslySetInnerHTML={{ __html: blogDetail?.desc || '' }}
            />
          </div>
        </main>

        <aside className={classes.sidebar}>
          <div className={classes.sidebarCard}>
            <h3>Bloglarda Ara</h3>

            <div className={classes.search}>
              <input
                type="text"
                placeholder="Blog ara..."
                className={classes.searchInput}
              />
              <CiSearch className={classes.searchIcon} />
            </div>
          </div>

          <div className={classes.sidebarCard}>
            <h3>Son Eklenen Bloglar</h3>

            <div className={classes.recentPosts}>
              {activeBlogs?.map((blog) => (
                <Link
                  to={`/blog/${blog?.titleUrl}`}
                  key={blog?._id || blog?.titleUrl}
                  className={classes.postItem}
                >
                  <img
                    src={blog?.images[0]?.url || blog1}
                    alt={blog?.title || 'As Oto Kaporta Blog'}
                    className={classes.postImage}
                    loading="lazy"
                  />

                  <div className={classes.postInfo}>
                    <p>{blog?.title}</p>
                    <span>{formatDate(blog.createdAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={classes.ctaCard}>
            <span>Kırşehir As Oto Kaporta</span>
            <h3>Aracınızda Hasar mı Var?</h3>
            <p>
              Kaporta, boya, PDR, sigorta ve kasko hasar onarımı için bizimle
              iletişime geçebilirsiniz.
            </p>
            <a href="tel:+905389118309">Hemen Ara</a>
          </div>
        </aside>
      </section>
    </article>
  );
};

export default BlogDetail;
