import React, { useEffect } from 'react';
import classes from './QrPage.module.css';

const REVIEW_URL = 'https://g.page/r/CeL3wouhOl69EBE/review';

const WHATSAPP_URL =
  'https://wa.me/905389118309?text=Merhaba%2C%20As%20Oto%27dan%20hizmet%20ald%C4%B1m.%20Bir%20konuda%20bilgi%20almak%20istiyorum.';

const INSTAGRAM_URL = 'https://www.instagram.com/asotokaportakirsehir/';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme+K%C4%B1r%C5%9Fehir';

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5Z"
    />
    <path
      fill="#FF3D00"
      d="m6.3 14.7 6.6 4.8C14.7 15 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6 29.2 4 24 4c-7.7 0-14.4 4.3-17.7 10.7Z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5 0 9.6-1.9 13.1-5l-6.1-5.2A12 12 0 0 1 12.9 28l-6.6 5.1A20 20 0 0 0 24 44Z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.3 5.8l6.1 5.2C40.8 35.6 44 30.6 44 24c0-1.2-.1-2.3-.4-3.5Z"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      fill="currentColor"
      d="M16 3a13 13 0 0 0-11 20l-2 6 6-2a13 13 0 1 0 7-24Zm0 23a10 10 0 0 1-5-1.3l-.4-.2-3.6 1.2 1.2-3.5-.3-.5A10 10 0 1 1 16 26Zm5.6-7.5c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.9-.9-3.2-1.7-4.5-3.8-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2.9 3.1 1 4.2.8.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.3-.4-.4-.7-.6Z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="m9 5 7 7-7 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ActionCard = ({ href, icon, title, description, className }) => {
  return (
    <a
      className={`${classes.actionCard} ${className || ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={classes.iconBox}>{icon}</div>

      <div className={classes.actionContent}>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <div className={classes.arrow}>
        <ArrowIcon />
      </div>
    </a>
  );
};

const QrPage = () => {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = 'AS OTO | Müşteri Sayfası';

    let robotsMeta = document.querySelector('meta[name="robots"]');
    let createdRobotsMeta = false;

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
      createdRobotsMeta = true;
    }

    const oldRobotsContent = robotsMeta.getAttribute('content');

    robotsMeta.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.title = oldTitle;

      if (createdRobotsMeta) {
        robotsMeta.remove();
      } else if (oldRobotsContent) {
        robotsMeta.setAttribute('content', oldRobotsContent);
      } else {
        robotsMeta.removeAttribute('content');
      }
    };
  }, []);

  return (
    <main className={classes.page}>
      <div className={classes.backgroundGlow} />

      <section className={classes.container}>
        <header className={classes.header}>
          <div className={classes.logo}>
            <span className={classes.logoAs}>AS</span>
            <span className={classes.logoOto}>OTO</span>
          </div>

          <div className={classes.logoSubtitle}>HASAR ONARIM MERKEZİ</div>

          <div className={classes.logoServices}>
            KAPORTA · BOYA · BOYASIZ GÖÇÜK ONARIMI
          </div>
        </header>

        <div className={classes.divider} />

        <section className={classes.intro}>
          <div className={classes.heart}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </div>

          <h1>Aracınızı bize emanet ettiğiniz için teşekkür ederiz.</h1>

          <p>
            Memnuniyetiniz bizim için çok değerli. Dilerseniz deneyiminizi
            paylaşabilir veya bize hızlıca ulaşabilirsiniz.
          </p>
        </section>

        <section className={classes.actions}>
          <ActionCard
            href={REVIEW_URL}
            icon={<GoogleIcon />}
            title="Google’da Yorum Yap"
            description="Google hesabınızla güvenli şekilde yorumunuzu paylaşın."
            className={classes.google}
          />

          <ActionCard
            href={WHATSAPP_URL}
            icon={<WhatsAppIcon />}
            title="WhatsApp’tan Ulaş"
            description="Hızlıca bizimle iletişime geçin."
            className={classes.whatsapp}
          />

          <ActionCard
            href={INSTAGRAM_URL}
            icon={<InstagramIcon />}
            title="Instagram’da Bizi Takip Et"
            description="Güncel çalışmalarımızı inceleyin."
            className={classes.instagram}
          />

          <ActionCard
            href={MAPS_URL}
            icon={<LocationIcon />}
            title="Yol Tarifi Al"
            description="Google Maps üzerinden bize ulaşın."
            className={classes.location}
          />
        </section>

        <footer className={classes.footer}>
          <div className={classes.carLine}>
            <span />
          </div>

          <strong>AS OTO HASAR ONARIM MERKEZİ · KIRŞEHİR</strong>

          <a
            href="/"
            className={classes.websiteLink}
            aria-label="AS OTO ana sayfasına git"
          >
            Web Sitemizi Ziyaret Edin
            <span className={classes.websiteArrow}>→</span>
          </a>

          <span className={classes.domain}>asotokaporta.com</span>
        </footer>
      </section>
    </main>
  );
};

export default QrPage;
