import React, { Fragment } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button';

import './whatsappContact.css';

const WhatsappContact = () => {
  return (
    <div className="whatsapp__contact">
      <FloatingWhatsApp
        className="floating-whatsapp-button"
        phoneNumber="+905389118309" // Required
        accountName="As Oto Kaporta" // Optional
        avatar="/images/avatar.webp" // Optional
        initialMessageByServer="Merhaba! size nasıl yardımcı olabilirim?" // Optional
        statusMessage="Çevrimiçi" // Optional
        placeholder="Buraya yaz.." // Optional
        allowEsc={true} // Optional
        // Explore all available props below
      />
    </div>
  );
};

export default WhatsappContact;
