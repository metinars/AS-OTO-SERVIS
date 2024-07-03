import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ContactForm from '../../layout/ContactForm';
import FuseRepair from '../../layout/FuseRepair';
import OurServices from '../../layout/OurServices';
import WrapSlider from '../../layout/WrapSlider';

const LazyLoadComponent = ({ children }) => {
  const { ref, inView } = useInView();
  const [loaded, setLoaded] = useState(false);

  if (inView && !loaded) {
    setLoaded(true);
  }

  return <div ref={ref}>{loaded && children}</div>;
};

const Home = () => {
  useEffect(() => {
    document.title =
      'Profesyonel Kaporta Tamiri ve Onarımı | As Oto Kaporta | Kırşehir';
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <LazyLoadComponent>
        <WrapSlider />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <OurServices />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FuseRepair />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <ContactForm />
      </LazyLoadComponent>
    </motion.div>
  );
};

export default Home;
