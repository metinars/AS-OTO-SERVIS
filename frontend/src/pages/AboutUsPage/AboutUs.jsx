import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import classes from './AboutUs.module.css';

const AboutUs = () => {
  const phoneNumber = '+905389118309';

  const mapsUrl =
    'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <Helmet>
        <title>Hakkımızda | Kırşehir As Oto Kaporta</title>
        <meta
          name="description"
          content="As Oto Kaporta, 30 yılı aşkın tecrübesiyle Kırşehir’de kaporta onarımı, oto boya, PDR ve sigorta hasar onarımı hizmetleri sunar."
        />
        <meta
          name="keywords"
          content="as oto kaporta, kırşehir kaporta, kırşehir kaportacı, kırşehir oto boya, kırşehir pdr, kırşehir hasar onarım"
        />
        <link rel="canonical" href="https://asotokaporta.com/hakkimizda" />
      </Helmet>

      <motion.section
        id="hakkimizda"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classes.page}
      >
        <BreadCrumbs home="Ana Sayfa" current="Hakkımızda" />

        <section className={classes.hero}>
          <div className={classes.heroContent}>
            <span>AS OTO KAPORTA</span>
            <h1>Kırşehir’de Güvenilir Kaporta ve Hasar Onarım Merkezi</h1>
            <p>
              30 yılı aşkın kaporta ve hasar onarım tecrübemizi, Kırşehir’de
              titiz işçilik ve müşteri memnuniyeti odaklı hizmet anlayışıyla
              sürdürüyoruz.
            </p>

            <div className={classes.heroButtons}>
              <button type="button" onClick={handleCallClick}>
                Hemen Ara
              </button>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Yol Tarifi Al
              </a>
            </div>
          </div>

          <div className={classes.heroCard}>
            <strong>30+</strong>
            <span>Yıllık Tecrübe</span>
            <p>Kaporta, oto boya, PDR ve sigorta hasar onarımı.</p>
          </div>
        </section>

        <section className={classes.contentSection}>
          <div className={classes.contentGrid}>
            <div className={classes.left}>
              <span className={classes.sectionTag}>Biz Kimiz?</span>
              <h2>As Oto Kaporta Hakkında</h2>
              <p>
                As Oto Kaporta olarak otomotiv sektöründeki toplamda 30 yılı
                aşkın deneyimimizi, kaliteli işçilik ve güvenilir hizmet
                anlayışıyla birleştiriyoruz. Uzun yıllar Ankara İvedik’te farklı
                marka ve model araçlar üzerinde kazandığımız tecrübeyi, bugün
                Kırşehir’de araç sahiplerine profesyonel çözümler sunmak için
                kullanıyoruz.
              </p>

              <p>
                İşletmemizde kaporta onarımı, oto boya, sigorta ve kasko hasar
                onarımları, lokal boya ve boyasız göçük onarımı (PDR) hizmetleri
                sunuyoruz. Her aracı yalnızca tamir edilmesi gereken bir araç
                olarak değil, sahibinin bize emanet ettiği değerli bir varlık
                olarak görüyoruz.
              </p>
            </div>

            <div className={classes.rightBox}>
              <h3>Hizmet Anlayışımız</h3>
              <ul>
                <li>Aracı kendi aracımız gibi değerlendirmek</li>
                <li>Gereksiz parça değişiminden kaçınmak</li>
                <li>Orijinal yapıyı mümkün olduğunca korumak</li>
                <li>Şeffaf, güvenilir ve çözüm odaklı ilerlemek</li>
              </ul>
            </div>
          </div>

          <div className={classes.infoCards}>
            <div>
              <h3>Kaporta Onarımı</h3>
              <p>
                Kaza, sürtme ve darbe sonrası oluşan kaporta hasarlarında doğru
                onarım yöntemini belirleyerek titiz işçilik sunuyoruz.
              </p>
            </div>

            <div>
              <h3>Oto Boya</h3>
              <p>
                Boya işlemlerinde renk uyumu, yüzey hazırlığı ve kaliteli
                uygulama ile aracın görünümünü korumayı hedefliyoruz.
              </p>
            </div>

            <div>
              <h3>Boyasız Göçük Onarımı PDR</h3>
              <p>
                Boyası zarar görmemiş dolu ve park hasarlarında aracın orijinal
                boyasını koruyarak PDR yöntemiyle onarım yapıyoruz.
              </p>
            </div>

            <div>
              <h3>Sigorta ve Kasko Hasar Onarımı</h3>
              <p>
                Sigorta ve kasko kapsamındaki hasar onarımlarında araç sahipleri
                için süreci daha anlaşılır ve kolay hale getiriyoruz.
              </p>
            </div>
          </div>

          <div className={classes.storyBox}>
            <span className={classes.sectionTag}>Tecrübe ve Güven</span>
            <h2>Ankara İvedik’ten Kırşehir’e Uzanan Ustalık</h2>
            <p>
              Ankara İvedik’te uzun yıllar boyunca farklı araçlar üzerinde
              çalışmanın kazandırdığı tecrübe ile bugün Kırşehir’de kaporta, oto
              boya ve hasar onarım hizmetleri sunuyoruz. Amacımız yalnızca
              hasarı düzeltmek değil; aracın değerini, görünümünü ve sahibinin
              güvenini koruyan doğru çözümler üretmektir.
            </p>

            <p>
              Bu nedenle her işlem öncesinde hasarı dikkatle inceliyor, mümkün
              olan durumlarda parçayı orijinal haliyle onarmayı tercih ediyoruz.
              Güvenlik açısından risk taşıyan durumlarda ise en doğru onarım
              yöntemini açık şekilde müşterimize anlatıyoruz.
            </p>
          </div>

          <div className={classes.ctaBox}>
            <div>
              <h2>Kırşehir’de Kaporta ve Hasar Onarımı İçin Bize Ulaşın</h2>
              <p>
                Aracınızdaki hasarı göstermek, ön değerlendirme almak veya yol
                tarifi için bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className={classes.ctaButtons}>
              <button type="button" onClick={handleCallClick}>
                Hemen Ara
              </button>
              <NavLink to="/hizmetlerimiz">Hizmetleri İncele</NavLink>
            </div>
          </div>
        </section>
      </motion.section>
    </>
  );
};

export default AboutUs;
