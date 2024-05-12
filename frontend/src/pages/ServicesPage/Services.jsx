import React from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import OurServices from '../../layout/OurServices';

const Services = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BreadCrumbs home={'Ana Sayfa'} current={'Hizmetlerimiz'} />
      <OurServices />
    </motion.div>
  );
};

export default Services;
