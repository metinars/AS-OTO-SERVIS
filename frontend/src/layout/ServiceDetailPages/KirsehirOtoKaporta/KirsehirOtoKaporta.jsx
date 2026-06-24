import React from 'react';
import { Helmet } from 'react-helmet';
import classes from './KirsehirOtoKaporta.module.css';

const mapsUrl =
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&hl=tr-TR&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme&shem=epsd1,ltac,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=91c60961ce291378&utm_source=epsd1,ltac,rimspwouoe,sh/x/loc/osrp/m5/1';

function KirsehirOtoKaporta() {
  return (
    <>
      <Helmet>
        <title>Kırşehir Kaportacı | Kaporta Onarımı ve Oto Boya Hizmeti</title>
        <meta
          name="description"
          content="Kırşehir’de kaportacı arıyorsanız As Oto Kaporta; kaporta onarımı, oto boya, PDR ve sigorta hasar onarımı hizmeti sunar."
        />
        <meta
          name="keywords"
          content="kırşehir kaportacı, kırşehir oto kaporta, kaporta onarımı kırşehir, kırşehir kaporta, oto boya kırşehir, pdr kırşehir, as oto kaporta kırşehir"
        />
        <link
          rel="canonical"
          href="https://asotokaporta.com/hizmetler/kirsehir-oto-kaporta"
        />
      </Helmet>

      <main className={classes.serviceDetailPage}>
        <section className={classes.serviceHero}>
          <div className={classes.heroInner}>
            <span className={classes.serviceBadge}>Kırşehir Oto Kaporta</span>

            <h1>
              Kırşehir Kaportacı | Kaporta Onarımı, Oto Boya ve PDR Hizmeti
            </h1>

            <p>
              Kırşehir’de kaporta onarımı, oto boya, sigorta hasar onarımı ve
              boyasız göçük düzeltme hizmetlerinde aracınızın değerini koruyan
              titiz çözümler sunuyoruz.
            </p>

            <div className={classes.serviceButtons}>
              <a href="tel:+905389118309">Hemen Ara</a>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </section>

        <section className={classes.serviceContent}>
          <h2>Kırşehir’de Kaporta Onarımı Neden Önemlidir?</h2>

          <p>
            Araçlarda oluşan kaporta hasarları yalnızca dış görünümü değil,
            aracın ikinci el değerini de doğrudan etkiler. Kaza, sürtme, park
            hasarı veya darbe sonrası yapılan yanlış bir onarım; boya ton farkı,
            dalgalı yüzey, parça uyumsuzluğu ve değer kaybı gibi sorunlara neden
            olabilir.
          </p>

          <p>
            Bu yüzden Kırşehir’de kaportacı arayan araç sahipleri için en önemli
            konu, hasarın doğru analiz edilmesi ve araca en uygun onarım
            yönteminin seçilmesidir.
          </p>

          <h2>As Oto Kaporta’da Önceliğimiz Nedir?</h2>

          <p>
            As Oto Kaporta’da önceliğimiz, aracın gereksiz parça değişimine
            gitmeden mümkün olduğunca orijinal yapısını koruyarak onarılmasıdır.
            Her aracı sahibinin bize emanet ettiği bir değer olarak görüyor,
            işlem öncesi hasarı detaylı şekilde değerlendiriyoruz.
          </p>

          <p>
            Eğer parça onarılabiliyorsa öncelikle düzeltme yöntemini tercih
            ediyoruz. Güvenlik açısından risk oluşturan durumlarda ise parça
            değişimi en doğru şekilde uygulanır.
          </p>

          <h2>Kırşehir Oto Kaporta Hizmetlerimiz</h2>

          <div className={classes.serviceGrid}>
            <div>
              <h3>Kaporta Hasar Onarımı</h3>
              <p>
                Kaza, darbe ve sürtme kaynaklı kaporta hasarlarını titizlikle
                onarıyoruz.
              </p>
            </div>

            <div>
              <h3>Oto Boya Hizmeti</h3>
              <p>
                Renk uyumu ve yüzey kalitesine dikkat ederek profesyonel boya
                işlemleri yapıyoruz.
              </p>
            </div>

            <div>
              <h3>Boyasız Göçük Onarımı PDR</h3>
              <p>
                Boyası zarar görmemiş göçüklerde aracın orijinal boyasını
                koruyarak onarım sağlıyoruz.
              </p>
            </div>

            <div>
              <h3>Sigorta ve Kasko Hasar Onarımı</h3>
              <p>
                Sigorta ve kasko kapsamındaki hasar onarımlarında süreci araç
                sahibi adına kolaylaştırıyoruz.
              </p>
            </div>
          </div>

          <h2>Neden As Oto Kaporta?</h2>

          <ul className={classes.featureList}>
            <li>30 yılı aşkın kaporta ve hasar onarım tecrübesi</li>
            <li>Aracın orijinal yapısını korumaya odaklı işçilik</li>
            <li>Kaporta, boya, PDR ve sigorta hasar onarım hizmetleri</li>
            <li>Her araca kendi aracımız gibi yaklaşan çalışma anlayışı</li>
            <li>
              Kırşehir Kılıçözü Sanayi Sitesi’nde kolay ulaşılabilir konum
            </li>
          </ul>

          <h2>Sık Sorulan Sorular</h2>

          <div className={classes.faqBox}>
            <h3>Kaporta onarımı mı, parça değişimi mi daha doğru?</h3>
            <p>
              Her hasarda parça değişimi gerekmez. Hasar onarıma uygunsa önce
              parçanın orijinal haliyle düzeltilmesi tercih edilir.
            </p>
          </div>

          <div className={classes.faqBox}>
            <h3>Kaporta onarımı aracın değerini etkiler mi?</h3>
            <p>
              Doğru yapılan kaporta onarımı aracın değerini korumaya yardımcı
              olur. Yanlış işçilik ise değer kaybına neden olabilir.
            </p>
          </div>

          <div className={classes.faqBox}>
            <h3>Sigorta ve kasko hasar onarımı yapıyor musunuz?</h3>
            <p>
              Evet. Sigorta ve kasko kapsamındaki araç hasar onarımlarında
              hizmet veriyoruz.
            </p>
          </div>

          <div className={classes.faqBox}>
            <h3>Boyasız göçük onarımı her hasara uygulanır mı?</h3>
            <p>
              Hayır. PDR uygulanabilmesi için aracın boyasının zarar görmemiş
              olması gerekir. Hasar durumuna göre en doğru yöntem belirlenir.
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

export default KirsehirOtoKaporta;
