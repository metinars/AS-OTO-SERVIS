import React from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
} from 'react-icons/fa';

import classes from './FixedSocial.module.css';

function FixedSocial() {
  const phoneHref = '+905389118309';

  const mapsUrl = 'https://maps.app.goo.gl/R66q1JT5hT1Tihbf9';

  const instagramUrl = 'https://www.instagram.com/asotokaportakirsehir/';

  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=+905389118309&text=Merhaba, web siteniz üzerinden ulaşıyorum';

  return (
    <div className={classes.fixedSocial}>
      <a
        className={classes.item}
        href={`tel:${phoneHref}`}
        aria-label="Hemen ara"
      >
        <FaPhoneAlt />
        <span>Hemen Ara</span>
      </a>

      <a
        className={classes.item}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      <a
        className={classes.item}
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Yol tarifi al"
      >
        <FaMapMarkerAlt />
        <span>Yol Tarifi</span>
      </a>

      <a
        className={classes.item}
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram sayfasını aç"
      >
        <FaInstagram />
        <span>Instagram</span>
      </a>
    </div>
  );
}

export default FixedSocial;
