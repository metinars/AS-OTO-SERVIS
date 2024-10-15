import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import classes from './BlogDetail.module.css';
import blog1 from '../../../assets/images/blog/post5-890x664.jpg';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogDetail, fetchBlogs } from '../../../store/blog/blog-action';

const BlogDetail = ({ blogDetail, fetchBlogsList }) => {
  console.log(fetchBlogsList);
  const { titleUrl } = useParams();
  const dispatch = useDispatch();

  const activeBlogs = fetchBlogsList.filter((blog) => blog.status === 'aktif');

  const hasImages = blogDetail?.images && blogDetail.images.length > 0;

  return (
    <div className={classes.container}>
      <div className={classes.blogTopImage}>
        <div className={classes.imageOverlay}></div>
        {hasImages ? (
          <img
            src={blogDetail.images[0]?.url}
            alt={blogDetail?.title}
            className={classes.image}
          />
        ) : (
          <img
            src={blog1}
            alt="Varsayılan Blog Resmi"
            className={classes.image}
          />
        )}
        <h1 className={classes.title}>{blogDetail?.title}</h1>
      </div>
      <div className={classes.content}>
        <div className={classes.mainContent}>
          <h2 className={classes.blogSectionTitle}>{blogDetail?.title}</h2>
          <p
            className={classes.blogContent}
            dangerouslySetInnerHTML={{ __html: blogDetail?.desc || '' }}
          />
          {/* {hasImages && (
            <div>
              {blogDetail.images.map((image) => (
                <img
                  key={image.public_id}
                  src={image.url}
                  alt={blogDetail?.title}
                />
              ))}
            </div>
          )} */}
        </div>
        <div className={classes.sidebar}>
          <h3 className={classes.sidebarTitle}>Ara</h3>
          <div className={classes.search}>
            <input
              type="text"
              placeholder="Ara.."
              className={classes.searchInput}
            />
            <CiSearch className={classes.searchIcon} />
          </div>
          <div className={classes.recentPosts}>
            <h2>Son Eklenen Bloglar</h2>
            <ul>
              {activeBlogs?.map((blogs) => (
                <Link to={`/blog/${blogs?.titleUrl}`} key={blogs?.titleUrl}>
                  <li className={classes.postItem}>
                    <img
                      src={blogs?.images[0]?.url}
                      alt={''}
                      className={classes.postImage}
                    />
                    <div className={classes.postInfo}>
                      <p>{blogs?.title}</p>
                      <span className={classes.postDate}>
                        {new Date(blogs.createdAt).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
