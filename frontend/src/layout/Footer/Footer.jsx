import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  const phoneDisplay = '0 (538) 911 83 09';
  const phoneHref = '+905389118309';
  const mailAddress = 'asotoservis40@gmail.com';

  const mapsUrl =
    'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

  const whatsappUrl = `https://wa.me/905389118309`;

  const address =
    'Kılıçözü Sanayi Sitesi, Sanayi Camii Karşısı, Merkez/Kırşehir';

  const year = new Date().getFullYear();

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
    <footer className={classes.footerSection}>
      <div className={classes.footerTop}>
        <div className={classes.brandBox}>
          <div className={classes.logoTitle}>
            AS OTO <span>KAPORTA</span>
          </div>

          <p>
            Kırşehir’de kaporta onarımı, oto boya, boyasız göçük onarımı (PDR),
            sigorta ve kasko hasar onarımı hizmetlerinde titiz işçilik
            anlayışıyla hizmet veriyoruz.
          </p>

          <div className={classes.ctaRow}>
            <button type="button" onClick={handleCallClick}>
              Hemen Ara
            </button>

            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className={classes.footerColumn}>
          <h3>Hizmetlerimiz</h3>

          <NavLink to="/hizmetler/kirsehir-oto-kaporta">
            Kırşehir Oto Kaporta
          </NavLink>
          <NavLink to="/hizmetler/kirsehir-boyasiz-gocuk-onarimi">
            Boyasız Göçük Onarımı PDR
          </NavLink>
          <NavLink to="/hizmetler/kirsehir-oto-boya">Kırşehir Oto Boya</NavLink>
          <NavLink to="/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi">
            Sigorta ve Kasko Hasar Onarımı
          </NavLink>
          <NavLink to="/hizmetler/kirsehir-lokal-boya">
            Kırşehir Lokal Boya
          </NavLink>
          <NavLink to="/hizmetler/kirsehir-dolu-hasari-onarimi">
            Dolu Hasarı Onarımı
          </NavLink>
        </div>

        <div className={classes.footerColumn}>
          <h3>Sayfalar</h3>

          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink to="/hakkimizda">Hakkımızda</NavLink>
          <NavLink to="/hizmetlerimiz">Hizmetlerimiz</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/iletisim">İletişim</NavLink>
        </div>

        <div className={classes.contactBox}>
          <h3>Bize Ulaşın</h3>

          <button type="button" onClick={handleAddressClick}>
            <span>Adres</span>
            {address}
          </button>

          <button type="button" onClick={handleCallClick}>
            <span>Telefon</span>
            {phoneDisplay}
          </button>

          <button type="button" onClick={handleMailClick}>
            <span>E-posta</span>
            {mailAddress}
          </button>

          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Google Maps Konumunu Aç
          </a>
        </div>
      </div>

      <div className={classes.localSeoBar}>
        <span>Kırşehir Kaportacı</span>
        <span>Kırşehir Oto Kaporta</span>
        <span>Kırşehir PDR</span>
        <span>Kırşehir Oto Boya</span>
        <span>Kırşehir Sigorta Hasar Onarımı</span>
      </div>

      <div className={classes.copyright}>
        <p>© {year} As Oto Kaporta. Her hakkı saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
