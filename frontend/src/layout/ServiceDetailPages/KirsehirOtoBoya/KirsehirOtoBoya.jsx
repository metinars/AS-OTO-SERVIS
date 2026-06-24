import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classes from './KirsehirOtoBoya.module.css';

const phoneNumber = '+905389118309';

const mapsUrl =
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

function KirsehirOtoBoya() {
  return (
    <>
      <Helmet>
        <title>Kırşehir Oto Boya | Profesyonel Araç Boya Hizmeti</title>

        <meta
          name="description"
          content="Kırşehir oto boya hizmeti. Kaporta onarımı sonrası profesyonel oto boya, lokal boya ve sigorta kasko hasar onarım hizmetleri As Oto Kaporta'da."
        />

        <meta
          name="keywords"
          content="kırşehir oto boya, oto boya kırşehir, kırşehir araç boya, kırşehir lokal boya, kaporta boya kırşehir, as oto kaporta kırşehir"
        />

        <link
          rel="canonical"
          href="https://asotokaporta.com/hizmetler/kirsehir-oto-boya"
        />
      </Helmet>

      <main className={classes.page}>
        <section className={classes.hero}>
          <div className={classes.heroInner}>
            <span className={classes.badge}>Profesyonel Oto Boya</span>

            <h1>Kırşehir Oto Boya Hizmeti</h1>

            <p>
              Kaza, sürtme ve kaporta hasarları sonrasında profesyonel oto boya
              uygulamaları ile aracınızın ilk günkü görünümüne kavuşmasına
              yardımcı oluyoruz.
            </p>

            <div className={classes.buttons}>
              <a href={`tel:${phoneNumber}`}>Hemen Ara</a>

              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </section>

        <section className={classes.content}>
          <h2>Kırşehir Oto Boya Hizmeti</h2>

          <p>
            Araçlarda meydana gelen kaporta hasarları sonrasında doğru boya
            uygulaması hem estetik görünüm hem de aracın uzun yıllar korunması
            açısından büyük önem taşır.
          </p>

          <p>
            As Oto Kaporta olarak, kaporta onarımı sonrasında kaliteli işçilik,
            doğru yüzey hazırlığı ve renk uyumuna önem vererek profesyonel oto
            boya hizmeti sunuyoruz.
          </p>

          <h2>Oto Boya Hangi Durumlarda Yapılır?</h2>

          <div className={classes.grid}>
            <div>
              <h3>Kaza Sonrası Hasarlar</h3>
              <p>
                Kaporta onarımı tamamlandıktan sonra gerekli görülen bölgelerde
                profesyonel boya uygulaması yapılır.
              </p>
            </div>

            <div>
              <h3>Çizik ve Sürtme Hasarları</h3>
              <p>
                Boya yüzeyinin zarar gördüğü çizik ve sürtmelerde aracın estetik
                görünümü yeniden kazandırılır.
              </p>
            </div>

            <div>
              <h3>Lokal Boya İşlemleri</h3>
              <p>
                Hasarın durumuna göre tüm parçayı boyamak yerine sadece hasarlı
                bölgeye lokal boya uygulanabilir.
              </p>
            </div>

            <div>
              <h3>Sigorta ve Kasko Onarımları</h3>
              <p>
                Sigorta ve kasko kapsamındaki araçlarda boya işlemleri hasarın
                durumuna göre profesyonel şekilde uygulanmaktadır.
              </p>
            </div>
          </div>

          <h2>Neden Profesyonel Oto Boya?</h2>

          <p>
            Yanlış yapılan boya uygulamaları zaman içerisinde renk farkı, vernik
            atması, portakal kabuğu görünümü ve değer kaybı gibi problemlere
            neden olabilir.
          </p>

          <p>
            Bu nedenle boya işleminde sadece kaliteli malzeme değil, uygulama
            tecrübesi ve yüzey hazırlığı da büyük önem taşımaktadır.
          </p>

          <h2>As Oto Kaporta'da Oto Boya</h2>

          <ul className={classes.list}>
            <li>Profesyonel yüzey hazırlığı</li>

            <li>Renk uyumuna dikkat edilen boya uygulaması</li>

            <li>Kaporta onarımı ile uyumlu boya işlemleri</li>

            <li>Sigorta ve kasko hasar onarımları</li>

            <li>Lokal boya çözümleri</li>

            <li>Kaliteli işçilik anlayışı</li>
          </ul>

          <h2>Oto Boya Öncesinde Ne Yapıyoruz?</h2>

          <p>
            Boya işlemine başlamadan önce aracın hasarı detaylı şekilde analiz
            edilir. Gerekiyorsa önce kaporta düzeltme işlemi tamamlanır.
          </p>

          <p>
            Amacımız yalnızca aracı boyamak değil; mümkün olduğunca doğru onarım
            yöntemini seçerek aracın değerini koruyan profesyonel bir sonuç elde
            etmektir.
          </p>

          <section className={classes.related}>
            <h2>İlgili Hizmetler</h2>

            <div className={classes.relatedLinks}>
              <Link to="/hizmetler/kirsehir-oto-kaporta">Oto Kaporta</Link>

              <Link to="/hizmetler/kirsehir-lokal-boya">Lokal Boya</Link>

              <Link to="/hizmetler/kirsehir-boyasiz-gocuk-onarimi">
                Boyasız Göçük Onarımı
              </Link>

              <Link to="/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi">
                Sigorta ve Kasko Hasar Onarımı
              </Link>
            </div>
          </section>

          <h2>Sık Sorulan Sorular</h2>

          <div className={classes.faq}>
            <h3>Her hasarda boya gerekir mi?</h3>

            <p>
              Hayır. Boyası zarar görmemiş hasarlarda öncelikle Boyasız Göçük
              Onarımı (PDR) değerlendirilir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Lokal boya mı tüm parça boya mı yapılır?</h3>

            <p>
              Hasarın durumuna göre en uygun yöntem belirlenir. Gereksiz yere
              tüm parçanın boyanması tercih edilmez.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Sigorta kapsamında oto boya yapıyor musunuz?</h3>

            <p>
              Evet. Sigorta ve kasko kapsamındaki araçlarda gerekli boya
              işlemlerini profesyonel şekilde gerçekleştiriyoruz.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Renk farkı oluşur mu?</h3>

            <p>
              Doğru boya kodu ve profesyonel uygulama ile aracın mevcut rengine
              en yakın uyum hedeflenmektedir.
            </p>
          </div>

          <section className={classes.mapsBox}>
            <h2>As Oto Kaporta Yol Tarifi</h2>

            <p>
              As Oto Kaporta, Kırşehir Kılıçözü Sanayi Sitesi'nde hizmet
              vermektedir. Google Haritalar üzerinden konumumuzu açarak kolayca
              yol tarifi alabilirsiniz.
            </p>

            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Google Maps Konumunu Aç
            </a>
          </section>
        </section>
      </main>
    </>
  );
}

export default KirsehirOtoBoya;
