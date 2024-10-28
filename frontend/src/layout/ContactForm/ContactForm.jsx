import classes from './ContactForm.module.css';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { IoMail } from 'react-icons/io5';

const ContactForm = () => {
  const phoneNumber = '(538) 911 83 09';

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
    <div className={classes.contact__form}>
      <div className={classes.container}>
        <div className={classes.form}>
          <div className={classes.form__title}>İletişime Geçin</div>
          <div className={classes.adress} onClick={handleAddressClick}>
            <span className={classes.markerIcon}>
              <FaMapMarkerAlt />
            </span>
            <span>Kılıçözü Sanayi Sitesi 29-A Blok No: 5, Merkez/Kırşehir</span>
          </div>
          <div className={classes.phone} onClick={handleCallClick}>
            <span className={classes.markerIcon}>
              <IoCallSharp />
            </span>
            <span>{phoneNumber}</span>
          </div>
          <div className={classes.mail} onClick={handleMailClick}>
            <span className={classes.markerIcon}>
              <IoMail />
            </span>
            <span>asotoservis40@gmail.com</span>
          </div>
          {/* <div className={classes.form}>
            <Input
              placeholder={'Adınız'}
              name={'name'}
              id={'name'}
              type={'text'}
            />
            <Input
              placeholder={'Email'}
              name={'email'}
              id={'email'}
              type={'text'}
            />
            <Input
              placeholder={'Konu'}
              name={'subject'}
              id={'subject'}
              type={'text'}
            />
            <Input
              textarea={true}
              placeholder={'Açıklama'}
              name={'desc'}
              id={'desc'}
              type={'text'}
            />
          </div> */}
          {/* <div className={classes.form__btn}>
            <Button text={'Gönder'} />
          </div> */}
        </div>
        <div className={classes.google__maps}>
          <div className={classes.map__title}>Yol Tarifi Alın</div>
          <div className={classes.map}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.3674532124764!2d34.19078977646609!3d39.12086903348672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d5739aa5fa3b03%3A0xbd5e3aa18bc2f7e2!2sAs%20Oto%20Kaporta%20K%C4%B1r%C5%9Fehir!5e0!3m2!1str!2str!4v1713909462596!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
