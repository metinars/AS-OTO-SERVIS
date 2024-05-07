import classes from './OurServices.module.css';
import s1 from '../../assets/images/home/services/s1.png';
import s2 from '../../assets/images/home/services/s2.png';
import s3 from '../../assets/images/home/services/s3.png';
import s4 from '../../assets/images/home/services/s4.png';
import s5 from '../../assets/images/home/services/s5.png';
import s6 from '../../assets/images/home/services/s6.png';

const OurServices = () => {
  return (
    <div id="services" className={classes.services__section}>
      <div className={classes.section__title}>Hizmetlerimiz</div>
      <div className={classes.container}>
        <div className={classes.service__box}>
          <div className={classes.service__avatar}>
            <img src={s1} />
          </div>
          <div className={classes.service__title}>Sigorta Hasar Onarımı</div>
          <div className={classes.service__content}>
            Tüm sigorta şirketleri kapsamında, aracınız bir kaza yaptığında
            takibini yapar ve hasar onarım işlemlerini hızlandırır.
          </div>
        </div>
        <div className={classes.service__box}>
          <div className={classes.service__avatar}>
            <img src={s2} />
          </div>
          <div className={classes.service__title}>Oto Kaporta</div>
          <div className={classes.service__content}>
            Tüm kaporta hasarlarına profesyonel çözümler sunuyoruz. Aracınızda
            meydana gelen hasar onarımlarını yenisi gibi onarıyoruz
          </div>
        </div>
        <div className={classes.service__box}>
          <div className={classes.service__avatar}>
            <img src={s3} />
          </div>
          <div className={classes.service__title}>Oto Boya</div>
          <div className={classes.service__content}>
            Çalışmış olduğumuz boya servisleriyle aracınızda meydana gelen boya
            hasarlarına profesyonel yöntemlerle çözümler sunuyoruz.
          </div>
        </div>
        <div className={classes.service__box}>
          <div className={classes.service__avatar}>
            <img src={s4} />
          </div>
          <div className={classes.service__title}>
            Kapı Kilidi ve Kapı Camı Sistemleri
          </div>
          <div className={classes.service__content}>
            Aracınızdaki meydana gelen kapı kilidi ve cam kriko sorunlarını
            tespit ediyoruz. Bu sorunlara çözüm sunuyoruz.
          </div>
        </div>
        <div className={classes.service__box}>
          <div className={classes.service__avatar}>
            <img src={s5} />
          </div>
          <div className={classes.service__title}>Araç Taban Onarımı</div>
          <div className={classes.service__content}>
            Aracınızın tabanındaki hasar ve zamanın vermiş olduğu çürümeye
            çözümler sunuyoruz.
          </div>
        </div>
        <div className={classes.service__box}>
          <div className={classes.service__avatar}>
            <img src={s6} />
          </div>
          <div className={classes.service__title}>
            Tampon ve Plastik Onarımı
          </div>
          <div className={classes.service__content}>
            Aracınızın tampon ve tüm plastik aksamlarında meydana gelen hasar
            tespit edilir ve hasar tipi ölçüsüne göre çözüm sunuyoruz.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
