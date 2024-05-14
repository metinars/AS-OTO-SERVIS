import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import OurServices from '../../layout/OurServices';

const Services = () => {
  useEffect(() => {
    document.title =
      'Otomobil Sigorta Hasar Onarımı ve Kaporta Hizmetleri | AS Oto Kaporta';
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BreadCrumbs home={'Ana Sayfa'} current={'Hizmetlerimiz'} />
      <OurServices />
    </motion.div>
  );
};

export default Services;
