import React from 'react';
import BreadCrumbs from '../../layout/BreadCrumbs';
import ContactForm from '../../layout/ContactForm';

const Contact = () => {
  return (
    <>
      <BreadCrumbs home={'Ana Sayfa'} current={'İletişim'} />
      <ContactForm />
    </>
  );
};

export default Contact;
