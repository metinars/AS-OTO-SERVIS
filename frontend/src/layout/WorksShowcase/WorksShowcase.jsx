import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { fetchWorks } from '../../store/work/work-action';

import classes from './WorksShowcase.module.css';

const WorksShowcase = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.work.works);
  const loading = useSelector((state) => state.work.loading);

  useEffect(() => {
    dispatch(fetchWorks());
  }, [dispatch]);

  /*
  |--------------------------------------------------------------------------
  | AKTİF VE SON EKLENEN ÇALIŞMALAR
  |--------------------------------------------------------------------------
  */

  const latestWorks = (works || [])
    .filter((work) => work.status === 'aktif')
    .slice(0, 6);

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
  | ANİMASYON
  |--------------------------------------------------------------------------
  */

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };

  /*
  |--------------------------------------------------------------------------
  | LOADING
  |--------------------------------------------------------------------------
  */

  if (loading && latestWorks.length === 0) {
    return (
      <section className={classes.worksSection}>
        <div className={classes.container}>
          <div className={classes.loading}>
            Çalışmalar yükleniyor...
          </div>
        </div>
      </section>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | HİÇ ÇALIŞMA YOKSA BÖLÜMÜ GÖSTERME
  |--------------------------------------------------------------------------
  */

  if (latestWorks.length === 0) {
    return null;
  }

  return (
    <section className={classes.worksSection}>
      <div className={classes.container}>
        {/* BAŞLIK */}

        <div className={classes.sectionHeader}>
          <span className={classes.subTitle}>
            AS OTO HASAR ONARIM MERKEZİ
          </span>

          <h2>Son Yaptığımız İşler</h2>

          <p>
            Kaporta, boya ve boyasız göçük onarımı çalışmalarımızdan bazılarını
            öncesi ve sonrası fotoğraflarıyla inceleyebilirsiniz.
          </p>
        </div>

        {/* ÇALIŞMALAR */}

        <motion.div
          className={classes.worksGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {latestWorks.map((work) => {
            const beforeImage = work.beforeImages?.[0]?.url;
            const afterImage = work.afterImages?.[0]?.url;

            return (
              <motion.article
                key={work._id}
                className={classes.workCard}
                variants={cardVariants}
              >
                <Link
                  to={`/yaptigimiz-isler/${work.titleUrl}`}
                  className={classes.cardLink}
                >
                  {/* GÖRSELLER */}

                  <div className={classes.images}>
                    <div className={classes.imageBox}>
                      {beforeImage ? (
                        <img
                          src={beforeImage}
                          alt={`${work.vehicleBrand || ''} ${
                            work.vehicleModel || ''
                          } onarım öncesi`}
                          loading="lazy"
                        />
                      ) : (
                        <div className={classes.noImage}>
                          Görsel Yok
                        </div>
                      )}

                      <span className={classes.beforeLabel}>
                        Öncesi
                      </span>
                    </div>

                    <div className={classes.imageBox}>
                      {afterImage ? (
                        <img
                          src={afterImage}
                          alt={`${work.vehicleBrand || ''} ${
                            work.vehicleModel || ''
                          } onarım sonrası`}
                          loading="lazy"
                        />
                      ) : (
                        <div className={classes.noImage}>
                          Görsel Yok
                        </div>
                      )}

                      <span className={classes.afterLabel}>
                        Sonrası
                      </span>
                    </div>
                  </div>

                  {/* İÇERİK */}

                  <div className={classes.cardContent}>
                    <div className={classes.category}>
                      {getCategoryName(work.category)}
                    </div>

                    <h3>{work.title}</h3>

                    {(work.vehicleBrand || work.vehicleModel) && (
                      <div className={classes.vehicle}>
                        {work.vehicleBrand && (
                          <span>{work.vehicleBrand}</span>
                        )}

                        {work.vehicleBrand &&
                          work.vehicleModel && (
                            <span
                              className={classes.vehicleDot}
                            ></span>
                          )}

                        {work.vehicleModel && (
                          <span>{work.vehicleModel}</span>
                        )}
                      </div>
                    )}

                    <div className={classes.detailLink}>
                      Çalışmayı İncele
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* TÜM ÇALIŞMALAR */}

        <div className={classes.bottomAction}>
          <Link
            to="/yaptigimiz-isler"
            className={classes.allWorksButton}
          >
            Tüm Çalışmalarımızı Gör
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksShowcase;