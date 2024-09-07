import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { ImNewTab } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { deleteBlog, fetchBlogs } from '../../../../store/blog/blog-action';

import classes from './BlogList.module.css';

const BlogList = ({ blogs, isSidebar, message }) => {
  const dispatch = useDispatch();

  const deleteBlogHandle = async (id) => {
    if (window.confirm('Bu blogu silmek istediğinizden emin misiniz?')) {
      try {
        await dispatch(deleteBlog(id));
        dispatch(fetchBlogs());
      } catch (error) {
        console.error('Silme işlemi başarısız:', error);
      }
    }
  };

  if (!blogs) {
    return (
      <div
        className={`${classes.blogListSection} ${
          !isSidebar ? classes.active : ''
        }`}
      >
        Yükleniyor
      </div>
    );
  }

  if (blogs?.length == 0) {
    return (
      <div
        className={`${classes.blogListSection} ${
          !isSidebar ? classes.active : ''
        }`}
      >
        {message}
      </div>
    );
  }

  return (
    <div
      className={`${classes.blogListSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      {message}
      <div className={classes.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Tarih</th>
              <th>Yazar</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog?._id}>
                <td>{blog.title}</td>
                <td>{new Date(blog.createdAt).toLocaleDateString('tr-TR')}</td>
                <td>{blog.uName}</td>
                <td>
                  <span
                    className={`${classes.status} ${
                      blog.status == 'aktif'
                        ? classes.delivered
                        : classes.return
                    } `}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className={classes.editIcons}>
                  <Link
                    target="_blank"
                    to={`${import.meta.env.VITE_REACT_APP_CLINET_URL}/blog/${
                      blog.titleUrl
                    }`}
                  >
                    <span>
                      <ImNewTab />
                    </span>
                  </Link>
                  <Link to={`/admin/blog/${blog.titleUrl}/edit`}>
                    <span>
                      <CiEdit />
                    </span>
                  </Link>
                  <span onClick={() => deleteBlogHandle(blog._id)}>
                    <MdDelete />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
