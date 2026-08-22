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

  const hasImages =
    Array.isArray(blogDetail?.images) &&
    blogDetail.images.length > 0;

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
      {/* HERO */}

      <header className={classes.hero}>
        <div className={classes.imageOverlay}></div>

        <img
          src={hasImages ? blogDetail.images[0]?.url : blog1}
          alt={
            blogDetail?.title
              ? `${blogDetail.title} - AS Oto Kaporta`
              : 'AS Oto Kaporta Blog'
          }
          className={classes.image}
        />

        <div className={classes.heroContent}>
          <span>AS OTO KAPORTA BLOG</span>

          <h1>{blogDetail?.title}</h1>

          <div className={classes.meta}>
            <div>
              <FaUserAlt />

              <span>
                {blogDetail?.uName ||
                  blogDetail?.name ||
                  'AS Oto Kaporta'}
              </span>
            </div>

            <div>
              <FaCalendarAlt />

              <time dateTime={blogDetail?.createdAt}>
                {formatDate(blogDetail?.createdAt)}
              </time>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}

      <section className={classes.content}>
        <main className={classes.mainContent}>
          <div className={classes.articleCard}>
            <div
              className={classes.blogContent}
              dangerouslySetInnerHTML={{
                __html: blogDetail?.desc || '',
              }}
            />
          </div>
        </main>

        {/* SIDEBAR */}

        <aside className={classes.sidebar}>
          <div className={classes.sidebarCard}>
            <h2>Bloglarda Ara</h2>

            <div className={classes.search}>
              <input
                type="text"
                placeholder="Blog ara..."
                className={classes.searchInput}
                aria-label="Bloglarda ara"
              />

              <CiSearch
                className={classes.searchIcon}
                aria-hidden="true"
              />
            </div>
          </div>

          <div className={classes.sidebarCard}>
            <h2>Son Eklenen Bloglar</h2>

            <div className={classes.recentPosts}>
              {activeBlogs.map((blog) => (
                <Link
                  to={`/blog/${blog?.titleUrl}`}
                  key={blog?._id || blog?.titleUrl}
                  className={classes.postItem}
                >
                  <img
                    src={blog?.images?.[0]?.url || blog1}
                    alt={
                      blog?.title
                        ? `${blog.title} blog yazısı`
                        : 'AS Oto Kaporta Blog'
                    }
                    className={classes.postImage}
                    loading="lazy"
                  />

                  <div className={classes.postInfo}>
                    <p>{blog?.title}</p>

                    <time dateTime={blog?.createdAt}>
                      {formatDate(blog?.createdAt)}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={classes.ctaCard}>
            <span>Kırşehir AS Oto Kaporta</span>

            <h2>Aracınızda Hasar mı Var?</h2>

            <p>
              Kaporta, boya, PDR, sigorta ve kasko hasar onarımı için bizimle
              iletişime geçebilirsiniz.
            </p>

            <a href="tel:+905389118309">
              Hemen Ara
            </a>
          </div>
        </aside>
      </section>
    </article>
  );
};

export default BlogDetail;