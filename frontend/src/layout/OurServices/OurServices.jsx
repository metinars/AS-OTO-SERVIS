import { motion } from 'framer-motion';

import classes from './OurServices.module.css';
import s1 from '../../assets/images/home/services/s1.png';
import s2 from '../../assets/images/home/services/s2.png';
import s3 from '../../assets/images/home/services/s3.png';
import s4 from '../../assets/images/home/services/s4.png';
import s5 from '../../assets/images/home/services/s5.png';
import s6 from '../../assets/images/home/services/s6.png';

const OurServices = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes.services__section}
    >
      <div className={classes.section__title}>Hizmetlerimiz</div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={classes.container}
      >
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, translateY: -10 }}
          className={classes.service__box}
        >
          <div className={classes.service__avatar}>
            <img src={s1} alt="Sigorta Hasar Onarım" />
          </div>
          <div className={classes.service__title}>Sigorta Hasar Onarımı</div>
          <div className={classes.service__content}>
            Tüm sigorta şirketleri kapsamında, aracınız bir kaza yaptığında
            takibini yapar ve hasar onarım işlemlerini hızlandırır.
          </div>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, translateY: -10 }}
          className={classes.service__box}
        >
          <div className={classes.service__avatar}>
            <img src={s2} alt="Oto Kaporta" />
          </div>
          <div className={classes.service__title}>Oto Kaporta</div>
          <div className={classes.service__content}>
            Tüm kaporta hasarlarına profesyonel çözümler sunuyoruz. Aracınızda
            meydana gelen hasar onarımlarını yenisi gibi onarıyoruz
          </div>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, translateY: -10 }}
          className={classes.service__box}
        >
          <div className={classes.service__avatar}>
            <img src={s3} alt="Oto Boya" />
          </div>
          <div className={classes.service__title}>Oto Boya</div>
          <div className={classes.service__content}>
            Çalışmış olduğumuz boya servisleriyle aracınızda meydana gelen boya
            hasarlarına profesyonel yöntemlerle çözümler sunuyoruz.
          </div>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, translateY: -10 }}
          className={classes.service__box}
        >
          <div className={classes.service__avatar}>
            <img src={s4} alt="Kapı Kilidi Ve Kapı Camı Sistemleri " />
          </div>
          <div className={classes.service__title}>
            Kapı Kilidi ve Kapı Camı Sistemleri
          </div>
          <div className={classes.service__content}>
            Aracınızdaki meydana gelen kapı kilidi ve cam kriko sorunlarını
            tespit ediyoruz. Bu sorunlara çözüm sunuyoruz.
          </div>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, translateY: -10 }}
          className={classes.service__box}
        >
          <div className={classes.service__avatar}>
            <img src={s5} alt="Araç Taban Onarımı" />
          </div>
          <div className={classes.service__title}>Araç Taban Onarımı</div>
          <div className={classes.service__content}>
            Aracınızın tabanındaki hasar ve zamanın vermiş olduğu çürümeye
            çözümler sunuyoruz.
          </div>
        </motion.div>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, translateY: -10 }}
          className={classes.service__box}
        >
          <div className={classes.service__avatar}>
            <img src={s6} alt="Tampon ve Plastik Onarımı" />
          </div>
          <div className={classes.service__title}>
            Tampon ve Plastik Onarımı
          </div>
          <div className={classes.service__content}>
            Aracınızın tampon ve tüm plastik aksamlarında meydana gelen hasar
            tespit edilir ve hasar tipi ölçüsüne göre çözüm sunuyoruz.
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurServices;
