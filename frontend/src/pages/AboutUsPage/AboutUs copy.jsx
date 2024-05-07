import React, { useEffect, useRef } from 'react';
import BreadCrumbs from '../../layout/BreadCrumbs';
import aboutusImage from '../../assets/images/hasarli-araba.jpg';
import classes from './AboutUs.module.css';

const AboutUs = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    content.classList.add('show');
  }, []);

  return (
    <>
      <div>
        <BreadCrumbs home={'Home'} current={'Hakkımızda'} />
        <div className={classes.aboutus__section}>
          <div
            className={`${classes.container} ${classes.show}`}
            ref={contentRef}
          >
            <div className={classes.aboutus__content}>
              <div className={classes.aboutus__text}>
                <h1
                  style={{
                    color: '#FE600A',
                    fontFamily: 'Barlow Condensed',
                    fontSize: '57px',
                  }}
                >
                  AS OTO KAPORTA
                </h1>
                <p style={{ fontFamily: 'DM Sans', fontSize: '17px' }}>
                  As Oto Kaporta olarak, otomotiv sektöründeki 30 yıllık
                  deneyimimizle gurur duyuyoruz. Her marka araç üzerinde
                  kazandığımız derin tecrübe ve uzmanlığımızla, müşterilerimize
                  güvenilir ve kaliteli hizmet sunma misyonumuzu sürdürüyoruz.
                  Müşterilerimizin beklentilerini karşılamak ve hatta aşmak için
                  her zaman en iyisini yapmaya kararlıyız. Firmamız, araçlarını
                  teslim ettiğinizde size huzur ve memnuniyet garantisi sağlar.
                  Çünkü biz, her işimizi titizlikle ve özenle gerçekleştirir,
                  araçlarınızı ilk günkü gibi parlak ve kusursuz bir şekilde
                  size teslim ederiz. Sizin için güvenilir bir iş ortağı olmak,
                  bizim için bir ayrıcalıktır ve bu sorumluluğun bilinciyle
                  hareket ediyoruz.
                </p>
              </div>
              <div className={classes.aboutus__image}>
                <div className={classes.image}>
                  <img src={aboutusImage} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
