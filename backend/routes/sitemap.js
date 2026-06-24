const express = require('express');
const router = express.Router();
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const Blog = require('../models/blog');

const getHostname = () => {
  return (process.env.CLIENT_URL || 'https://asotokaporta.com').replace(
    /\/$/,
    '',
  );
};

const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },

  { url: '/hakkimizda', changefreq: 'monthly', priority: 0.8 },
  { url: '/iletisim', changefreq: 'monthly', priority: 0.8 },
  { url: '/hizmetlerimiz', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },

  {
    url: '/hizmetler/kirsehir-oto-kaporta',
    changefreq: 'monthly',
    priority: 0.95,
  },
  {
    url: '/hizmetler/kirsehir-boyasiz-gocuk-onarimi',
    changefreq: 'monthly',
    priority: 0.95,
  },
  {
    url: '/hizmetler/kirsehir-oto-boya',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: '/hizmetler/kirsehir-sigorta-kasko-hasar-onarimi',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: '/hizmetler/kirsehir-lokal-boya',
    changefreq: 'monthly',
    priority: 0.85,
  },
  {
    url: '/hizmetler/kirsehir-dolu-hasari-onarimi',
    changefreq: 'monthly',
    priority: 0.85,
  },
];

router.get('/sitemap.xml', async (req, res) => {
  try {
    const hostname = getHostname();

    const blogs = await Blog.find(
      { status: 'aktif' },
      'titleUrl updatedAt createdAt',
    ).lean();

    const blogUrls = blogs
      .filter((blog) => blog.titleUrl)
      .map((blog) => ({
        url: `/blog/${blog.titleUrl}`,
        lastmodISO: (
          blog.updatedAt ||
          blog.createdAt ||
          new Date()
        ).toISOString(),
        changefreq: 'weekly',
        priority: 0.75,
      }));

    const allUrls = [...staticPages, ...blogUrls];

    const sitemapStream = new SitemapStream({ hostname });

    const xmlData = await streamToPromise(
      Readable.from(allUrls).pipe(sitemapStream),
    ).then((data) => data.toString());

    res.header('Content-Type', 'application/xml');
    res.header('Cache-Control', 'public, max-age=3600');
    res.send(xmlData);
  } catch (error) {
    console.error('Sitemap oluşturulamadı:', error);
    res.status(500).send('Sitemap oluşturulamadı');
  }
});

module.exports = router;
