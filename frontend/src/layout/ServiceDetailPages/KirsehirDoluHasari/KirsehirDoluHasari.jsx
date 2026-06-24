import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classes from './KirsehirDoluHasari.module.css';

const phoneNumber = '+905389118309';

const mapsUrl =
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

function KirsehirDoluHasari() {
  return (
    <>
      <Helmet>
        <title>Kırşehir Dolu Hasarı Onarımı | Boyasız Göçük PDR</title>
        <meta
          name="description"
          content="Kırşehir’de dolu hasarı onarımı. Boyası zarar görmemiş dolu göçüklerinde PDR boyasız göçük onarımı ile aracınızın değerini koruyoruz."
        />
        <meta
          name="keywords"
          content="kırşehir dolu hasarı onarımı, dolu hasarı kırşehir, kırşehir pdr, kırşehir boyasız göçük onarımı, göçük düzeltme kırşehir, as oto kaporta kırşehir"
        />
        <link
          rel="canonical"
          href="https://asotokaporta.com/hizmetler/kirsehir-dolu-hasari-onarimi"
        />
      </Helmet>

      <main className={classes.page}>
        <section className={classes.hero}>
          <div className={classes.heroInner}>
            <span className={classes.badge}>Kırşehir Dolu Hasarı Onarımı</span>
            <h1>Kırşehir Dolu Hasarı Onarımı</h1>
            <p>
              Dolu yağışı sonrası aracınızda oluşan göçüklerde, boyası zarar
              görmemiş uygun hasarları PDR boyasız göçük onarımı yöntemiyle
              düzeltiyor ve aracınızın orijinal değerini korumaya yardımcı
              oluyoruz.
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
          <h2>Dolu Hasarı Nedir?</h2>
          <p>
            Dolu hasarı, dolu tanelerinin araç kaportasına çarpması sonucu
            yüzeyde oluşan göçüklerdir. Bu hasarlar özellikle kaput, tavan,
            çamurluk, bagaj kapağı ve kapı gibi kaporta parçalarında
            görülebilir.
          </p>
          <p>
            Dolu hasarında en önemli nokta, araç boyasının zarar görüp
            görmediğidir. Eğer boya yüzeyi sağlam kaldıysa, birçok dolu hasarı
            boyasız göçük onarımı yani PDR yöntemiyle düzeltilebilir.
          </p>

          <h2>Dolu Hasarı Boyasız Göçük Onarımı ile Düzelir mi?</h2>
          <p>
            Evet, uygun durumlarda dolu hasarı PDR yöntemiyle onarılabilir. Bu
            yöntemde araca boya yapılmadan, göçükler özel ekipmanlarla eski
            formuna getirilmeye çalışılır.
          </p>
          <p>
            PDR işlemi, aracın orijinal boyasını koruduğu için özellikle ikinci
            el değeri açısından avantaj sağlar. Parça değişimi ve boya işlemi
            yapılmadığında aracın orijinalliği daha iyi korunur.
          </p>

          <h2>Dolu Hasarında Onarım Süreci Nasıl İlerler?</h2>
          <div className={classes.grid}>
            <div>
              <h3>Hasar Analizi</h3>
              <p>
                Aracın göçük sayısı, hasarın bulunduğu bölgeler ve boya yüzeyi
                detaylı şekilde incelenir.
              </p>
            </div>

            <div>
              <h3>PDR Uygunluk Kontrolü</h3>
              <p>
                Boya zarar görmemişse ve metal yapısı uygunsa PDR yöntemi
                değerlendirilir.
              </p>
            </div>

            <div>
              <h3>Boyasız Onarım</h3>
              <p>
                Özel PDR ekipmanlarıyla göçükler kontrollü şekilde düzeltilir ve
                yüzey eski formuna yaklaştırılır.
              </p>
            </div>

            <div>
              <h3>Son Kontrol</h3>
              <p>
                İşlem sonrası ışık altında yüzey kontrol edilir ve onarım
                kalitesi değerlendirilir.
              </p>
            </div>
          </div>

          <h2>Sigorta ve Kasko Dolu Hasarını Karşılar mı?</h2>
          <p>
            Dolu hasarı bazı durumlarda kasko kapsamında değerlendirilebilir.
            Hasarın kapsamı, poliçe şartları ve sigorta şirketinin değerlendirme
            süreci bu noktada önemlidir.
          </p>
          <p>
            As Oto Kaporta olarak dolu hasarı, kaporta onarımı, PDR ve sigorta
            kasko hasar süreçlerinde araç sahiplerine destek sağlıyoruz. Araç
            incelendikten sonra en doğru onarım yöntemi belirlenir.
          </p>

          <h2>As Oto Kaporta’da Dolu Hasarı Onarımı</h2>
          <p>
            As Oto Kaporta’da her aracı kendi aracımız gibi değerlendiriyoruz.
            Dolu hasarında önceliğimiz, eğer uygunsa aracın orijinal boyasını
            koruyarak PDR yöntemiyle onarım yapmaktır.
          </p>
          <p>
            Eğer hasar boyasız onarıma uygun değilse, kaporta ve boya onarımı
            seçenekleri açık şekilde anlatılır. Amacımız, araç sahibinin
            beklentisini ve aracın değerini koruyan en doğru çözümü sunmaktır.
          </p>

          <h2>Kırşehir’de Dolu Hasarı İçin Bize Ulaşın</h2>
          <p>
            Kırşehir’de dolu hasarı onarımı, boyasız göçük düzeltme, PDR,
            kaporta ve oto boya hizmetleri için As Oto Kaporta’ya
            ulaşabilirsiniz. Aracınızın fotoğrafını göndererek ön değerlendirme
            alabilirsiniz.
          </p>

          <section className={classes.related}>
            <h2>İlgili Hizmetler</h2>
            <div className={classes.relatedLinks}>
              <Link to="/hizmetler/kirsehir-boyasiz-gocuk-onarimi">
                Boyasız Göçük Onarımı PDR
              </Link>
              <Link to="/hizmetler/kirsehir-oto-kaporta">
                Kırşehir Oto Kaporta
              </Link>
              <Link to="/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi">
                Sigorta ve Kasko Hasar Onarımı
              </Link>
              <Link to="/hizmetler/kirsehir-oto-boya">Kırşehir Oto Boya</Link>
            </div>
          </section>

          <h2>Sık Sorulan Sorular</h2>

          <div className={classes.faq}>
            <h3>Dolu hasarı boyasız göçük onarımıyla düzelir mi?</h3>
            <p>
              Boya zarar görmemişse ve metal yapısı uygunsa birçok dolu hasarı
              PDR yöntemiyle düzeltilebilir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Dolu hasarında araç boyanır mı?</h3>
            <p>
              Her dolu hasarında boya gerekmez. Boya yüzeyi sağlamsa öncelikle
              boyasız göçük onarımı değerlendirilir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Kasko dolu hasarını karşılar mı?</h3>
            <p>
              Bu durum poliçe kapsamına göre değişir. Araç ve poliçe şartları
              değerlendirildikten sonra süreç hakkında daha net bilgi
              verilebilir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>PDR işlemi aracın değerini korur mu?</h3>
            <p>
              Evet. Araç boyanmadığı ve parça değişmediği için PDR, aracın
              orijinalliğini ve ikinci el değerini korumaya yardımcı olur.
            </p>
          </div>

          <section className={classes.mapsBox}>
            <h2>As Oto Kaporta Yol Tarifi</h2>
            <p>
              As Oto Kaporta, Kırşehir Kılıçözü Sanayi Sitesi’nde hizmet
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

export default KirsehirDoluHasari;
