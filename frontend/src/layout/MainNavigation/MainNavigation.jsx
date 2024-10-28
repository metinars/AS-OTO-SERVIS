import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const [isBurgerButton, setIsBurgerButton] = useState(false);

  const location = useLocation();
  const currentURL = location.pathname;

  const phoneNumber = '(538) 911 83 09';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header className={classes.top__header}>
      <div className={classes.elementor__section}>
        <div className={classes.elementor__container}>
          <div className={classes.header__logo}>
            <NavLink to={'/'}>
              AS OTO <span>KAPORTA</span>
            </NavLink>
          </div>
          {!isTabletOrMobile && (
            <div className={classes.header__layouts__items}>
              <nav>
                <li>
                  <NavLink
                    to="/"
                    className={currentURL === '/' ? classes.active : ''}
                    end
                  >
                    Ana Sayfa
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="hakkimizda"
                    className={
                      currentURL === '/hakkimizda' ? classes.active : ''
                    }
                    end
                  >
                    Hakkımızda
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="hizmetlerimiz"
                    className={
                      currentURL === '/hizmetlerimiz' ? classes.active : ''
                    }
                    end
                  >
                    Hizmetlerimiz
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="blog"
                    className={currentURL === '/blog' ? classes.active : ''}
                    end
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="iletisim"
                    className={currentURL === '/iletisim' ? classes.active : ''}
                    end
                  >
                    İletişim
                  </NavLink>
                </li>
              </nav>
            </div>
          )}
          {/* <div className={classes.search__element}>
            <CiSearch />
          </div> */}
        </div>
        {!isTabletOrMobile && (
          <div className={classes.info__section}>
            <div>Erbil Arslan</div>
            <div onClick={handleCallClick}>{phoneNumber}</div>
          </div>
        )}
        {isTabletOrMobile && (
          <div className={classes.mobile__menu}>
            <button
              onClick={() => setIsBurgerButton(!isBurgerButton)}
              className={classes.burger}
            >
              {!isBurgerButton ? (
                <GiHamburgerMenu style={{ color: 'black' }} />
              ) : (
                <IoCloseSharp style={{ color: 'white' }} />
              )}
            </button>
            {isBurgerButton && (
              <>
                <div className={classes.background}></div>
                <div className={classes.shade}></div>
                <div className={classes.menu}>
                  <nav>
                    <NavLink
                      to="/"
                      onClick={() => setIsBurgerButton(!isBurgerButton)}
                    >
                      Ana Sayfa
                    </NavLink>
                    <NavLink
                      to="/hakkimizda"
                      onClick={() => setIsBurgerButton(!isBurgerButton)}
                    >
                      Hakkımızda
                    </NavLink>
                    <NavLink
                      to="/hizmetlerimiz"
                      onClick={() => setIsBurgerButton(!isBurgerButton)}
                    >
                      Hizmetlerimiz
                    </NavLink>
                    <NavLink
                      to="/blog"
                      onClick={() => setIsBurgerButton(!isBurgerButton)}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/iletisim"
                      onClick={() => setIsBurgerButton(!isBurgerButton)}
                    >
                      İletişim
                    </NavLink>
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
