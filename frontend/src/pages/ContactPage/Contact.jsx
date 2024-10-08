import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import ContactForm from '../../layout/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = 'İletişim | AS Oto Kaporta';
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BreadCrumbs home={'Ana Sayfa'} current={'İletişim'} />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
