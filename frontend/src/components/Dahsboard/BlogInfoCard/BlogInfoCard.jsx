import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { ImNewTab } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, fetchBlogs } from '../../../store/blog/blog-action';
import classes from '../../../layout/Dashboard/CardBox/CardBox.module.css';

const BlogInfoCard = () => {
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blog.blogs);

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

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (!Array.isArray(blogData)) {
    return <div>Blog verileri yüklenemedi.</div>;
  }

  const sortedBlogs = [...blogData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const recentBlogs = sortedBlogs.slice(0, 10);

  return (
    <div className={classes.recentOrders}>
      <div className={classes.cardHeader}>
        <h2>Son Eklenen Bloglar</h2>
        <Link to="blog/all" className={classes.btn}>
          Hepsini Gör
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Ad</td>
            <td>Tarih</td>
            <td>Yazar</td>
            <td>Durum</td>
            <td>Düzenle</td>
          </tr>
        </thead>
        <tbody>
          {recentBlogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{new Date(blog.createdAt).toLocaleDateString('tr-TR')}</td>
              <td>{blog.uName}</td>
              <td>
                <span
                  className={`${classes.status} ${
                    blog.status === 'aktif' ? classes.delivered : classes.return
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
                <Link to={`blog/${blog.titleUrl}/edit`}>
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
  );
};

export default BlogInfoCard;
