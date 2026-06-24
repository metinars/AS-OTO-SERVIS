import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import OurServices from '../../layout/OurServices';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Kırşehir Oto Kaporta Hizmetleri | Kaporta, Boya, PDR ve Sigorta Hasar
          Onarımı
        </title>
        <meta
          name="description"
          content="As Oto Kaporta Kırşehir’de kaporta onarımı, oto boya, PDR, lokal boya, dolu hasarı, sigorta ve kasko hasar onarımı hizmetleri sunar."
        />
        <meta
          name="keywords"
          content="kırşehir kaporta, kırşehir kaportacı, kırşehir oto kaporta, kırşehir oto boya, kırşehir pdr, kırşehir boyasız göçük onarımı"
        />
        <link rel="canonical" href="https://asotokaporta.com/hizmetlerimiz" />
      </Helmet>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BreadCrumbs home={'Ana Sayfa'} current={'Hizmetlerimiz'} />
        <OurServices />
      </motion.div>
    </>
  );
};

export default Services;
