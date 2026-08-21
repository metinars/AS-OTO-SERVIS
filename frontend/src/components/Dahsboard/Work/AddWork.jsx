import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';

import { addWork } from '../../../store/work/work-action';

import classes from './AddWork.module.css';

const AddWork = () => {
  const dispatch = useDispatch();

  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  const loading = useSelector((state) => state.work.loading);

  const [workData, setWorkData] = useState({
    title: '',
    vehicleBrand: '',
    vehicleModel: '',
    category: 'kaporta-boya',

    desc: '',

    beforeImages: [],
    afterImages: [],

    status: 'aktif',

    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
  });

  /*
  |--------------------------------------------------------------------------
  | INPUT CHANGE
  |--------------------------------------------------------------------------
  */

  const workHandle = (e) => {
    const { name, value, files } = e.target;

    /*
    |--------------------------------------------------------------------------
    | ÖNCESİ FOTOĞRAFLARI
    |--------------------------------------------------------------------------
    */

    if (name === 'beforeImages') {
      const filesArray = Array.from(files);
      const imagesArray = [];

      filesArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            imagesArray.push(reader.result);

            setWorkData((prev) => ({
              ...prev,
              beforeImages: [...imagesArray],
            }));
          }
        };

        reader.readAsDataURL(file);
      });

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | SONRASI FOTOĞRAFLARI
    |--------------------------------------------------------------------------
    */

    if (name === 'afterImages') {
      const filesArray = Array.from(files);
      const imagesArray = [];

      filesArray.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            imagesArray.push(reader.result);

            setWorkData((prev) => ({
              ...prev,
              afterImages: [...imagesArray],
            }));
          }
        };

        reader.readAsDataURL(file);
      });

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | NORMAL INPUT
    |--------------------------------------------------------------------------
    */

    setWorkData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | TINY MCE
  |--------------------------------------------------------------------------
  */

  const handleEditorChange = (content) => {
    setWorkData((prev) => ({
      ...prev,
      desc: content,
    }));
  };

  /*
  |--------------------------------------------------------------------------
  | SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async () => {
    if (!workData.title.trim()) {
      alert('Başlık giriniz.');
      return;
    }

    if (!workData.vehicleBrand.trim()) {
      alert('Araç markasını giriniz.');
      return;
    }

    if (!workData.desc.trim()) {
      alert('Açıklama giriniz.');
      return;
    }

    if (workData.beforeImages.length === 0) {
      alert('En az bir öncesi fotoğrafı ekleyiniz.');
      return;
    }

    if (workData.afterImages.length === 0) {
      alert('En az bir sonrası fotoğrafı ekleyiniz.');
      return;
    }

    await dispatch(addWork(workData));
  };

  return (
    <div
      className={`${classes.workAddSection} ${
        !isSidebar ? classes.active : ''
      }`}
    >
      <form className={classes.form}>
        {/* BAŞLIK */}

        <div className={classes.formGroup}>
          <label htmlFor="title">Başlık</label>

          <input
            name="title"
            type="text"
            id="title"
            value={workData.title}
            onChange={workHandle}
            className={classes.input}
            placeholder="Örn: Fiat Egea Boyasız Göçük Onarımı"
          />
        </div>

        {/* ARAÇ */}

        <div className={classes.vehicleRow}>
          <div className={classes.formGroup}>
            <label htmlFor="vehicleBrand">Araç Markası</label>

            <input
              name="vehicleBrand"
              type="text"
              id="vehicleBrand"
              value={workData.vehicleBrand}
              onChange={workHandle}
              className={classes.input}
              placeholder="Fiat"
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="vehicleModel">Araç Modeli</label>

            <input
              name="vehicleModel"
              type="text"
              id="vehicleModel"
              value={workData.vehicleModel}
              onChange={workHandle}
              className={classes.input}
              placeholder="Egea"
            />
          </div>
        </div>

        {/* KATEGORİ */}

        <div className={classes.formGroup}>
          <label htmlFor="category">Kategori</label>

          <select
            id="category"
            name="category"
            value={workData.category}
            onChange={workHandle}
            className={classes.select}
          >
            <option value="kaporta-boya">Kaporta ve Boya</option>

            <option value="boyasiz-gocuk">
              Boyasız Göçük Onarımı
            </option>
          </select>
        </div>

        {/* AÇIKLAMA */}

        <div className={classes.formGroup}>
          <label>Açıklama</label>

          <Editor
            apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
            value={workData.desc}
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
          />
        </div>

        {/* ÖNCESİ */}

        <div className={classes.formGroup}>
          <label htmlFor="beforeImages">
            Öncesi Fotoğrafları
          </label>

          <input
            type="file"
            id="beforeImages"
            name="beforeImages"
            accept="image/*"
            onChange={workHandle}
            multiple
            className={classes.input}
          />

          {workData.beforeImages.length > 0 && (
            <span className={classes.imageCount}>
              {workData.beforeImages.length} fotoğraf seçildi
            </span>
          )}
        </div>

        {/* SONRASI */}

        <div className={classes.formGroup}>
          <label htmlFor="afterImages">
            Sonrası Fotoğrafları
          </label>

          <input
            type="file"
            id="afterImages"
            name="afterImages"
            accept="image/*"
            onChange={workHandle}
            multiple
            className={classes.input}
          />

          {workData.afterImages.length > 0 && (
            <span className={classes.imageCount}>
              {workData.afterImages.length} fotoğraf seçildi
            </span>
          )}
        </div>

        {/* SEO */}

        <div className={classes.formGroup}>
          <label htmlFor="metaTitle">Meta Başlık</label>

          <input
            name="metaTitle"
            type="text"
            id="metaTitle"
            value={workData.metaTitle}
            onChange={workHandle}
            className={classes.input}
            placeholder="SEO için meta başlık"
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="metaDescription">
            Meta Açıklama
          </label>

          <textarea
            name="metaDescription"
            id="metaDescription"
            value={workData.metaDescription}
            onChange={workHandle}
            className={classes.input}
            placeholder="SEO için meta açıklama"
            rows={3}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="metaKeywords">
            Anahtar Kelimeler
          </label>

          <input
            name="metaKeywords"
            type="text"
            id="metaKeywords"
            value={workData.metaKeywords}
            onChange={workHandle}
            className={classes.input}
            placeholder="kırşehir kaporta, boyasız göçük, fiat egea"
          />
        </div>

        {/* DURUM */}

        <div className={classes.formGroup}>
          <label htmlFor="status">Durum</label>

          <select
            id="status"
            name="status"
            value={workData.status}
            onChange={workHandle}
            className={classes.select}
          >
            <option value="aktif">Aktif</option>
            <option value="pasif">Pasif</option>
          </select>
        </div>

        {/* KAYDET */}

        <button
          type="button"
          onClick={handleSubmit}
          className={classes.button}
          disabled={loading}
        >
          {loading ? 'İş Ekleniyor...' : 'Kaydet'}
        </button>
      </form>
    </div>
  );
};

export default AddWork;