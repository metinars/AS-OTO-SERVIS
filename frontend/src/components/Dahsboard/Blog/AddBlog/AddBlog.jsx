import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { addBlog } from '../../../../store/blog/blog-action';
import classes from './AddBlog.module.css';
import BlogStatusMessage from '../../../UI/StatusMessages/BlogStatusMessage';

const AddBlog = () => {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const userId = useSelector((state) => state.auth.user?.id);
  const userName = useSelector((state) => state.auth.user?.username);
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.blog.loading);

  const [blogData, setBlogData] = useState({
    title: '',
    desc: '',
    images: [],
    isActive: 'true',
    metaTitle: '', // eklendi
    metaDescription: '', // eklendi
    metaKeywords: '', // eklendi
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

  const handleEditorChange = (content) => {
    setBlogData((prev) => ({ ...prev, desc: content }));
  };

  const handleSubmit = () => {
    const blogWithUserData = {
      ...blogData,
      uId: userId,
      uName: userName,
    };
    dispatch(addBlog(blogWithUserData)).finally(() => {});
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
          <label htmlFor="metaTitle">Meta Başlık</label>
          <input
            name="metaTitle"
            type="text"
            id="metaTitle"
            value={blogData.metaTitle}
            onChange={blogHandle}
            className={classes.input}
            placeholder="SEO için meta başlık"
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="metaDescription">Meta Açıklama</label>
          <textarea
            name="metaDescription"
            id="metaDescription"
            value={blogData.metaDescription}
            onChange={blogHandle}
            className={classes.input}
            placeholder="SEO için meta açıklama"
            rows={3}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="metaKeywords">Anahtar Kelimeler</label>
          <input
            name="metaKeywords"
            type="text"
            id="metaKeywords"
            value={blogData.metaKeywords}
            onChange={blogHandle}
            className={classes.input}
            placeholder="Virgülle ayrılmış anahtar kelimeler"
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="description">Açıklama</label>
          <Editor
            apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
            value={blogData.desc}
            onEditorChange={handleEditorChange}
            init={{
              selector: 'textarea#basic-example',
              height: 500,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
            }}
            className={classes.editor}
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
        <button
          type="button"
          onClick={handleSubmit}
          className={classes.button}
          disabled={loading}
        >
          {loading ? 'Blog Ekleniyor...' : 'Kaydet'}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
