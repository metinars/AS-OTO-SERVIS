import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import aboutusImage from '../../assets/images/hasarli-araba.jpg';
import classes from './AboutUs.module.css';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'Hakkımızda | AS Oto Kaporta';
    window.scrollTo(0, 0);
  }, []);
  const phoneNumber = '(542) 744 26 28';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <motion.section
      id="hakkimizda"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BreadCrumbs home={'Ana Sayfa'} current={'Hakkımızda'} />
      <div className={classes.aboutus__section}>
        <div className={classes.aboutus__title}>
          <h1
            style={{
              color: '#FE600A',
              fontFamily: 'Barlow Condensed',
              fontSize: '57px',
            }}
          >
            AS OTO KAPORTA
          </h1>
        </div>
        <div className={classes.content}>
          <p style={{ fontFamily: 'DM Sans', fontSize: '17px' }}>
            As Oto Kaporta olarak, otomotiv sektöründeki 30 yıllık deneyimimizle
            gurur duyuyoruz. Her marka araç üzerinde kazandığımız derin tecrübe
            ve uzmanlığımızla, müşterilerimize güvenilir ve kaliteli hizmet
            sunma misyonumuzu sürdürüyoruz. Müşterilerimizin beklentilerini
            karşılamak ve hatta aşmak için her zaman en iyisini yapmaya
            kararlıyız. Firmamız, araçlarını teslim ettiğinizde size huzur ve
            memnuniyet garantisi sağlar. Çünkü biz, her işimizi titizlikle ve
            özenle gerçekleştirir, araçlarınızı ilk günkü gibi parlak ve
            kusursuz bir şekilde size teslim ederiz. Sizin için güvenilir bir iş
            ortağı olmak, bizim için bir ayrıcalıktır ve bu sorumluluğun
            bilinciyle hareket ediyoruz.
          </p>
        </div>
        <button className={classes.aboutus__button} onClick={handleCallClick}>
          Hemen Ara
        </button>
      </div>
    </motion.section>
  );
};

export default AboutUs;
