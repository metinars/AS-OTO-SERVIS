import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  const phoneNumber = '(542) 744 26 28';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const address = 'Kılıçözü Sanayi Sitesi 29-A Blok No: 5, Merkez/Kırşehir';

  const handleAddressClick = () => {
    window.open(
      'https://www.google.com.tr/maps/place//data=!4m2!3m1!1s0x14d5739aa5fa3b03:0xbd5e3aa18bc2f7e2?sa=X&ved=1t:8290&ictx=111',
      '_blank'
    );
  };

  const mailAddress = 'asotoservis40@gmail.com';

  const handleMailClick = () => {
    window.location.href = `mailto:${mailAddress}`;
  };
  return (
    <div className={classes.footer__section}>
      <div className={classes.footer__container}>
        <div className={classes.footer__content}>
          <div className={classes.footer__logo}>
            <div className={classes.logo__title}>AS OTO KAPORTA</div>
            <div className={classes.logo__subtitle}>
              Kırşehir Merkez Kaporta Onarım
            </div>
            <div className={classes.logo__name}>Erbil Arslan</div>
          </div>
          <div className={classes.contact__info}>
            <div className={classes.footer__title}>BİZE ULAŞIN</div>
            <div className={classes.adress} onClick={handleAddressClick}>
              {address}
            </div>
            <div className={classes.phone} onClick={handleCallClick}>
              Erbil Arslan Tel: (542) 744 26 28
            </div>
            <div className={classes.mail} onClick={handleMailClick}>
              {mailAddress}
            </div>
          </div>
          <div className={classes.page__links}>
            <div className={classes.footer__title}>BAĞLANTILAR</div>
            <NavLink to={'/'} className={classes.footer__link}>
              Ana Sayfa
            </NavLink>
            <NavLink to={'hakkimizda'} className={classes.footer__link}>
              Hakkımızda
            </NavLink>
            <NavLink to={'hizmetlerimiz'} className={classes.footer__link}>
              Hizmetlerimiz
            </NavLink>
            <NavLink to={'iletisim'} className={classes.footer__link}>
              İletişim
            </NavLink>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>
          © <span id="displayYear">2024</span> As Oto Kaporta Her hakkı saklıdır
        </p>
      </div>
    </div>
  );
};

export default Footer;
