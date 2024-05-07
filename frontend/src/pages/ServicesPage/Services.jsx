import React from 'react';
import BreadCrumbs from '../../layout/BreadCrumbs';
import OurServices from '../../layout/OurServices';

const Services = () => {
  return (
    <>
      <BreadCrumbs home={'Ana Sayfa'} current={'Hizmetlerimiz'} />
      <OurServices />
    </>
  );
};

export default Services;
