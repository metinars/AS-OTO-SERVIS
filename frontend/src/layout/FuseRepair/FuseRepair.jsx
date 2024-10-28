import { IoMdCheckmark } from 'react-icons/io';

import classes from './FuseRepair.module.css';
import repair1 from '../../assets/images/home/fuseRepair/repair-1.jpg';
import repair2 from '../../assets/images/home/fuseRepair/repair-2.jpg';

const FuseRepair = () => {
  const phoneNumber = '(538) 911 83 09';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className={classes.fuse__section}>
      <div className={classes.fuse__component}>
        <div className={classes.fuse__image__component}>
          <div className={classes.first__image}>
            <img src={repair1} alt="Sigorta Hasar Onarımı" />
          </div>
          <div className={classes.second__image}>
            <img src={repair2} alt="Sigorta Hasar Onarımı" />
          </div>
        </div>
        <div className={classes.fuse__content__component}>
          <div className={classes.repair__title}>YARDIMCI OLABİLİRİZ</div>
          <div className={classes.repair__desc}>
            SİGORTA VE KASKO HASAR ONARIMLARINDA YARDIMCI OLABİLİRİZ
          </div>
          <div className={classes.repair__article}>
            <ul>
              <li>
                <IoMdCheckmark /> Sigorta hasar dosya işlemlerinizi takip eder
                ve hızlandırırız
              </li>
              <li>
                <IoMdCheckmark />
                Dosya işlemlerini sonuçlandırır ve hasar onarımına başlarız
              </li>
              <li>
                <IoMdCheckmark />
                Aracınızı eskisi gibi onarıp size teslim ederiz
              </li>
            </ul>
            <button className={classes.contact__btn} onClick={handleCallClick}>
              Hemen Ara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuseRepair;
