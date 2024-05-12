import React from 'react';
import { motion } from 'framer-motion';

import BreadCrumbs from '../../layout/BreadCrumbs';
import ContactForm from '../../layout/ContactForm';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BreadCrumbs home={'Ana Sayfa'} current={'İletişim'} />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
