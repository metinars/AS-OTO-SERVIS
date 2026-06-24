import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

import classes from './MainNavigation.module.css';

const serviceLinks = [
  { title: 'Oto Kaporta', path: '/hizmetler/kirsehir-oto-kaporta' },
  {
    title: 'Boyasız Göçük Onarımı PDR',
    path: '/hizmetler/kirsehir-boyasiz-gocuk-onarimi',
  },
  { title: 'Oto Boya', path: '/hizmetler/kirsehir-oto-boya' },
  {
    title: 'Sigorta ve Kasko Hasar Onarımı',
    path: '/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi',
  },
  { title: 'Lokal Boya', path: '/hizmetler/kirsehir-lokal-boya' },
  {
    title: 'Dolu Hasarı Onarımı',
    path: '/hizmetler/kirsehir-dolu-hasari-onarimi',
  },
];

const MainNavigation = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const [isBurgerButton, setIsBurgerButton] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const currentURL = location.pathname;

  const phoneDisplay = '(538) 911 83 09';
  const phoneHref = '+905389118309';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsBurgerButton(false);
    setIsMobileServicesOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneHref}`;
  };

  const isServicePage =
    currentURL === '/hizmetlerimiz' || currentURL.startsWith('/hizmetler/');

  return (
    <header
      className={`${classes.topHeader} ${
        isScrolled ? classes.scrolledHeader : ''
      }`}
    >
      <div className={classes.navWrapper}>
        <div className={classes.logo}>
          <NavLink to="/">
            AS OTO <span>KAPORTA</span>
          </NavLink>
        </div>

        {!isTabletOrMobile && (
          <nav className={classes.desktopNav}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : '')}
              end
            >
              Ana Sayfa
            </NavLink>

            <NavLink
              to="/hakkimizda"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Hakkımızda
            </NavLink>

            <div className={classes.dropdown}>
              <NavLink
                to="/hizmetlerimiz"
                className={isServicePage ? classes.active : ''}
              >
                Hizmetlerimiz
                <span className={classes.dropdownArrow}>▾</span>
              </NavLink>

              <div className={classes.dropdownMenu}>
                <NavLink to="/hizmetlerimiz" className={classes.dropdownItem}>
                  Tüm Hizmetler
                </NavLink>

                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    className={({ isActive }) =>
                      isActive
                        ? `${classes.dropdownItem} ${classes.dropdownItemActive}`
                        : classes.dropdownItem
                    }
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              Blog
            </NavLink>

            <NavLink
              to="/iletisim"
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              İletişim
            </NavLink>
          </nav>
        )}

        {!isTabletOrMobile && (
          <div className={classes.callBox} onClick={handleCallClick}>
            <span>Hemen Ara</span>
            <strong>{phoneDisplay}</strong>
          </div>
        )}

        {isTabletOrMobile && (
          <div className={classes.mobileMenu}>
            <button
              onClick={() => setIsBurgerButton((prev) => !prev)}
              className={classes.burger}
              aria-label="Menüyü aç/kapat"
            >
              {!isBurgerButton ? (
                <GiHamburgerMenu style={{ color: '#0f2537' }} />
              ) : (
                <IoCloseSharp style={{ color: '#ffffff' }} />
              )}
            </button>

            {isBurgerButton && (
              <>
                <div className={classes.shade}></div>

                <div className={classes.menu}>
                  <nav>
                    <NavLink to="/" onClick={closeMobileMenu}>
                      Ana Sayfa
                    </NavLink>

                    <NavLink to="/hakkimizda" onClick={closeMobileMenu}>
                      Hakkımızda
                    </NavLink>

                    <button
                      type="button"
                      className={classes.mobileServicesButton}
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    >
                      Hizmetlerimiz
                      <span>{isMobileServicesOpen ? '−' : '+'}</span>
                    </button>

                    {isMobileServicesOpen && (
                      <div className={classes.mobileSubMenu}>
                        <NavLink to="/hizmetlerimiz" onClick={closeMobileMenu}>
                          Tüm Hizmetler
                        </NavLink>

                        {serviceLinks.map((service) => (
                          <NavLink
                            key={service.path}
                            to={service.path}
                            onClick={closeMobileMenu}
                          >
                            {service.title}
                          </NavLink>
                        ))}
                      </div>
                    )}

                    <NavLink to="/blog" onClick={closeMobileMenu}>
                      Blog
                    </NavLink>

                    <NavLink to="/iletisim" onClick={closeMobileMenu}>
                      İletişim
                    </NavLink>

                    <a href={`tel:${phoneHref}`} className={classes.mobileCall}>
                      Hemen Ara: {phoneDisplay}
                    </a>
                  </nav>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
