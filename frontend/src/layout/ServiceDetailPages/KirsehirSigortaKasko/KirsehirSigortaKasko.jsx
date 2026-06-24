import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classes from './KirsehirSigortaKasko.module.css';

const phoneNumber = '+905389118309';

const mapsUrl =
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

function KirsehirSigortaKasko() {
  return (
    <>
      <Helmet>
        <title>Kırşehir Sigorta ve Kasko Hasar Onarımı | As Oto Kaporta</title>
        <meta
          name="description"
          content="Kırşehir’de sigorta ve kasko hasar onarımı hizmeti. Kaporta, oto boya ve PDR işlemlerinde As Oto Kaporta profesyonel destek sunar."
        />
        <meta
          name="keywords"
          content="kırşehir sigorta hasar onarımı, kırşehir kasko hasar onarımı, kırşehir hasar onarım, kırşehir kaporta, kırşehir oto boya, kırşehir pdr, as oto kaporta kırşehir"
        />
        <link
          rel="canonical"
          href="https://asotokaporta.com/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi"
        />
      </Helmet>

      <main className={classes.page}>
        <section className={classes.hero}>
          <div className={classes.heroInner}>
            <span className={classes.badge}>
              Sigorta ve Kasko Hasar Onarımı
            </span>
            <h1>Kırşehir Sigorta ve Kasko Hasar Onarımı</h1>
            <p>
              Kaza sonrası sigorta ve kasko kapsamındaki araç hasarlarında;
              kaporta onarımı, oto boya, boyasız göçük onarımı ve hasar takip
              süreçlerinde profesyonel destek sunuyoruz.
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
          <h2>Sigorta ve Kasko Hasar Onarımı Nedir?</h2>
          <p>
            Trafik kazası, park hasarı, dolu hasarı veya dış etkenler sonucu
            araçta oluşan hasarlar bazı durumlarda sigorta ya da kasko
            kapsamında onarılabilir. Bu süreçte önemli olan, aracın doğru
            şekilde incelenmesi ve hasara en uygun onarım yönteminin
            belirlenmesidir.
          </p>
          <p>
            Kırşehir’de sigorta ve kasko hasar onarımı hizmeti arayan araç
            sahipleri için As Oto Kaporta olarak kaporta, boya ve PDR
            işlemlerinde titiz bir çalışma anlayışıyla hizmet veriyoruz.
          </p>

          <h2>Kaza Sonrası Süreç Nasıl İlerler?</h2>
          <p>
            Kaza sonrası aracın onarım süreci yalnızca parçanın düzeltilmesi
            veya boyanması değildir. Hasarın doğru değerlendirilmesi, sigorta
            dosyasının açılması, eksper süreci ve onarım planlaması bu işin
            önemli aşamalarıdır.
          </p>

          <div className={classes.grid}>
            <div>
              <h3>Hasar Tespiti</h3>
              <p>
                Aracınızdaki hasar detaylı şekilde incelenir ve en doğru onarım
                yöntemi belirlenir.
              </p>
            </div>
            <div>
              <h3>Sigorta ve Kasko Süreci</h3>
              <p>
                Uygun durumlarda sigorta veya kasko kapsamında hasar onarım
                süreci başlatılır.
              </p>
            </div>
            <div>
              <h3>Kaporta ve Boya Onarımı</h3>
              <p>
                Hasarın durumuna göre kaporta düzeltme, lokal boya veya parça
                boya işlemleri uygulanır.
              </p>
            </div>
            <div>
              <h3>PDR Boyasız Göçük Onarımı</h3>
              <p>
                Boyası zarar görmemiş göçüklerde PDR yöntemiyle aracın orijinal
                boyası korunabilir.
              </p>
            </div>
          </div>

          <h2>As Oto Kaporta’da Önceliğimiz</h2>
          <p>
            As Oto Kaporta’da her aracı kendi aracımız gibi değerlendiriyoruz.
            Amacımız, gereksiz parça değişimine gitmeden aracın orijinal
            yapısını mümkün olduğunca korumaktır.
          </p>
          <p>
            Hasar onarıma uygunsa önce düzeltme seçeneği değerlendirilir.
            Güvenlik riski olan durumlarda ise parça değişimi en doğru şekilde
            uygulanır. Böylece hem güvenli hem de aracın değerini koruyan bir
            onarım süreci hedeflenir.
          </p>

          <h2>Sigorta ve Kasko Kapsamında Hangi Hizmetleri Sunuyoruz?</h2>
          <ul className={classes.list}>
            <li>Kaporta hasar onarımı</li>
            <li>Oto boya ve lokal boya işlemleri</li>
            <li>Boyasız göçük onarımı PDR</li>
            <li>Dolu hasarı onarımı</li>
            <li>Park hasarı onarımı</li>
            <li>Sigorta ve kasko hasar süreçlerinde destek</li>
          </ul>

          <h2>Kırşehir’de Sigorta ve Kasko Hasar Onarımı İçin Bize Ulaşın</h2>
          <p>
            Kırşehir’de kaza sonrası aracınızda oluşan hasar için doğru onarım
            yöntemini öğrenmek isterseniz As Oto Kaporta’ya ulaşabilirsiniz.
            Aracınızın fotoğrafını göndererek ön değerlendirme alabilir, sigorta
            ve kasko kapsamında yapılabilecek işlemler hakkında bilgi
            alabilirsiniz.
          </p>

          <section className={classes.related}>
            <h2>İlgili Hizmetler</h2>
            <div className={classes.relatedLinks}>
              <Link to="/hizmetler/kirsehir-oto-kaporta">
                Kırşehir Oto Kaporta
              </Link>
              <Link to="/hizmetler/kirsehir-boyasiz-gocuk-onarimi">
                Boyasız Göçük Onarımı PDR
              </Link>
              <Link to="/hizmetler/kirsehir-oto-boya">Kırşehir Oto Boya</Link>
              <Link to="/hizmetler/kirsehir-dolu-hasari-onarimi">
                Dolu Hasarı Onarımı
              </Link>
            </div>
          </section>

          <h2>Sık Sorulan Sorular</h2>

          <div className={classes.faq}>
            <h3>Sigorta ve kasko hasar onarımı yapıyor musunuz?</h3>
            <p>
              Evet. Sigorta ve kasko kapsamındaki araç hasarlarında kaporta,
              boya ve PDR hizmetleri sunuyoruz.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Her hasar sigorta veya kasko kapsamında yapılır mı?</h3>
            <p>
              Bu durum poliçe kapsamına, hasarın oluş şekline ve sigorta
              şartlarına göre değişir. Araç incelendikten sonra süreç hakkında
              daha net bilgi verilebilir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>
              Boyasız göçük onarımı sigorta veya kasko kapsamında olur mu?
            </h3>
            <p>
              Uygun hasarlarda boyasız göçük onarımı sigorta veya kasko
              kapsamında değerlendirilebilir. Burada en önemli kriter, aracın
              boyasının zarar görmemiş olmasıdır.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Kaza sonrası parça değişimi şart mı?</h3>
            <p>
              Hayır. Her hasarda parça değişimi gerekmez. Onarıma uygun
              parçalarda önce düzeltme yöntemi değerlendirilir.
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

export default KirsehirSigortaKasko;
