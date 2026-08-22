import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMdCheckmark } from 'react-icons/io';
import { Helmet } from 'react-helmet-async';

import { fetchWorkDetail } from '../../../store/work/work-action';

import classes from './WorkDetail.module.css';

const WorkDetail = () => {
  const { titleUrl } = useParams();
  const dispatch = useDispatch();

  const work = useSelector((state) => state.work.workDetail);
  const loading = useSelector((state) => state.work.loading);
  const error = useSelector((state) => state.work.error);

  const [selectedBefore, setSelectedBefore] = useState(0);
  const [selectedAfter, setSelectedAfter] = useState(0);

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
  | ÇALIŞMAYI GETİR
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    window.scrollTo(0, 0);

    setSelectedBefore(0);
    setSelectedAfter(0);

    dispatch(fetchWorkDetail(titleUrl));
  }, [dispatch, titleUrl]);

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <main className={classes.workDetailPage}>
        <div className={classes.stateContainer}>
          <div className={classes.messageBox}>
            Çalışma yükleniyor...
          </div>
        </div>
      </main>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | ERROR
  |--------------------------------------------------------------------------
  */

  if (error) {
    return (
      <main className={classes.workDetailPage}>
        <Helmet>
          <title>Çalışma Bulunamadı | AS Oto Kaporta</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>

        <div className={classes.stateContainer}>
          <div className={classes.messageBox}>
            <h1>Çalışma bulunamadı</h1>

            <p>
              Aradığınız çalışma kaldırılmış veya bağlantı değişmiş olabilir.
            </p>

            <Link
              to="/yaptigimiz-isler"
              className={classes.backButton}
            >
              Yaptığımız İşlere Dön
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!work) {
    return null;
  }

  /*
  |--------------------------------------------------------------------------
  | GÖRSELLER
  |--------------------------------------------------------------------------
  */

  const beforeImages = work.beforeImages || [];
  const afterImages = work.afterImages || [];

  const activeBeforeImage = beforeImages[selectedBefore];
  const activeAfterImage = afterImages[selectedAfter];

  /*
  |--------------------------------------------------------------------------
  | GENEL BİLGİLER
  |--------------------------------------------------------------------------
  */

  const phoneHref = '+905389118309';

  const vehicleName = [
    work.vehicleBrand,
    work.vehicleModel,
  ]
    .filter(Boolean)
    .join(' ');

  /*
  |--------------------------------------------------------------------------
  | SEO
  |--------------------------------------------------------------------------
  */

  const pageTitle =
    work.metaTitle ||
    `${work.title} | AS Oto Hasar Onarım Merkezi Kırşehir`;

  const pageDescription =
    work.metaDescription ||
    `${
      vehicleName ? `${vehicleName} aracında ` : ''
    }gerçekleştirdiğimiz ${getCategoryName(
      work.category
    ).toLocaleLowerCase(
      'tr-TR'
    )} çalışmasını öncesi ve sonrası fotoğraflarıyla inceleyin.`;

  const canonicalUrl =
    `https://asotokaporta.com/yaptigimiz-isler/${work.titleUrl}`;

  const socialImage =
    afterImages?.[0]?.url ||
    beforeImages?.[0]?.url ||
    '';

  /*
  |--------------------------------------------------------------------------
  | STRUCTURED DATA - SERVICE
  |--------------------------------------------------------------------------
  */

  const workSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    '@id': `${canonicalUrl}#service`,

    name: work.title,

    description: pageDescription,

    url: canonicalUrl,

    serviceType: getCategoryName(work.category),

    areaServed: {
      '@type': 'City',
      name: 'Kırşehir',
    },

    provider: {
      '@type': 'AutoRepair',
      '@id': 'https://asotokaporta.com/#business',
      name: 'AS Oto Kaporta',
    },

    ...(socialImage && {
      image: socialImage,
    }),
  };

  /*
  |--------------------------------------------------------------------------
  | STRUCTURED DATA - BREADCRUMB
  |--------------------------------------------------------------------------
  */

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://asotokaporta.com/',
      },

      {
        '@type': 'ListItem',
        position: 2,
        name: 'Yaptığımız İşler',
        item: 'https://asotokaporta.com/yaptigimiz-isler',
      },

      {
        '@type': 'ListItem',
        position: 3,
        name: work.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      {/*
      |--------------------------------------------------------------------------
      | SEO
      |--------------------------------------------------------------------------
      */}

      <Helmet>
        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        {work.metaKeywords && (
          <meta
            name="keywords"
            content={work.metaKeywords}
          />
        )}

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* OPEN GRAPH */}

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
          content="article"
        />

        <meta
          property="og:site_name"
          content="AS Oto Kaporta"
        />

        {socialImage && (
          <meta
            property="og:image"
            content={socialImage}
          />
        )}

        {/* TWITTER */}

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

        {socialImage && (
          <meta
            name="twitter:image"
            content={socialImage}
          />
        )}

        {/* SERVICE SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify(workSchema)}
        </script>

        {/* BREADCRUMB SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <motion.main
        className={classes.workDetailPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {/* HERO */}

        <section className={classes.heroSection}>
          <div className={classes.heroContainer}>
            <div className={classes.breadcrumb}>
              <Link to="/">
                Ana Sayfa
              </Link>

              <span>/</span>

              <Link to="/yaptigimiz-isler">
                Yaptığımız İşler
              </Link>

              <span>/</span>

              <strong>
                {work.title}
              </strong>
            </div>

            <span className={classes.category}>
              {getCategoryName(work.category)}
            </span>

            <h1>{work.title}</h1>

            {(work.vehicleBrand ||
              work.vehicleModel) && (
              <div className={classes.vehicle}>
                {work.vehicleBrand && (
                  <span>
                    {work.vehicleBrand}
                  </span>
                )}

                {work.vehicleBrand &&
                  work.vehicleModel && (
                    <span
                      className={
                        classes.vehicleDot
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
          </div>
        </section>

        {/* BEFORE / AFTER */}

        <section className={classes.gallerySection}>
          <div className={classes.container}>
            <div className={classes.sectionHeading}>
              <span>ONARIM SÜRECİ</span>

              <h2>Öncesi ve Sonrası</h2>

              <p>
                Aracın onarım öncesindeki durumunu ve
                tamamlanan işlem sonrasındaki görünümünü
                karşılaştırabilirsiniz.
              </p>
            </div>

            <div className={classes.comparisonGrid}>
              {/* ÖNCESİ */}

              <div className={classes.galleryColumn}>
                <div className={classes.galleryTitle}>
                  <span className={classes.beforeBadge}>
                    Öncesi
                  </span>

                  <strong>
                    Hasarlı Durum
                  </strong>
                </div>

                {activeBeforeImage ? (
                  <>
                    <div className={classes.mainImage}>
                      <img
                        src={activeBeforeImage.url}
                        alt={`${
                          vehicleName || work.title
                        } onarım öncesi`}
                      />
                    </div>

                    {beforeImages.length > 1 && (
                      <div className={classes.thumbnails}>
                        {beforeImages.map(
                          (image, index) => (
                            <button
                              key={
                                image.public_id ||
                                index
                              }
                              type="button"
                              className={`${
                                classes.thumbnail
                              } ${
                                selectedBefore ===
                                index
                                  ? classes.activeThumbnail
                                  : ''
                              }`}
                              onClick={() =>
                                setSelectedBefore(
                                  index
                                )
                              }
                              aria-label={`Onarım öncesi görsel ${
                                index + 1
                              }`}
                            >
                              <img
                                src={image.url}
                                alt={`${
                                  vehicleName ||
                                  work.title
                                } onarım öncesi ${
                                  index + 1
                                }`}
                                loading="lazy"
                              />
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className={classes.noImage}>
                    Öncesi görseli bulunmuyor.
                  </div>
                )}
              </div>

              {/* SONRASI */}

              <div className={classes.galleryColumn}>
                <div className={classes.galleryTitle}>
                  <span className={classes.afterBadge}>
                    Sonrası
                  </span>

                  <strong>
                    Onarım Sonrası
                  </strong>
                </div>

                {activeAfterImage ? (
                  <>
                    <div className={classes.mainImage}>
                      <img
                        src={activeAfterImage.url}
                        alt={`${
                          vehicleName || work.title
                        } onarım sonrası`}
                      />
                    </div>

                    {afterImages.length > 1 && (
                      <div className={classes.thumbnails}>
                        {afterImages.map(
                          (image, index) => (
                            <button
                              key={
                                image.public_id ||
                                index
                              }
                              type="button"
                              className={`${
                                classes.thumbnail
                              } ${
                                selectedAfter ===
                                index
                                  ? classes.activeThumbnail
                                  : ''
                              }`}
                              onClick={() =>
                                setSelectedAfter(
                                  index
                                )
                              }
                              aria-label={`Onarım sonrası görsel ${
                                index + 1
                              }`}
                            >
                              <img
                                src={image.url}
                                alt={`${
                                  vehicleName ||
                                  work.title
                                } onarım sonrası ${
                                  index + 1
                                }`}
                                loading="lazy"
                              />
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className={classes.noImage}>
                    Sonrası görseli bulunmuyor.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* AÇIKLAMA */}

        <section className={classes.infoSection}>
          <div className={classes.infoContainer}>
            <article className={classes.descriptionCard}>
              <span className={classes.subTitle}>
                YAPILAN İŞLEM
              </span>

              <h2>
                Onarım Hakkında
              </h2>

              <div
                className={classes.description}
                dangerouslySetInnerHTML={{
                  __html: work.desc,
                }}
              />
            </article>

            <aside className={classes.infoCard}>
              <span className={classes.subTitle}>
                ARAÇ & İŞLEM
              </span>

              <h2>
                Çalışma Bilgileri
              </h2>

              <ul>
                {work.vehicleBrand && (
                  <li>
                    <IoMdCheckmark />

                    <div>
                      <span>
                        Marka
                      </span>

                      <strong>
                        {work.vehicleBrand}
                      </strong>
                    </div>
                  </li>
                )}

                {work.vehicleModel && (
                  <li>
                    <IoMdCheckmark />

                    <div>
                      <span>
                        Model
                      </span>

                      <strong>
                        {work.vehicleModel}
                      </strong>
                    </div>
                  </li>
                )}

                <li>
                  <IoMdCheckmark />

                  <div>
                    <span>
                      İşlem
                    </span>

                    <strong>
                      {getCategoryName(
                        work.category
                      )}
                    </strong>
                  </div>
                </li>
              </ul>

              <div className={classes.contactBox}>
                <span>
                  Aracınızda benzer bir hasar mı var?
                </span>

                <strong>
                  Fotoğrafları gönderin, hasarı birlikte
                  değerlendirelim.
                </strong>

                <div className={classes.actions}>
                  <a
                    href={`tel:${phoneHref}`}
                    className={classes.callButton}
                  >
                    Hemen Ara
                  </a>

                  <a
                    href="https://wa.me/905389118309"
                    target="_blank"
                    rel="noreferrer"
                    className={
                      classes.whatsappButton
                    }
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* BACK */}

        <section className={classes.bottomSection}>
          <Link
            to="/yaptigimiz-isler"
            className={classes.allWorksButton}
          >
            ← Tüm Çalışmaları Gör
          </Link>
        </section>
      </motion.main>
    </>
  );
};

export default WorkDetail;