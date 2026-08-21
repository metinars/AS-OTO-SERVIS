import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import ImageDropzone from '../../../ImageDropzone';

import classes from './EditWork.module.css';

const EditWork = ({ workEditData, isSidebar, onSave }) => {
  const [title, setTitle] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [category, setCategory] = useState('kaporta-boya');

  const [desc, setDesc] = useState('');

  const [beforeFiles, setBeforeFiles] = useState([]);
  const [afterFiles, setAfterFiles] = useState([]);

  const [status, setStatus] = useState('aktif');

  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');

  /*
  |--------------------------------------------------------------------------
  | MEVCUT VERİLERİ YÜKLE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!workEditData) {
      return;
    }

    setTitle(workEditData.title || '');
    setVehicleBrand(workEditData.vehicleBrand || '');
    setVehicleModel(workEditData.vehicleModel || '');
    setCategory(workEditData.category || 'kaporta-boya');

    setDesc(workEditData.desc || '');

    setStatus(workEditData.status || 'aktif');

    setMetaTitle(workEditData.metaTitle || '');
    setMetaDescription(workEditData.metaDescription || '');

    if (Array.isArray(workEditData.metaKeywords)) {
      setMetaKeywords(workEditData.metaKeywords.join(', '));
    } else {
      setMetaKeywords(workEditData.metaKeywords || '');
    }

    /*
    |--------------------------------------------------------------------------
    | ÖNCESİ GÖRSELLERİ
    |--------------------------------------------------------------------------
    */

    if (
      workEditData.beforeImages &&
      workEditData.beforeImages.length > 0
    ) {
      const beforeImageObjects = workEditData.beforeImages.map(
        (image) => ({
          file: null,
          url: image.url,
          public_id: image.public_id,
        })
      );

      setBeforeFiles(beforeImageObjects);
    } else {
      setBeforeFiles([]);
    }

    /*
    |--------------------------------------------------------------------------
    | SONRASI GÖRSELLERİ
    |--------------------------------------------------------------------------
    */

    if (
      workEditData.afterImages &&
      workEditData.afterImages.length > 0
    ) {
      const afterImageObjects = workEditData.afterImages.map(
        (image) => ({
          file: null,
          url: image.url,
          public_id: image.public_id,
        })
      );

      setAfterFiles(afterImageObjects);
    } else {
      setAfterFiles([]);
    }
  }, [workEditData]);

  /*
  |--------------------------------------------------------------------------
  | TINY MCE
  |--------------------------------------------------------------------------
  */

  const handleEditorChange = (content) => {
    setDesc(content);
  };

  /*
  |--------------------------------------------------------------------------
  | KAYDET
  |--------------------------------------------------------------------------
  */

  const handleSave = async () => {
    if (!title.trim()) {
      alert('Başlık giriniz.');
      return;
    }

    if (!vehicleBrand.trim()) {
      alert('Araç markasını giriniz.');
      return;
    }

    if (!desc.trim()) {
      alert('Açıklama giriniz.');
      return;
    }

    if (beforeFiles.length === 0) {
      alert('En az bir öncesi fotoğrafı bulunmalıdır.');
      return;
    }

    if (afterFiles.length === 0) {
      alert('En az bir sonrası fotoğrafı bulunmalıdır.');
      return;
    }

    try {
      const updatedWorkData = {
        ...workEditData,

        title,
        vehicleBrand,
        vehicleModel,
        category,

        desc,

        status,

        metaTitle,
        metaDescription,
        metaKeywords,

        beforeImages: beforeFiles.map((image) => ({
          url: image.url,
          public_id: image.public_id || null,
          file: image.file,
        })),

        afterImages: afterFiles.map((image) => ({
          url: image.url,
          public_id: image.public_id || null,
          file: image.file,
        })),
      };

      await onSave(updatedWorkData);

      alert('Çalışma başarıyla güncellendi!');
    } catch (error) {
      console.error('Work güncelleme hatası:', error);

      alert(
        'Çalışma güncellenirken bir hata oluştu. Lütfen tekrar deneyin.'
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (!workEditData) {
    return (
      <div
        className={`${classes.workEditSection} ${
          !isSidebar ? classes.active : ''
        }`}
      >
        Yükleniyor...
      </div>
    );
  }

  return (
    <div
      className={`${classes.workEditSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <div className={classes.editContainer}>
        <div className={classes.editForm}>
          <form>
            {/* BAŞLIK */}

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

            {/* ARAÇ */}

            <div className={classes.vehicleRow}>
              <div className={classes.formGroup}>
                <label htmlFor="vehicleBrand">
                  Araç Markası
                </label>

                <input
                  name="vehicleBrand"
                  type="text"
                  id="vehicleBrand"
                  value={vehicleBrand}
                  onChange={(e) =>
                    setVehicleBrand(e.target.value)
                  }
                  className={classes.input}
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="vehicleModel">
                  Araç Modeli
                </label>

                <input
                  name="vehicleModel"
                  type="text"
                  id="vehicleModel"
                  value={vehicleModel}
                  onChange={(e) =>
                    setVehicleModel(e.target.value)
                  }
                  className={classes.input}
                />
              </div>
            </div>

            {/* KATEGORİ */}

            <div className={classes.formGroup}>
              <label htmlFor="category">Kategori</label>

              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={classes.select}
              >
                <option value="kaporta-boya">
                  Kaporta ve Boya
                </option>

                <option value="boyasiz-gocuk">
                  Boyasız Göçük Onarımı
                </option>
              </select>
            </div>

            {/* AÇIKLAMA */}

            <div className={classes.formGroup}>
              <label htmlFor="description">Açıklama</label>

              <Editor
                apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
                value={desc}
                onEditorChange={handleEditorChange}
                init={{
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

            {/* ÖNCESİ GÖRSELLER */}

            <div className={classes.formGroup}>
              <label>Öncesi Fotoğrafları</label>

              <ImageDropzone
                files={beforeFiles}
                setFiles={setBeforeFiles}
              />
            </div>

            {/* SONRASI GÖRSELLER */}

            <div className={classes.formGroup}>
              <label>Sonrası Fotoğrafları</label>

              <ImageDropzone
                files={afterFiles}
                setFiles={setAfterFiles}
              />
            </div>

            {/* META BAŞLIK */}

            <div className={classes.formGroup}>
              <label htmlFor="metaTitle">Meta Başlık</label>

              <input
                name="metaTitle"
                type="text"
                id="metaTitle"
                value={metaTitle}
                onChange={(e) =>
                  setMetaTitle(e.target.value)
                }
                className={classes.input}
              />
            </div>

            {/* META AÇIKLAMA */}

            <div className={classes.formGroup}>
              <label htmlFor="metaDescription">
                Meta Açıklama
              </label>

              <textarea
                name="metaDescription"
                id="metaDescription"
                value={metaDescription}
                onChange={(e) =>
                  setMetaDescription(e.target.value)
                }
                className={classes.input}
                rows="3"
              />
            </div>

            {/* META KEYWORDS */}

            <div className={classes.formGroup}>
              <label htmlFor="metaKeywords">
                Meta Anahtar Kelimeler
              </label>

              <textarea
                name="metaKeywords"
                id="metaKeywords"
                value={metaKeywords}
                onChange={(e) =>
                  setMetaKeywords(e.target.value)
                }
                className={classes.input}
                rows="3"
                placeholder="kırşehir kaporta, oto boya, boyasız göçük"
              />
            </div>

            {/* DURUM */}

            <div className={classes.formGroup}>
              <label htmlFor="status">Durum</label>

              <select
                id="status"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={classes.select}
              >
                <option value="aktif">Aktif</option>
                <option value="pasif">Pasif</option>
              </select>
            </div>

            {/* KAYDET */}

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

export default EditWork;