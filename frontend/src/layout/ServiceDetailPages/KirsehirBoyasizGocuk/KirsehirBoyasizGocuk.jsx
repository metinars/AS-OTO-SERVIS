import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classes from './KirsehirBoyasizGocuk.module.css';

const mapsUrl =
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

function KirsehirBoyasizGocuk() {
  return (
    <>
      <Helmet>
        <title>Kırşehir Boyasız Göçük Onarımı PDR | As Oto Kaporta</title>
        <meta
          name="description"
          content="Kırşehir’de boyasız göçük onarımı PDR hizmeti. Dolu ve park hasarlarında aracınızın orijinal boyasını koruyarak göçük düzeltme yapıyoruz."
        />
        <meta
          name="keywords"
          content="kırşehir boyasız göçük onarımı, kırşehir pdr, göçük düzeltme kırşehir, kırşehir göçükçü, dolu hasarı onarımı kırşehir, as oto kaporta kırşehir"
        />
        <link
          rel="canonical"
          href="https://asotokaporta.com/hizmetler/kirsehir-boyasiz-gocuk-onarimi"
        />
      </Helmet>

      <main className={classes.page}>
        <section className={classes.hero}>
          <div className={classes.heroInner}>
            <span className={classes.badge}>Kırşehir PDR Hizmeti</span>
            <h1>Kırşehir Boyasız Göçük Onarımı PDR</h1>
            <p>
              Boyası zarar görmemiş dolu hasarı, park hasarı ve kaporta
              göçüklerinde aracınızın orijinal boyasını koruyarak profesyonel
              PDR hizmeti sunuyoruz.
            </p>

            <div className={classes.buttons}>
              <a href="tel:+905389118309">Hemen Ara</a>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </section>

        <section className={classes.content}>
          <h2>Boyasız Göçük Onarımı PDR Nedir?</h2>
          <p>
            Boyasız göçük onarımı, araç kaportasında oluşan göçüklerin boya
            işlemi yapılmadan özel ekipmanlar ile düzeltilmesidir. Bu yöntem
            özellikle aracın boyasının zarar görmediği hasarlarda tercih edilir.
          </p>
          <p>
            PDR yönteminde amaç, aracın orijinal boyasını ve kaporta yapısını
            koruyarak göçüğü eski formuna getirmektir. Böylece araç hem estetik
            olarak düzelir hem de ikinci el değerini daha iyi korur.
          </p>

          <h2>Hangi Hasarlarda PDR Uygulanabilir?</h2>
          <p>
            Boyasız göçük onarımı için en önemli kriter, hasar sırasında aracın
            boyasının bozulmamış olmasıdır. Hasarın büyük veya küçük olmasından
            önce, boyanın durumu ve metalin yapısı değerlendirilir.
          </p>

          <div className={classes.grid}>
            <div>
              <h3>Dolu Hasarı</h3>
              <p>
                Dolu sonrası oluşan göçüklerde boya zarar görmemişse PDR yöntemi
                ile onarım yapılabilir.
              </p>
            </div>
            <div>
              <h3>Park Hasarları</h3>
              <p>
                Park sırasında oluşan göçüklerde boyasız onarım yöntemi aracın
                orijinalliğini korumaya yardımcı olur.
              </p>
            </div>
            <div>
              <h3>Kaporta Darbe Hasarları</h3>
              <p>
                Boya yüzeyi sağlam kalan kaporta darbelerinde özel PDR
                ekipmanları ile düzeltme uygulanabilir.
              </p>
            </div>
            <div>
              <h3>Sigorta ve Kasko Kapsamı</h3>
              <p>
                Uygun hasarlarda boyasız göçük onarımı sigorta ve kasko
                kapsamında değerlendirilebilir.
              </p>
            </div>
          </div>

          <h2>PDR Yönteminin Avantajları</h2>
          <ul className={classes.list}>
            <li>Aracın orijinal boyası korunur.</li>
            <li>Parça değişimi yapılmaz.</li>
            <li>Değer kaybı minimum seviyede tutulur.</li>
            <li>Tramer ve boya geçmişi açısından avantaj sağlar.</li>
            <li>Doğru uygulandığında temiz ve profesyonel sonuç verir.</li>
          </ul>

          <h2>As Oto Kaporta’da PDR Yaklaşımımız</h2>
          <p>
            As Oto Kaporta’da her araç önce detaylı şekilde incelenir. Hasarın
            PDR yöntemine uygun olup olmadığı değerlendirilir. Eğer boyasız
            onarım mümkünse, aracın orijinal boyasını koruyacak şekilde işlem
            yapılır.
          </p>
          <p>
            Eğer hasar PDR için uygun değilse, müşteriye en doğru kaporta ve
            boya onarım yöntemi açık şekilde anlatılır. Amacımız yalnızca hasarı
            düzeltmek değil, aracın değerini ve sahibinin beklentisini koruyan
            doğru çözümü sunmaktır.
          </p>

          <h2>Kırşehir’de Boyasız Göçük Onarımı İçin Bize Ulaşın</h2>
          <p>
            Kırşehir’de PDR, boyasız göçük düzeltme, dolu hasarı onarımı ve
            sigorta kasko hasar işlemleri için As Oto Kaporta’ya
            ulaşabilirsiniz. Aracınızın fotoğrafını göndererek ön değerlendirme
            alabilirsiniz.
          </p>

          <section className={classes.related}>
            <h2>İlgili Hizmetler</h2>
            <div className={classes.relatedLinks}>
              <Link to="/hizmetler/kirsehir-oto-kaporta">
                Kırşehir Oto Kaporta
              </Link>
              <Link to="/hizmetler/kirsehir-oto-boya">Kırşehir Oto Boya</Link>
              <Link to="/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi">
                Sigorta ve Kasko Hasar Onarımı
              </Link>
              <Link to="/hizmetler/kirsehir-dolu-hasari-onarimi">
                Dolu Hasarı Onarımı
              </Link>
            </div>
          </section>

          <h2>Sık Sorulan Sorular</h2>

          <div className={classes.faq}>
            <h3>Boyasız göçük onarımı her hasara uygulanır mı?</h3>
            <p>
              Hayır. PDR uygulanabilmesi için aracın boyasının zarar görmemiş
              olması ve metal yapının onarıma uygun olması gerekir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Dolu hasarı PDR yöntemiyle düzelir mi?</h3>
            <p>
              Boya zarar görmemişse birçok dolu hasarı boyasız göçük onarımı
              yöntemi ile düzeltilebilir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Sigorta ve kasko kapsamında PDR yapıyor musunuz?</h3>
            <p>
              Evet. Uygun hasarlarda sigorta ve kasko kapsamında boyasız göçük
              onarımı hizmeti sunuyoruz.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>PDR aracın değerini korur mu?</h3>
            <p>
              Evet. Araç boyanmadığı ve parça değişmediği için PDR yöntemi
              aracın orijinalliğini ve ikinci el değerini korumaya yardımcı
              olur.
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

export default KirsehirBoyasizGocuk;
