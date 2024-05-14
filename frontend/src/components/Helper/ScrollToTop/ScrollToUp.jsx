import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

import classes from './ScrollToUp.module.css';

const ScrollToUp = () => {
  return <ScrollToTop className={classes.scrollToUp} smooth top={100} />;
};

export default ScrollToUp;
