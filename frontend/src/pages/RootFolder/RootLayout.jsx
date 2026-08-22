import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import MainNavigation from '../../layout/MainNavigation';
import Footer from '../../layout/Footer/Footer';
import FixedSocial from '../../components/Helper/FixedSocial/FixedSocial';

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  /*
  |--------------------------------------------------------------------------
  | AS OTO KAPORTA - STRUCTURED DATA
  |--------------------------------------------------------------------------
  */

  const autoRepairSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',

    '@id': 'https://asotokaporta.com/#business',

    name: 'AS Oto Kaporta',

    url: 'https://asotokaporta.com',

    telephone: '+905389118309',

    description:
      "AS Oto Kaporta, Kırşehir'de kaporta onarımı, oto boya, boyasız göçük onarımı (PDR), lokal boya, dolu hasarı onarımı ve sigorta/kasko hasar onarımı hizmetleri sunmaktadır.",

  address: {
  '@type': 'PostalAddress',
  addressLocality: 'Kırşehir',
  addressRegion: 'Kırşehir',
  addressCountry: 'TR',
},

geo: {
  '@type': 'GeoCoordinates',
  latitude: 39.120869,
  longitude: 34.19079,
},

hasMap:
  'https://www.google.com.tr/search?kgmid=/g/11s50ww3wg&q=As+Oto+Kaporta+%26+Boyas%C4%B1z+G%C3%B6%C3%A7%C3%BCk+D%C3%BCzeltme',

    areaServed: {
      '@type': 'City',
      name: 'Kırşehir',
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Araç Hasar Onarım Hizmetleri',

      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oto Kaporta Onarımı',
            url: 'https://asotokaporta.com/hizmetler/kirsehir-oto-kaporta',
          },
        },

        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Boyasız Göçük Onarımı (PDR)',
            url: 'https://asotokaporta.com/hizmetler/kirsehir-boyasiz-gocuk-onarimi',
          },
        },

        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Oto Boya',
            url: 'https://asotokaporta.com/hizmetler/kirsehir-oto-boya',
          },
        },

        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sigorta ve Kasko Hasar Onarımı',
            url: 'https://asotokaporta.com/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi',
          },
        },

        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lokal Boya',
            url: 'https://asotokaporta.com/hizmetler/kirsehir-lokal-boya',
          },
        },

        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dolu Hasarı Onarımı',
            url: 'https://asotokaporta.com/hizmetler/kirsehir-dolu-hasari-onarimi',
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(autoRepairSchema)}
        </script>
      </Helmet>

      <MainNavigation />

      <main>
        <Outlet />
      </main>

      <FixedSocial />

      <Footer />
    </>
  );
};

export default RootLayout;