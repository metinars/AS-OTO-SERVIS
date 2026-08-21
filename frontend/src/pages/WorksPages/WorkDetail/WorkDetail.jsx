import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMdCheckmark } from 'react-icons/io';

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

  useEffect(() => {
    window.scrollTo(0, 0);

    setSelectedBefore(0);
    setSelectedAfter(0);

    dispatch(fetchWorkDetail(titleUrl));
  }, [dispatch, titleUrl]);

  useEffect(() => {
    if (!work) {
      return;
    }

    document.title =
      work.metaTitle ||
      `${work.title} | AS Oto Hasar Onarım Merkezi Kırşehir`;

    const description =
      work.metaDescription ||
      `${work.vehicleBrand || ''} ${
        work.vehicleModel || ''
      } aracında gerçekleştirdiğimiz ${getCategoryName(
        work.category
      ).toLocaleLowerCase('tr-TR')} çalışmasını inceleyin.`;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [work]);

  const getCategoryName = (category) => {
    if (category === 'boyasiz-gocuk') {
      return 'Boyasız Göçük Onarımı';
    }

    if (category === 'kaporta-boya') {
      return 'Kaporta ve Boya';
    }

    return 'Hasar Onarımı';
  };

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

  if (error) {
    return (
      <main className={classes.workDetailPage}>
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

  const beforeImages = work.beforeImages || [];
  const afterImages = work.afterImages || [];

  const activeBeforeImage = beforeImages[selectedBefore];
  const activeAfterImage = afterImages[selectedAfter];

  const phoneHref = '+905389118309';

  return (
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
            <Link to="/">Ana Sayfa</Link>

            <span>/</span>

            <Link to="/yaptigimiz-isler">
              Yaptığımız İşler
            </Link>

            <span>/</span>

            <strong>{work.title}</strong>
          </div>

          <span className={classes.category}>
            {getCategoryName(work.category)}
          </span>

          <h1>{work.title}</h1>

          {(work.vehicleBrand || work.vehicleModel) && (
            <div className={classes.vehicle}>
              {work.vehicleBrand && (
                <span>{work.vehicleBrand}</span>
              )}

              {work.vehicleBrand && work.vehicleModel && (
                <span className={classes.vehicleDot}></span>
              )}

              {work.vehicleModel && (
                <span>{work.vehicleModel}</span>
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
              Aracın onarım öncesindeki durumunu ve tamamlanan işlem
              sonrasındaki görünümünü karşılaştırabilirsiniz.
            </p>
          </div>

          <div className={classes.comparisonGrid}>
            {/* ÖNCESİ */}

            <div className={classes.galleryColumn}>
              <div className={classes.galleryTitle}>
                <span className={classes.beforeBadge}>
                  Öncesi
                </span>

                <strong>Hasarlı Durum</strong>
              </div>

              {activeBeforeImage ? (
                <>
                  <div className={classes.mainImage}>
                    <img
                      src={activeBeforeImage.url}
                      alt={`${work.vehicleBrand} ${work.vehicleModel} onarım öncesi`}
                    />
                  </div>

                  {beforeImages.length > 1 && (
                    <div className={classes.thumbnails}>
                      {beforeImages.map((image, index) => (
                        <button
                          key={image.public_id || index}
                          type="button"
                          className={`${classes.thumbnail} ${
                            selectedBefore === index
                              ? classes.activeThumbnail
                              : ''
                          }`}
                          onClick={() =>
                            setSelectedBefore(index)
                          }
                        >
                          <img
                            src={image.url}
                            alt={`Onarım öncesi ${index + 1}`}
                          />
                        </button>
                      ))}
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

                <strong>Onarım Sonrası</strong>
              </div>

              {activeAfterImage ? (
                <>
                  <div className={classes.mainImage}>
                    <img
                      src={activeAfterImage.url}
                      alt={`${work.vehicleBrand} ${work.vehicleModel} onarım sonrası`}
                    />
                  </div>

                  {afterImages.length > 1 && (
                    <div className={classes.thumbnails}>
                      {afterImages.map((image, index) => (
                        <button
                          key={image.public_id || index}
                          type="button"
                          className={`${classes.thumbnail} ${
                            selectedAfter === index
                              ? classes.activeThumbnail
                              : ''
                          }`}
                          onClick={() =>
                            setSelectedAfter(index)
                          }
                        >
                          <img
                            src={image.url}
                            alt={`Onarım sonrası ${index + 1}`}
                          />
                        </button>
                      ))}
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

            <h2>Onarım Hakkında</h2>

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

            <h2>Çalışma Bilgileri</h2>

            <ul>
              {work.vehicleBrand && (
                <li>
                  <IoMdCheckmark />

                  <div>
                    <span>Marka</span>
                    <strong>{work.vehicleBrand}</strong>
                  </div>
                </li>
              )}

              {work.vehicleModel && (
                <li>
                  <IoMdCheckmark />

                  <div>
                    <span>Model</span>
                    <strong>{work.vehicleModel}</strong>
                  </div>
                </li>
              )}

              <li>
                <IoMdCheckmark />

                <div>
                  <span>İşlem</span>
                  <strong>
                    {getCategoryName(work.category)}
                  </strong>
                </div>
              </li>
            </ul>

            <div className={classes.contactBox}>
              <span>Aracınızda benzer bir hasar mı var?</span>

              <strong>
                Fotoğrafları gönderin, hasarı birlikte değerlendirelim.
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
                  className={classes.whatsappButton}
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
  );
};

export default WorkDetail;