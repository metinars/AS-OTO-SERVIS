import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import BreadCrumbs from '../../layout/BreadCrumbs';
import ContactForm from '../../layout/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle =
    'İletişim ve Yol Tarifi | AS Oto Kaporta Kırşehir';

  const pageDescription =
    "Kırşehir Kılıçözü Sanayi Sitesi'ndeki AS Oto Kaporta'ya ulaşın. Kaporta, oto boya ve boyasız göçük onarımı için telefon, WhatsApp ve Google Maps yol tarifi.";

  const canonicalUrl =
    'https://asotokaporta.com/iletisim';

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
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <BreadCrumbs
          home="Ana Sayfa"
          current="İletişim"
        />

        <ContactForm />
      </motion.div>
    </>
  );
};

export default Contact;