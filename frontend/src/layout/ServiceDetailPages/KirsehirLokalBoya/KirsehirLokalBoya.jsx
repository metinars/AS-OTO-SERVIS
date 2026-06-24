import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import classes from './KirsehirLokalBoya.module.css';

const phoneNumber = '+905389118309';

const mapsUrl =
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme';

function KirsehirLokalBoya() {
  return (
    <>
      <Helmet>
        <title>Kırşehir Lokal Boya | As Oto Kaporta</title>
        <meta
          name="description"
          content="Kırşehir’de lokal boya hizmeti. Çizik, sürtme ve bölgesel boya hasarlarında aracınızın değerini koruyan profesyonel oto boya çözümleri."
        />
        <meta
          name="keywords"
          content="kırşehir lokal boya, lokal boya kırşehir, kırşehir oto boya, oto boya kırşehir, kırşehir kaporta boya, as oto kaporta kırşehir"
        />
        <link
          rel="canonical"
          href="https://asotokaporta.com/hizmetler/kirsehir-lokal-boya"
        />
      </Helmet>

      <main className={classes.page}>
        <section className={classes.hero}>
          <div className={classes.heroInner}>
            <span className={classes.badge}>Kırşehir Lokal Boya</span>
            <h1>Kırşehir Lokal Boya Hizmeti</h1>
            <p>
              Çizik, sürtme ve bölgesel boya hasarlarında tüm parçayı boyamaya
              gerek kalmadan, aracınızın görünümünü ve değerini koruyan lokal
              boya çözümleri sunuyoruz.
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
          <h2>Lokal Boya Nedir?</h2>
          <p>
            Lokal boya, aracın tamamını veya tüm parçayı boyamadan, yalnızca
            hasarın bulunduğu bölgeye uygulanan profesyonel boya işlemidir.
            Özellikle çizik, sürtme ve bölgesel boya hasarlarında tercih edilir.
          </p>
          <p>
            Bu yöntemde amaç, gereksiz geniş boya işlemlerinden kaçınarak aracın
            mevcut boya yapısını mümkün olduğunca korumaktır. Doğru uygulanan
            lokal boya, aracın görünümünü düzeltirken ikinci el değerinin
            korunmasına da yardımcı olur.
          </p>

          <h2>Lokal Boya Hangi Durumlarda Tercih Edilir?</h2>
          <p>
            Lokal boya her hasarda uygulanmaz. Öncelikle hasarın derinliği,
            bulunduğu bölge, boya yüzeyinin durumu ve renk uyumu
            değerlendirilir. Eğer hasar bölgesel olarak giderilebiliyorsa lokal
            boya daha doğru bir çözüm olabilir.
          </p>

          <div className={classes.grid}>
            <div>
              <h3>Çizik Hasarları</h3>
              <p>
                Derin çiziklerde yalnızca hasarlı bölgeye işlem yapılarak daha
                kontrollü bir boya onarımı sağlanabilir.
              </p>
            </div>

            <div>
              <h3>Sürtme Hasarları</h3>
              <p>
                Park veya temas sonucu oluşan sürtme izlerinde lokal boya
                yöntemiyle bölgesel onarım yapılabilir.
              </p>
            </div>

            <div>
              <h3>Bölgesel Boya Hasarları</h3>
              <p>
                Boya yüzeyinin yalnızca belirli bir kısmında hasar varsa tüm
                parçayı boyamadan çözüm üretilebilir.
              </p>
            </div>

            <div>
              <h3>Kaporta Sonrası Boya</h3>
              <p>
                Kaporta düzeltme sonrası gerekli olan bölgelerde renk uyumuna
                dikkat edilerek boya uygulaması yapılır.
              </p>
            </div>
          </div>

          <h2>As Oto Kaporta’da Lokal Boya Yaklaşımımız</h2>
          <p>
            As Oto Kaporta’da lokal boya işlemine başlamadan önce aracın hasar
            durumu detaylı şekilde incelenir. Amacımız, araca gereksiz işlem
            uygulamadan en doğru boya çözümünü belirlemektir.
          </p>
          <p>
            Renk uyumu, yüzey hazırlığı ve işçilik kalitesi lokal boya işleminde
            en önemli noktalardır. Bu yüzden işlem öncesi boya yüzeyi dikkatle
            hazırlanır ve aracın genel görünümüyle uyumlu sonuç hedeflenir.
          </p>

          <h2>Lokal Boya Aracın Değerini Etkiler mi?</h2>
          <p>
            Yanlış yapılan boya işlemleri aracın değerini olumsuz etkileyebilir.
            Ancak doğru uygulanan, gereksiz geniş alana yayılmayan ve renk uyumu
            iyi sağlanan lokal boya işlemi, hasarın temiz şekilde giderilmesine
            yardımcı olur.
          </p>
          <p>
            Bu nedenle lokal boya işleminde yalnızca boyama değil, hasarın doğru
            analiz edilmesi ve aracın uzun vadeli değerinin düşünülmesi gerekir.
          </p>

          <h2>Kırşehir’de Lokal Boya İçin Bize Ulaşın</h2>
          <p>
            Kırşehir’de lokal boya, oto boya, kaporta onarımı ve sigorta kasko
            hasar işlemleri için As Oto Kaporta’ya ulaşabilirsiniz. Aracınızdaki
            çizik veya sürtme hasarının fotoğrafını göndererek ön değerlendirme
            alabilirsiniz.
          </p>

          <section className={classes.related}>
            <h2>İlgili Hizmetler</h2>
            <div className={classes.relatedLinks}>
              <Link to="/hizmetler/kirsehir-oto-kaporta">
                Kırşehir Oto Kaporta
              </Link>
              <Link to="/hizmetler/kirsehir-oto-boya">Kırşehir Oto Boya</Link>
              <Link to="/hizmetler/kirsehir-boyasiz-gocuk-onarimi">
                Boyasız Göçük Onarımı PDR
              </Link>
              <Link to="/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi">
                Sigorta ve Kasko Hasar Onarımı
              </Link>
            </div>
          </section>

          <h2>Sık Sorulan Sorular</h2>

          <div className={classes.faq}>
            <h3>Lokal boya her hasarda uygulanır mı?</h3>
            <p>
              Hayır. Lokal boya için hasarın bölgesel olması ve boya yüzeyinin
              buna uygun olması gerekir. Araç incelendikten sonra en doğru
              yöntem belirlenir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Lokal boya ile tüm parça boya arasındaki fark nedir?</h3>
            <p>
              Lokal boya sadece hasarlı bölgeye uygulanır. Tüm parça boya ise
              parçanın tamamının boyanmasıdır. Hangi yöntemin doğru olduğu
              hasara göre belirlenir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Lokal boya renk farkı yapar mı?</h3>
            <p>
              Doğru yüzey hazırlığı ve renk uyumu ile yapılan lokal boya
              işleminde renk farkı minimum seviyede hedeflenir.
            </p>
          </div>

          <div className={classes.faq}>
            <h3>Sigorta ve kasko kapsamında lokal boya yapılır mı?</h3>
            <p>
              Hasarın durumuna ve poliçe kapsamına göre lokal boya işlemi
              sigorta veya kasko kapsamında değerlendirilebilir.
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

export default KirsehirLokalBoya;
