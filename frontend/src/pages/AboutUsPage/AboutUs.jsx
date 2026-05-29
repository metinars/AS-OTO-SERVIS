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
          <h1 className={classes.aboutus__title}>AS OTO KAPORTA</h1>
        </div>
        <div className={classes.content}>
          <p style={{ fontFamily: 'DM Sans', fontSize: '17px' }}>
            AS OTO KAPORTA olarak otomotiv sektöründeki toplamda 30 yılı aşkın
            deneyimimizi, kaliteli işçilik anlayışımız ve müşteri memnuniyeti
            odaklı hizmet anlayışımız ile birleştiriyoruz. Yıllar boyunca Ankara
            İvedik’te faaliyet göstererek farklı marka ve model araçlar üzerinde
            kapsamlı tecrübe kazandık. Şimdi ise edindiğimiz bu bilgi birikimi
            ve ustalığı Kırşehir’de sürdürerek araç sahiplerine profesyonel
            çözümler sunmaya devam ediyoruz.
          </p>
          <br />
          <p>
            Firmamız; kaporta onarımı, oto boya, hasar onarımı ve boyasız göçük
            düzeltme (PDR) alanlarında hizmet vermektedir. Hafif hasarlardan
            ağır hasarlara kadar birçok farklı onarım sürecinde titizlikle
            çalışıyor, araçlarınızı hem estetik hem de teknik açıdan en iyi
            duruma getirmeyi hedefliyoruz. Her araç bizim için aynı özeni hak
            eder anlayışıyla hareket ediyor, yapılan işlemlerde kaliteli malzeme
            ve profesyonel işçilikten ödün vermiyoruz.
          </p>
          <br />
          <p>
            Ankara İvedik’te uzun yıllar boyunca farklı marka araçlar üzerinde
            çalışmanın kazandırdığı tecrübeyle, günümüzde Kırşehir’de güvenilir
            oto kaporta ve boya hizmeti sunuyoruz. Araçlarınızın orijinal
            görünümünü korumaya önem veriyor, modern onarım yöntemleriyle hızlı
            ve etkili çözümler üretiyoruz. Özellikle boyasız göçük onarımı (PDR)
            işlemlerinde aracın orijinal boyasına zarar vermeden profesyonel
            uygulamalar gerçekleştiriyoruz.
          </p>
          <br />
          <p>
            AS OTO KAPORTA olarak amacımız yalnızca araç onarmak değil,
            müşterilerimizin güvenini kazanmak ve uzun yıllar tercih edilen bir
            işletme olmaktır. Araçlarınızı bize teslim ettiğinizde sürecin her
            aşamasında şeffaf, güvenilir ve çözüm odaklı bir hizmet anlayışıyla
            hareket ediyoruz. Kırşehir’de kaporta, oto boya ve boyasız göçük
            onarımı alanında kaliteli hizmet arayan araç sahipleri için
            deneyimimizle hizmet vermeye devam ediyoruz.
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
