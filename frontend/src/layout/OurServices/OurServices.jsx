import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import classes from './OurServices.module.css';
import { ServiceIcon } from '../../components/UI/ServiceIcons/ServiceIcons';

const services = [
  {
    number: '01',
    icon: 'kaporta',
    title: 'Oto Kaporta',
    content:
      'Kaza, darbe ve sürtme sonrası oluşan kaporta hasarlarında aracınızın orijinal yapısını korumaya odaklı profesyonel onarım hizmeti sunuyoruz.',
    link: '/hizmetler/kirsehir-oto-kaporta',
  },
  {
    number: '02',
    icon: 'pdr',
    title: 'Boyasız Göçük Onarımı PDR',
    content:
      'Boyası zarar görmemiş dolu ve park hasarlarında, aracınızın orijinal boyasını koruyarak PDR yöntemiyle göçük onarımı yapıyoruz.',
    link: '/hizmetler/kirsehir-boyasiz-gocuk-onarimi',
  },
  {
    number: '03',
    icon: 'boya',
    title: 'Oto Boya',
    content:
      'Renk uyumu, yüzey hazırlığı ve kaliteli boya uygulamalarıyla aracınızda meydana gelen boya hasarlarına profesyonel çözümler sunuyoruz.',
    link: '/hizmetler/kirsehir-oto-boya',
  },
  {
    number: '04',
    icon: 'sigorta',
    title: 'Sigorta ve Kasko Hasar Onarımı',
    content:
      'Sigorta ve kasko kapsamındaki araç hasarlarında kaporta, boya ve onarım sürecinde profesyonel destek sağlıyoruz.',
    link: '/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi',
  },
  {
    number: '05',
    icon: 'lokal',
    title: 'Lokal Boya',
    content:
      'Tüm parçayı boyamaya gerek kalmadan, sadece hasarlı bölgeye yönelik lokal boya uygulamalarıyla aracınızın değerini koruyoruz.',
    link: '/hizmetler/kirsehir-lokal-boya',
  },
  {
    number: '06',
    icon: 'dolu',
    title: 'Dolu Hasarı Onarımı',
    content:
      'Dolu sonrası oluşan göçüklerde, uygun durumlarda boyasız göçük onarımı PDR yöntemiyle aracın orijinal boyasını koruyoruz.',
    link: '/hizmetler/kirsehir-dolu-hasari-onarimi',
  },
];

const OurServices = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: 25,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <section className={classes.servicesSection}>
      <div className={classes.sectionHeader}>
        <div className={classes.subTitle}>AS OTO KAPORTA</div>
        <h1>Hizmetlerimiz</h1>
        <p>
          Aracınızın değerini korumak ve güvenli sürüş deneyimi sağlamak için
          profesyonel kaporta, boya ve hasar onarım hizmetleri sunuyoruz.
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={classes.servicesGrid}
      >
        {services.map((service) => (
          <motion.article
            key={service.number}
            variants={item}
            whileHover={{ translateY: -8 }}
            className={classes.serviceCard}
          >
            <span className={classes.cardNumber}>{service.number}</span>

            <div className={classes.cardBody}>
              <div className={classes.iconCircle}>
                <ServiceIcon type={service.icon} />
              </div>

              <div className={classes.cardContent}>
                <h2>{service.title}</h2>
                <span className={classes.line}></span>
                <p>{service.content}</p>

                <Link to={service.link} className={classes.detailLink}>
                  Detaylı Bilgi <span>→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className={classes.contactBar}>
        <div className={classes.contactItem}>
          <div className={classes.contactIcon}>☎</div>
          <div>
            <span>Hemen Bizimle İletişime Geçin</span>
            <a href="tel:+905389118309">0 (538) 911 83 09</a>
          </div>
        </div>

        <div className={classes.divider}></div>

        <div className={classes.contactItem}>
          <div className={classes.contactIcon}>📍</div>
          <div>
            <span>Adresimizi Ziyaret Edin</span>
            <strong>Kılıçözü Sanayi Sitesi, Kırşehir</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
