import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCarCrash,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRulerCombined,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa';

import styles from './KirsehirSasiOnarimi.module.css';

const KirsehirSasiDuzeltme = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'As Oto Kaporta & Boyasız Göçük Düzeltme',
    url: 'https://www.asotokaporta.com/hizmetler/kirsehir-sasi-duzeltme',
    image: 'https://www.asotokaporta.com/images/sasi-duzeltme.jpg',
    telephone: '+90XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kırşehir',
      addressRegion: 'Kırşehir',
      addressCountry: 'TR',
    },
    areaServed: [
      'Kırşehir',
      'Mucur',
      'Kaman',
      'Akpınar',
      'Boztepe',
      'Çiçekdağı',
    ],
    description:
      'Kırşehir şasi düzeltme ve şasi onarım hizmeti. Kazalı araçlarda şasi ölçümü, kontrollü doğrultma ve kapsamlı hasar onarımı.',
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Şasi Düzeltme ve Onarımı',
        serviceType: 'Araç şasi düzeltme ve doğrultma hizmeti',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Şasi düzeltme nedir?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Şasi düzeltme, kaza veya darbe sonucunda aracın taşıyıcı bölümlerinde oluşan eğilme, kayma ve ölçü bozukluklarının kontrollü çekme ve doğrultma işlemleriyle giderilmesidir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Şasi hasarı nasıl anlaşılır?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aracın yolda bir tarafa çekmesi, direksiyonun düz durmaması, kaporta parçaları arasındaki boşlukların eşit olmaması ve rot ayarının sürekli bozulması şasi hasarına işaret edebilir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Şasi düzeltme sonrasında araç güvenli olur mu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hasarın onarıma uygun olması ve işlemin doğru ölçüm, ekipman ve uygulama ile gerçekleştirilmesi halinde araç güvenli sürüş ölçülerine yeniden yaklaştırılabilir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Şasi düzeltme işlemi ne kadar sürer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'İşlem süresi hasarın şiddetine, hasarlı taşıyıcı noktaların sayısına ve yapılacak kaporta işlemlerine göre değişmektedir.',
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Kırşehir Şasi Düzeltme ve Onarımı | As Oto Kaporta</title>

        <meta
          name="description"
          content="Kırşehir şasi düzeltme ve onarım hizmeti. Kazalı araçlarda şasi ölçümü, şasi çekme, doğrultma ve kaporta hasar onarımı As Oto Kaporta'da."
        />

        <meta
          name="keywords"
          content="Kırşehir şasi düzeltme, Kırşehir şasi onarımı, şasi doğrultma, şasi çekme, araç şasi tamiri, kazalı araç onarımı, Kırşehir kaportacı, Kırşehir hasar onarım merkezi"
        />

        <link
          rel="canonical"
          href="https://www.asotokaporta.com/hizmetler/kirsehir-sasi-duzeltme"
        />

        <meta
          property="og:title"
          content="Kırşehir Şasi Düzeltme ve Onarımı | As Oto Kaporta"
        />

        <meta
          property="og:description"
          content="Kazalı araçlarda şasi ölçümü, kontrollü doğrultma, kaporta ve hasar onarım hizmetleri."
        />

        <meta
          property="og:url"
          content="https://www.asotokaporta.com/hizmetler/kirsehir-sasi-duzeltme"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.asotokaporta.com/images/sasi-duzeltme.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className={styles.serviceDetailPage}>
        <section className={styles.serviceHero}>
          <div className={styles.serviceHeroOverlay} />

          <div
            className={`${styles.serviceContainer} ${styles.serviceHeroContent}`}
          >
            <div className={styles.serviceBreadcrumb}>
              <Link to="/">Ana Sayfa</Link>
              <span>/</span>
              <Link to="/hizmetler">Hizmetlerimiz</Link>
              <span>/</span>
              <span>Şasi Düzeltme</span>
            </div>

            <div className={styles.serviceHeroText}>
              <span className={styles.serviceLabel}>
                Profesyonel Hasar Onarımı
              </span>

              <h1>Kırşehir Şasi Düzeltme ve Onarımı</h1>

              <p>
                Kaza sonucunda aracın taşıyıcı yapısında oluşan eğilme, kayma ve
                ölçü bozukluklarını kontrollü şasi doğrultma işlemleriyle
                gideriyoruz.
              </p>

              <div className={styles.serviceHeroButtons}>
                <a
                  href="tel:+95389118309"
                  className={styles.servicePrimaryButton}
                >
                  <FaPhoneAlt />
                  Bizi Arayın
                </a>

                <Link to="/iletisim" className={styles.serviceSecondaryButton}>
                  Yol Tarifi Alın
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.serviceIntroSection}>
          <div
            className={`${styles.serviceContainer} ${styles.serviceIntroGrid}`}
          >
            <div className={styles.serviceIntroContent}>
              <span className={styles.serviceSectionLabel}>
                Şasi Hasar Onarımı
              </span>

              <h2>
                Aracın taşıyıcı yapısındaki hasarlar doğru şekilde onarılmalıdır
              </h2>

              <p>
                Şasi, aracın motor, süspansiyon, kaporta ve güvenlik
                bileşenlerini taşıyan temel yapıdır. Özellikle önden, arkadan
                veya yandan alınan güçlü darbeler sonucunda şasi uçlarında,
                podyelerde, direklerde ve bağlantı noktalarında eğilme meydana
                gelebilir.
              </p>

              <p>
                Bu tür hasarlar yalnızca dışarıdan görünen kaporta parçalarının
                düzeltilmesiyle giderilemez. Aracın ölçülerinin, bağlantı
                noktalarının ve darbe yönünün birlikte değerlendirilmesi
                gerekir.
              </p>

              <p>
                As Oto Kaporta olarak araçtaki hasarı detaylı biçimde
                inceleyerek onarıma uygun bölgelere kontrollü çekme ve doğrultma
                işlemleri uyguluyoruz.
              </p>
            </div>

            <div className={styles.serviceHighlightCard}>
              <div className={styles.serviceHighlightIcon}>
                <FaCarCrash />
              </div>

              <h3>Şasi hasarı ihmal edilmemelidir</h3>

              <p>
                Şasideki ölçü bozuklukları aracın sürüş dengesini, lastik
                aşınmasını, kaporta parçalarının uyumunu ve güvenlik
                performansını etkileyebilir.
              </p>

              <ul>
                <li>
                  <FaCheckCircle />
                  Direksiyon ve yol tutuş kontrolü
                </li>

                <li>
                  <FaCheckCircle />
                  Taşıyıcı noktaların incelenmesi
                </li>

                <li>
                  <FaCheckCircle />
                  Kaporta boşluklarının kontrolü
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.serviceFeaturesSection}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceSectionHeading}>
              <span className={styles.serviceSectionLabel}>
                Profesyonel Uygulama
              </span>

              <h2>Şasi düzeltme işlemi nasıl yapılır?</h2>

              <p>
                Her aracın hasar yapısı farklıdır. Bu nedenle onarım süreci
                aracın darbe yönü ve deformasyon seviyesine göre planlanır.
              </p>
            </div>

            <div className={styles.serviceFeaturesGrid}>
              <article className={styles.serviceFeatureCard}>
                <div className={styles.serviceFeatureIcon}>
                  <FaCarCrash />
                </div>

                <span className={styles.serviceFeatureNumber}>01</span>

                <h3>Hasar analizi</h3>

                <p>
                  Aracın darbe aldığı bölüm, hasarın ilerleme yönü ve taşıyıcı
                  alanlardaki deformasyon detaylı olarak incelenir.
                </p>
              </article>

              <article className={styles.serviceFeatureCard}>
                <div className={styles.serviceFeatureIcon}>
                  <FaRulerCombined />
                </div>

                <span className={styles.serviceFeatureNumber}>02</span>

                <h3>Ölçüm ve kontrol</h3>

                <p>
                  Şasi, podye, direk, travers ve bağlantı noktalarındaki
                  sapmalar kontrol edilerek işlem planı oluşturulur.
                </p>
              </article>

              <article className={styles.serviceFeatureCard}>
                <div className={styles.serviceFeatureIcon}>
                  <FaTools />
                </div>

                <span className={styles.serviceFeatureNumber}>03</span>

                <h3>Kontrollü doğrultma</h3>

                <p>
                  Hasarlı bölgeye uygun yön ve kuvvet belirlenerek kontrollü
                  çekme ve doğrultma işlemi uygulanır.
                </p>
              </article>

              <article className={styles.serviceFeatureCard}>
                <div className={styles.serviceFeatureIcon}>
                  <FaShieldAlt />
                </div>

                <span className={styles.serviceFeatureNumber}>04</span>

                <h3>Son kontroller</h3>

                <p>
                  Onarımın ardından parça uyumları, bağlantı noktaları ve araç
                  üzerindeki ölçüler yeniden kontrol edilir.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.serviceDamageSection}>
          <div
            className={`${styles.serviceContainer} ${styles.serviceDamageGrid}`}
          >
            <div className={styles.serviceDamageContent}>
              <span className={styles.serviceSectionLabel}>
                Şasi Hasarı Belirtileri
              </span>

              <h2>Şasi düzeltme hangi durumlarda gerekebilir?</h2>

              <p>
                Şasi hasarı her zaman çıplak gözle kolayca fark edilmeyebilir.
                Özellikle daha önce onarım görmüş araçlarda aşağıdaki belirtiler
                taşıyıcı yapının kontrol edilmesini gerektirebilir.
              </p>

              <div className={styles.serviceCheckList}>
                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Aracın seyir sırasında sağa veya sola çekmesi</span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Direksiyonun düz konumda durmaması</span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Rot ayarının kısa sürede yeniden bozulması</span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Lastiklerin düzensiz ve tek taraflı aşınması</span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>
                    Kaput, çamurluk ve kapı boşluklarının eşit olmaması
                  </span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Tekerlek konumlarının farklı görünmesi</span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Ön veya arka taşıyıcı noktalarda eğilme bulunması</span>
                </div>

                <div className={styles.serviceCheckItem}>
                  <FaCheckCircle />
                  <span>Ağır kaza sonrasında parçaların yerine oturmaması</span>
                </div>
              </div>
            </div>

            <aside className={styles.serviceInfoBox}>
              <h3>Şasi kontrolü gerektiren hasarlar</h3>

              <ul>
                <li>Önden alınan ağır darbeler</li>
                <li>Arkadan şiddetli çarpmalar</li>
                <li>Yan darbe ve direk hasarları</li>
                <li>Takla atmış araçlar</li>
                <li>Podye ve şasi ucu eğilmeleri</li>
                <li>Travers bağlantı noktası hasarları</li>
                <li>Tekerlek konumu değişmiş araçlar</li>
                <li>Parça aralıkları bozulmuş araçlar</li>
              </ul>

              <Link to="/iletisim" className={styles.serviceInfoLink}>
                Aracınızı inceletin
                <FaArrowRight />
              </Link>
            </aside>
          </div>
        </section>

        <section className={styles.serviceProcessSection}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceSectionHeading}>
              <span className={styles.serviceSectionLabel}>
                As Oto Kaporta Yaklaşımı
              </span>

              <h2>Parça değişiminden önce onarım imkânını değerlendiriyoruz</h2>

              <p>
                Her hasarlı taşıyıcı bölümün doğrudan değiştirilmesi gerekmez.
                Hasarın seviyesi, metal yapısı ve güvenli onarım imkânı
                değerlendirildikten sonra doğru işlem yöntemi belirlenmelidir.
              </p>
            </div>

            <div className={styles.serviceProcessGrid}>
              <div className={styles.serviceProcessItem}>
                <span>01</span>

                <div>
                  <h3>Detaylı ön inceleme</h3>
                  <p>
                    Araç üzerindeki görünen ve gizli hasarlar birlikte
                    değerlendirilir.
                  </p>
                </div>
              </div>

              <div className={styles.serviceProcessItem}>
                <span>02</span>

                <div>
                  <h3>Onarım planlaması</h3>
                  <p>
                    Düzeltilecek, onarılacak veya değiştirilmesi gereken
                    bölümler belirlenir.
                  </p>
                </div>
              </div>

              <div className={styles.serviceProcessItem}>
                <span>03</span>

                <div>
                  <h3>Şasi ve kaporta işlemleri</h3>
                  <p>
                    Şasi düzeltme ile kaporta onarımı birbirine uyumlu şekilde
                    yürütülür.
                  </p>
                </div>
              </div>

              <div className={styles.serviceProcessItem}>
                <span>04</span>

                <div>
                  <h3>Boya ve montaj</h3>
                  <p>
                    Gerekli kaporta işlemleri tamamlandıktan sonra boya ve
                    montaj aşamasına geçilir.
                  </p>
                </div>
              </div>

              <div className={styles.serviceProcessItem}>
                <span>05</span>

                <div>
                  <h3>Son kalite kontrolü</h3>
                  <p>
                    Parça aralıkları, birleşim noktaları ve genel araç görünümü
                    kontrol edilir.
                  </p>
                </div>
              </div>

              <div className={styles.serviceProcessItem}>
                <span>06</span>

                <div>
                  <h3>Anahtar teslim hizmet</h3>
                  <p>
                    Araç kaporta, boya ve montaj işlemleri tamamlanmış şekilde
                    teslim edilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.serviceWhyUsSection}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceSectionHeading}>
              <span className={styles.serviceSectionLabel}>
                Neden As Oto Kaporta?
              </span>

              <h2>Kırşehir'de kapsamlı hasar onarım hizmeti</h2>
            </div>

            <div className={styles.serviceWhyUsGrid}>
              <div className={styles.serviceWhyUsCard}>
                <FaShieldAlt />
                <h3>30 yılı aşkın tecrübe</h3>
                <p>
                  Kaporta ve hasar onarımındaki tecrübemizle aracı bütün olarak
                  değerlendiriyoruz.
                </p>
              </div>

              <div className={styles.serviceWhyUsCard}>
                <FaTools />
                <h3>Kontrollü onarım</h3>
                <p>
                  Şasi çekme ve doğrultma işlemlerini hasarın yapısına göre
                  kontrollü şekilde uyguluyoruz.
                </p>
              </div>

              <div className={styles.serviceWhyUsCard}>
                <FaCarCrash />
                <h3>Tek noktada çözüm</h3>
                <p>
                  Şasi, kaporta, boya, parça değişimi ve montaj işlemlerini tek
                  noktada tamamlıyoruz.
                </p>
              </div>

              <div className={styles.serviceWhyUsCard}>
                <FaCheckCircle />
                <h3>Orijinal onarım önceliği</h3>
                <p>
                  Güvenli ve teknik olarak mümkün olduğu durumlarda mevcut
                  parçayı onararak korumayı önceliklendiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.serviceLocationSection}>
          <div
            className={`${styles.serviceContainer} ${styles.serviceLocationGrid}`}
          >
            <div className={styles.serviceLocationIcon}>
              <FaMapMarkerAlt />
            </div>

            <div className={styles.serviceLocationContent}>
              <span className={styles.serviceSectionLabel}>
                Kırşehir Şasi Düzeltme
              </span>

              <h2>Kırşehir ve çevre ilçelere hizmet veriyoruz</h2>

              <p>
                Kırşehir merkezde bulunan servisimizde kazalı araçlar için şasi
                düzeltme, kaporta onarımı, oto boya, parça değişimi ve sigorta
                hasar onarım hizmetleri sunuyoruz.
              </p>

              <p>
                Kırşehir merkez başta olmak üzere Mucur, Kaman, Akpınar,
                Boztepe, Çiçekdağı ve çevre bölgelerden gelen araçları kabul
                ediyoruz.
              </p>

              <Link to="/iletisim" className={styles.serviceTextLink}>
                İletişim ve konum bilgileri
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.serviceFaqSection}>
          <div className={styles.serviceContainer}>
            <div className={styles.serviceSectionHeading}>
              <span className={styles.serviceSectionLabel}>
                Merak Edilenler
              </span>

              <h2>Şasi düzeltme hakkında sık sorulan sorular</h2>
            </div>

            <div className={styles.serviceFaqList}>
              <details className={styles.serviceFaqItem}>
                <summary>Şasi düzeltme nedir?</summary>
                <p>
                  Şasi düzeltme; kaza sonucunda aracın taşıyıcı bölümlerinde
                  oluşan eğilme, kayma ve ölçü bozukluklarının uygun ekipman ve
                  kontrollü kuvvet uygulamasıyla giderilmesidir.
                </p>
              </details>

              <details className={styles.serviceFaqItem}>
                <summary>Şasi hasarı nasıl anlaşılır?</summary>
                <p>
                  Aracın bir tarafa çekmesi, direksiyonun düz durmaması, parça
                  boşluklarının eşit olmaması, lastiklerin düzensiz aşınması ve
                  rot ayarının sürekli bozulması şasi hasarının belirtileri
                  arasında olabilir.
                </p>
              </details>

              <details className={styles.serviceFaqItem}>
                <summary>
                  Şasi düzeltme sonrasında araç güvenli olur mu?
                </summary>
                <p>
                  Hasarın onarıma uygun olması ve işlemin doğru yöntemlerle
                  uygulanması halinde aracın taşıyıcı yapısı hedeflenen ölçülere
                  yaklaştırılabilir.
                </p>
              </details>

              <details className={styles.serviceFaqItem}>
                <summary>Her şasi hasarı onarılabilir mi?</summary>
                <p>
                  Hayır. Metal yapısı ciddi biçimde zayıflamış, kopmuş veya
                  güvenli onarım sınırlarını aşmış bölümlerde parça değişimi
                  gerekebilir.
                </p>
              </details>

              <details className={styles.serviceFaqItem}>
                <summary>Şasi düzeltme işlemi ne kadar sürer?</summary>
                <p>
                  İşlem süresi hasarın büyüklüğüne, işlem yapılacak taşıyıcı
                  noktaların sayısına ve ek kaporta-boya işlemlerine göre
                  değişir.
                </p>
              </details>

              <details className={styles.serviceFaqItem}>
                <summary>Kaskolu araçlarda şasi onarımı yapılır mı?</summary>
                <p>
                  Poliçe kapsamı ve eksper değerlendirmesine bağlı olarak şasi
                  ve kaporta onarım işlemleri kasko dosyası kapsamında
                  gerçekleştirilebilir.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className={styles.serviceCtaSection}>
          <div
            className={`${styles.serviceContainer} ${styles.serviceCtaContent}`}
          >
            <div>
              <span className={styles.serviceSectionLabel}>
                Aracınız İçin Ön Değerlendirme
              </span>

              <h2>Şasi hasarlı aracınızı profesyonel olarak inceleyelim</h2>

              <p>
                Aracınızdaki şasi ve kaporta hasarının onarım durumunu
                belirlemek için servisimizle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className={styles.serviceCtaButtons}>
              <a
                href="tel:+95389118309"
                className={styles.servicePrimaryButton}
              >
                <FaPhoneAlt />
                Hemen Arayın
              </a>

              <Link to="/iletisim" className={styles.serviceSecondaryButton}>
                İletişime Geçin
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default KirsehirSasiDuzeltme;
