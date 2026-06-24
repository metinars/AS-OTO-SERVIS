import classes from './ContactForm.module.css';

import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { IoCallSharp, IoMail } from 'react-icons/io5';

const ContactForm = () => {
  const phoneDisplay = '0 (538) 911 83 09';
  const phoneHref = '+905389118309';

  const mailAddress = 'asotoservis40@gmail.com';

  const address =
    'Kılıçözü Sanayi Sitesi, Sanayi Camii Karşısı, Merkez/Kırşehir';

  const mapsUrl =
    'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

  const whatsappUrl = 'https://wa.me/905389118309';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneHref}`;
  };

  const handleAddressClick = () => {
    window.open(mapsUrl, '_blank');
  };

  const handleMailClick = () => {
    window.location.href = `mailto:${mailAddress}`;
  };

  return (
    <section className={classes.contactSection}>
      <div className={classes.container}>
        <div className={classes.infoPanel}>
          <span className={classes.badge}>İletişim</span>

          <h1>As Oto Kaporta’ya Ulaşın</h1>

          <p>
            Kırşehir’de kaporta onarımı, oto boya, boyasız göçük onarımı (PDR),
            sigorta ve kasko hasar onarımı için bize ulaşabilir veya Google
            Haritalar üzerinden yol tarifi alabilirsiniz.
          </p>

          <div className={classes.contactCards}>
            <button type="button" onClick={handleAddressClick}>
              <span className={classes.icon}>
                <FaMapMarkerAlt />
              </span>
              <span>
                <strong>Adres</strong>
                {address}
              </span>
            </button>

            <button type="button" onClick={handleCallClick}>
              <span className={classes.icon}>
                <IoCallSharp />
              </span>
              <span>
                <strong>Telefon</strong>
                {phoneDisplay}
              </span>
            </button>

            <button type="button" onClick={handleMailClick}>
              <span className={classes.icon}>
                <IoMail />
              </span>
              <span>
                <strong>E-posta</strong>
                {mailAddress}
              </span>
            </button>
          </div>

          <div className={classes.actionRow}>
            <a href={`tel:${phoneHref}`}>Hemen Ara</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>

        <div className={classes.mapPanel}>
          <div className={classes.mapHeader}>
            <span>Yol Tarifi</span>
            <h2>Google Haritalar Konumu</h2>
          </div>

          <div className={classes.map}>
            <iframe
              title="As Oto Kaporta Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.3674532124764!2d34.19078977646609!3d39.12086903348672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d5739aa5fa3b03%3A0xbd5e3aa18bc2f7e2!2sAs%20Oto%20Kaporta%20K%C4%B1r%C5%9Fehir!5e0!3m2!1str!2str!4v1713909462596!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={classes.mapButton}
          >
            Google Maps’te Aç
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
