const express = require('express');
const router = express.Router();
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const Blog = require('../models/blog');

const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/hakkimizda', changefreq: 'monthly', priority: 0.8 },
  { url: '/iletisim', changefreq: 'monthly', priority: 0.8 },
  { url: '/hizmetlerimiz', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
];

router.get('/sitemap.xml', async (req, res) => {
  try {
    const blogs = await Blog.find({}, 'titleUrl updatedAt').lean();

    const sitemapStream = new SitemapStream({
      hostname: process.env.CLIENT_URL,
    });

    const blogUrls = blogs.map((blog) => ({
      url: `/blog/${blog.titleUrl}`, // Blog URL'lerini ekle
      lastmodISO: blog.updatedAt.toISOString(), // Son güncellenme tarihini ekle
      changefreq: 'weekly', // Değişiklik sıklığını belirle
      priority: 0.8,
    }));

    const allUrls = [...staticPages, ...blogUrls];

    const xmlData = await streamToPromise(
      Readable.from(allUrls).pipe(sitemapStream)
    ).then((data) => data.toString());

    res.header('Content-Type', 'application/xml');
    res.send(xmlData);
  } catch (error) {
    console.error('Sitemap oluşturulamadı:', error);
    res.status(500).end();
  }
});

module.exports = router;
