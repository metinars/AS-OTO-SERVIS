import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import classes from './EditBlog.module.css';
import ImageDropzone from '../../../ImageDropzone';

const EditBlog = ({ blogEditData, isSidebar, onSave }) => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('aktif');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords, setMetaKeywords] = useState(''); // ✅ keywords için state

  useEffect(() => {
    if (blogEditData) {
      setTitle(blogEditData.title || '');
      setDesc(blogEditData.desc || '');
      setStatus(blogEditData.status || 'aktif');
      setMetaTitle(blogEditData.metaTitle || '');
      setMetaDescription(blogEditData.metaDescription || '');
      setMetaKeywords(blogEditData.metaKeywords || ''); // ✅ keywords verisi yüklensin

      if (blogEditData.images && blogEditData.images.length > 0) {
        const fileObjects = blogEditData.images.map((image) => ({
          file: null,
          url: image.url,
          public_id: image.public_id,
        }));
        setFiles(fileObjects);
      }
    }
  }, [blogEditData]);

  const handleSave = async () => {
    try {
      const updatedBlogData = {
        ...blogEditData,
        title,
        desc,
        status,
        metaTitle,
        metaDescription,
        metaKeywords, // ✅ keywords backend'e gitsin
        images: files.map((file) => ({
          url: file.url,
          public_id: file.public_id || null,
          file: file.file,
        })),
      };
      await onSave(updatedBlogData);
      alert('Blog başarıyla güncellendi!');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert(
        'Blog güncelleme sırasında bir hata oluştu. Lütfen tekrar deneyin.'
      );
    }
  };

  const handleEditorChange = (content) => {
    setDesc(content);
  };

  return (
    <div
      className={`${classes.blogEditSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <div className={classes.editContainer}>
        <div className={classes.editForm}>
          <form>
            {/* Başlık */}
            <div className={classes.formGroup}>
              <label htmlFor="title">Başlık</label>
              <input
                name="title"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={classes.input}
              />
            </div>

            {/* Meta Başlık */}
            <div className={classes.formGroup}>
              <label htmlFor="metaTitle">Meta Başlık</label>
              <input
                name="metaTitle"
                type="text"
                id="metaTitle"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                className={classes.input}
              />
            </div>

            {/* Meta Açıklama */}
            <div className={classes.formGroup}>
              <label htmlFor="metaDescription">Meta Açıklama</label>
              <textarea
                name="metaDescription"
                id="metaDescription"
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className={classes.input}
                rows="3"
              ></textarea>
            </div>

            {/* Meta Anahtar Kelimeler */}
            <div className={classes.formGroup}>
              <label htmlFor="metaKeywords">Meta Anahtar Kelimeler</label>
              <textarea
                name="metaKeywords"
                id="metaKeywords"
                value={metaKeywords}
                onChange={(e) => setMetaKeywords(e.target.value)}
                className={classes.input}
                rows="3"
              ></textarea>
            </div>

            {/* Açıklama */}
            <div className={classes.formGroup}>
              <label htmlFor="description">Açıklama</label>
              <Editor
                apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
                value={desc}
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

            {/* Görseller */}
            <div className={classes.formGroup}>
              <label htmlFor="images">Görsel</label>
              <ImageDropzone files={files} setFiles={setFiles} />
            </div>

            {/* Durum */}
            <div className={classes.formGroup}>
              <label htmlFor="isActive">Durum</label>
              <select
                id="isActive"
                name="isActive"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={classes.select}
              >
                <option value="aktif">Aktif</option>
                <option value="pasif">Pasif</option>
              </select>
            </div>

            {/* Kaydet Butonu */}
            <button
              type="button"
              className={classes.button}
              onClick={handleSave}
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
