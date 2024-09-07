import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { addBlog } from '../../../../store/blog/blog-action';
import classes from './AddBlog.module.css';
import 'react-quill/dist/quill.snow.css';
import StatusMessage from '../../../UI/StatusMessage/StatusMessage';

const AddBlog = () => {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const userId = useSelector((state) => state.auth.user?.id);
  const userName = useSelector((state) => state.auth.user?.username);
  const dispatch = useDispatch();

  const [blogData, setBlogData] = useState({
    title: '',
    desc: '',
    images: [],
    isActive: 'true',
  });
  const blogHandle = (e) => {
    const { name, value, files } = e.target;

    if (name === 'images') {
      const filesArray = Array.from(files);

      const imagesArray = [];

      filesArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            imagesArray.push(reader.result);
            setBlogData((prev) => ({ ...prev, images: imagesArray }));
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      setBlogData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleQuillChange = (value) => {
    setBlogData((prev) => ({ ...prev, desc: value }));
  };

  const handleSubmit = () => {
    const blogWithUserData = {
      ...blogData,
      uId: userId,
      uName: userName,
    };
    dispatch(addBlog(blogWithUserData));
  };

  return (
    <div
      className={`${classes.blogAddSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="title">Başlık</label>
          <input
            name="title"
            type="text"
            id="title"
            value={blogData.title}
            onChange={blogHandle}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="description">Açıklama</label>
          <ReactQuill
            value={blogData.desc}
            id="desc"
            onChange={handleQuillChange}
            className={classes.quill}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Görseller</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={blogHandle}
            multiple
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="isActive">Durum</label>
          <select
            id="isActive"
            name="isActive"
            value={blogData.isActive.toString()}
            onChange={blogHandle}
            className={classes.select}
          >
            <option value="true">Aktif</option>
            <option value="false">Pasif</option>
          </select>
        </div>
        <button type="button" onClick={handleSubmit} className={classes.button}>
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
