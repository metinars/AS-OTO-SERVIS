import { IoMdCheckmark } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import classes from './FuseRepair.module.css';
import repair1 from '../../assets/images/home/fuseRepair/repair-1.jpg';
import repair2 from '../../assets/images/home/fuseRepair/repair-2.jpg';

const FuseRepair = () => {
  const phoneDisplay = '0 (538) 911 83 09';
  const phoneHref = '+905389118309';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneHref}`;
  };

  return (
    <section className={classes.fuseSection}>
      <div className={classes.container}>
        <div className={classes.imageArea}>
          <div className={classes.imageCardMain}>
            <img src={repair1} alt="Kırşehir sigorta ve kasko hasar onarımı" />
          </div>

          <div className={classes.imageCardSmall}>
            <img src={repair2} alt="As Oto Kaporta hasar onarım süreci" />
          </div>

          <div className={classes.experienceBadge}>
            <strong>30+</strong>
            <span>Yıllık Tecrübe</span>
          </div>
        </div>

        <div className={classes.contentArea}>
          <span className={classes.subTitle}>
            Sigorta ve Kasko Hasar Onarımı
          </span>

          <h2>Kaza Sonrası Hasar Onarımında Yanınızdayız</h2>

          <p>
            Kırşehir’de sigorta ve kasko kapsamındaki araç hasarlarında; kaporta
            onarımı, oto boya, lokal boya ve boyasız göçük onarımı (PDR)
            hizmetleriyle aracınızı doğru yöntemlerle onarıyoruz.
          </p>

          <ul className={classes.checkList}>
            <li>
              <IoMdCheckmark />
              <span>
                Sigorta ve kasko hasar sürecinde araç sahibine destek oluruz.
              </span>
            </li>

            <li>
              <IoMdCheckmark />
              <span>
                Hasarın durumuna göre kaporta, boya veya PDR yöntemini
                belirleriz.
              </span>
            </li>

            <li>
              <IoMdCheckmark />
              <span>
                Gereksiz parça değişiminden kaçınarak aracın değerini korumayı
                hedefleriz.
              </span>
            </li>

            <li>
              <IoMdCheckmark />
              <span>
                Aracınızı titiz işçilikle onarıp güvenle teslim ederiz.
              </span>
            </li>
          </ul>

          <div className={classes.actions}>
            <button className={classes.primaryBtn} onClick={handleCallClick}>
              Hemen Ara
            </button>

            <NavLink
              className={classes.secondaryBtn}
              to="/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi"
            >
              Detaylı Bilgi
            </NavLink>
          </div>

          <div className={classes.phoneBox}>
            <span>Telefon</span>
            <strong>{phoneDisplay}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuseRepair;
