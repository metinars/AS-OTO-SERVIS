import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { fetchWorks } from '../../../store/work/work-action';

import classes from './WorksList.module.css';

const WorksList = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.work.works);
  const loading = useSelector((state) => state.work.loading);
  const error = useSelector((state) => state.work.error);

  const [activeCategory, setActiveCategory] = useState('all');

  /*
  |--------------------------------------------------------------------------
  | SAYFA YÜKLENDİĞİNDE
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchWorks());
  }, [dispatch]);

  /*
  |--------------------------------------------------------------------------
  | SADECE AKTİF İŞLER + KATEGORİ FİLTRESİ
  |--------------------------------------------------------------------------
  */

  const filteredWorks = useMemo(() => {
    if (!Array.isArray(works)) {
      return [];
    }

    return works.filter((work) => {
      if (work.status !== 'aktif') {
        return false;
      }

      if (activeCategory === 'all') {
        return true;
      }

      return work.category === activeCategory;
    });
  }, [works, activeCategory]);

  /*
  |--------------------------------------------------------------------------
  | KATEGORİ ADI
  |--------------------------------------------------------------------------
  */

  const getCategoryName = (category) => {
    if (category === 'boyasiz-gocuk') {
      return 'Boyasız Göçük Onarımı';
    }

    if (category === 'kaporta-boya') {
      return 'Kaporta ve Boya';
    }

    return 'Hasar Onarımı';
  };

  /*
  |--------------------------------------------------------------------------
  | SEO
  |--------------------------------------------------------------------------
  */

  const pageTitle =
    'Yaptığımız İşler | Kaporta, Boya ve Göçük Onarımı | AS Oto Kırşehir';

  const pageDescription =
    "Kırşehir'de gerçekleştirdiğimiz kaporta, oto boya ve boyasız göçük onarımı çalışmalarını öncesi ve sonrası fotoğraflarıyla inceleyin.";

  const canonicalUrl =
    'https://asotokaporta.com/yaptigimiz-isler';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content={pageDescription}
        />

        <meta
          property="og:url"
          content={canonicalUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="AS Oto Kaporta"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content={pageDescription}
        />
      </Helmet>

      <motion.main
        className={classes.worksPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {/* HERO */}

        <section className={classes.heroSection}>
          <div className={classes.heroContent}>
            <span className={classes.subTitle}>
              AS OTO KAPORTA
            </span>

            <h1>Yaptığımız İşler</h1>

            <p>
              Kırşehir'de gerçekleştirdiğimiz kaporta, boya ve
              boyasız göçük onarımı çalışmalarımızdan bazılarını
              öncesi ve sonrası fotoğraflarıyla inceleyebilirsiniz.
            </p>
          </div>
        </section>

        {/* WORKS */}

        <section className={classes.worksSection}>
          <div className={classes.container}>
            {/* FİLTRELER */}

            <div className={classes.filters}>
              <button
                type="button"
                className={`${classes.filterButton} ${
                  activeCategory === 'all'
                    ? classes.activeFilter
                    : ''
                }`}
                onClick={() => setActiveCategory('all')}
              >
                Tümü
              </button>

              <button
                type="button"
                className={`${classes.filterButton} ${
                  activeCategory === 'kaporta-boya'
                    ? classes.activeFilter
                    : ''
                }`}
                onClick={() =>
                  setActiveCategory('kaporta-boya')
                }
              >
                Kaporta ve Boya
              </button>

              <button
                type="button"
                className={`${classes.filterButton} ${
                  activeCategory === 'boyasiz-gocuk'
                    ? classes.activeFilter
                    : ''
                }`}
                onClick={() =>
                  setActiveCategory('boyasiz-gocuk')
                }
              >
                Boyasız Göçük Onarımı
              </button>
            </div>

            {/* LOADING */}

            {loading && (
              <div className={classes.messageBox}>
                Çalışmalar yükleniyor...
              </div>
            )}

            {/* ERROR */}

            {!loading && error && (
              <div className={classes.messageBox}>
                Çalışmalar yüklenirken bir hata oluştu.
              </div>
            )}

            {/* SONUÇ YOK */}

            {!loading &&
              !error &&
              filteredWorks.length === 0 && (
                <div className={classes.messageBox}>
                  Bu kategoride henüz yayınlanmış bir çalışma
                  bulunmuyor.
                </div>
              )}

            {/* İŞLER */}

            {!loading &&
              !error &&
              filteredWorks.length > 0 && (
                <motion.div
                  className={classes.worksGrid}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {filteredWorks.map((work) => {
                    const beforeImage =
                      work.beforeImages?.[0]?.url;

                    const afterImage =
                      work.afterImages?.[0]?.url;

                    const vehicleName = [
                      work.vehicleBrand,
                      work.vehicleModel,
                    ]
                      .filter(Boolean)
                      .join(' ');

                    return (
                      <motion.article
                        key={work._id}
                        className={classes.workCard}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 25,
                          },

                          visible: {
                            opacity: 1,
                            y: 0,
                          },
                        }}
                        whileHover={{
                          y: -7,
                        }}
                      >
                        {/* IMAGES */}

                        <Link
                          to={`/yaptigimiz-isler/${work.titleUrl}`}
                          className={classes.imageLink}
                          aria-label={`${work.title} çalışmasını incele`}
                        >
                          <div
                            className={classes.comparison}
                          >
                            {/* BEFORE */}

                            <div
                              className={classes.imageSide}
                            >
                              {beforeImage ? (
                                <img
                                  src={beforeImage}
                                  alt={`${vehicleName} onarım öncesi`}
                                  loading="lazy"
                                />
                              ) : (
                                <div
                                  className={classes.noImage}
                                >
                                  Görsel Yok
                                </div>
                              )}

                              <span
                                className={
                                  classes.imageLabel
                                }
                              >
                                Öncesi
                              </span>
                            </div>

                            {/* AFTER */}

                            <div
                              className={classes.imageSide}
                            >
                              {afterImage ? (
                                <img
                                  src={afterImage}
                                  alt={`${vehicleName} onarım sonrası`}
                                  loading="lazy"
                                />
                              ) : (
                                <div
                                  className={classes.noImage}
                                >
                                  Görsel Yok
                                </div>
                              )}

                              <span
                                className={
                                  classes.imageLabel
                                }
                              >
                                Sonrası
                              </span>
                            </div>
                          </div>
                        </Link>

                        {/* CONTENT */}

                        <div
                          className={classes.cardContent}
                        >
                          <span
                            className={classes.category}
                          >
                            {getCategoryName(
                              work.category
                            )}
                          </span>

                          <h2>
                            <Link
                              to={`/yaptigimiz-isler/${work.titleUrl}`}
                            >
                              {work.title}
                            </Link>
                          </h2>

                          {(work.vehicleBrand ||
                            work.vehicleModel) && (
                            <div
                              className={
                                classes.vehicleInfo
                              }
                            >
                              {work.vehicleBrand && (
                                <span>
                                  {work.vehicleBrand}
                                </span>
                              )}

                              {work.vehicleBrand &&
                                work.vehicleModel && (
                                  <span
                                    className={
                                      classes.dot
                                    }
                                  ></span>
                                )}

                              {work.vehicleModel && (
                                <span>
                                  {work.vehicleModel}
                                </span>
                              )}
                            </div>
                          )}

                          <Link
                            to={`/yaptigimiz-isler/${work.titleUrl}`}
                            className={classes.detailLink}
                          >
                            Detayları İncele
                            <span>→</span>
                          </Link>
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              )}
          </div>
        </section>
      </motion.main>
    </>
  );
};

export default WorksList;