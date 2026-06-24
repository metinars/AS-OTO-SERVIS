import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { FaArrowDown, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import images from '../../assets/images/home/slider/slider.js';
import classes from './WrapSlider.module.css';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const WrapSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const phoneHref = '+905389118309';

  const mapsUrl =
    'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const scrollToServices = () => {
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={classes.sliderContainer}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          alt="Kırşehir As Oto Kaporta hasar onarım hizmetleri"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          className={classes.sliderImage}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div className={classes.overlay}></div>

      <button
        type="button"
        aria-label="Sonraki görsel"
        className={classes.next}
        onClick={() => paginate(1)}
      >
        {'›'}
      </button>

      <button
        type="button"
        aria-label="Önceki görsel"
        className={classes.prev}
        onClick={() => paginate(-1)}
      >
        {'‹'}
      </button>

      <div className={classes.heroContent}>
        <span className={classes.badge}>Kırşehir Hasar Onarım Merkezi</span>

        <h1>Kırşehir Oto Kaporta, Boyasız Göçük Onarımı ve Oto Boya Hizmeti</h1>

        <p>
          Kaporta onarımı, oto boya, PDR, lokal boya, dolu hasarı, sigorta ve
          kasko hasar onarımlarında aracınızı kendi aracımız gibi
          değerlendiriyoruz.
        </p>

        <div className={classes.heroActions}>
          <a href={`tel:${phoneHref}`} className={classes.primaryBtn}>
            <FaPhoneAlt />
            Hemen Ara
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={classes.secondaryBtn}
          >
            <FaMapMarkerAlt />
            Yol Tarifi Al
          </a>

          <NavLink to="/hizmetlerimiz" className={classes.lightBtn}>
            Hizmetleri İncele
          </NavLink>
        </div>

        {/* <div className={classes.trustBar}>
          <div>
            <strong>30+</strong>
            <span>Yıllık Tecrübe</span>
          </div>
          <div>
            <strong>PDR</strong>
            <span>Boyasız Göçük Onarımı</span>
          </div>
          <div>
            <strong>Kasko</strong>
            <span>Sigorta Hasar Onarımı</span>
          </div>
        </div> */}

        <button
          type="button"
          className={classes.scrollDown}
          onClick={scrollToServices}
        >
          Hizmetlere Git <FaArrowDown />
        </button>
      </div>
    </section>
  );
};

export default WrapSlider;
