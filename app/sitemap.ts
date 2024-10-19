import { ARTICLEFILTER, FAQFILTER, NEWSFILTER, PEACHFILTER } from '@/constants';
import { getList, getTagList } from '@/libs/microcms';

export default async function sitemap() {
  const baseURL = new URL(process.env.BASE_URL || 'http://localhost:3000');

  const articleData = await getList({
    filters: ARTICLEFILTER,
  });

  const articles = articleData.contents.map((article) => ({
    url: `${baseURL}/article/${article.id}`,
    lastModified: article.publishedAt,
  }));

  const faqData = await getList({
    filters: FAQFILTER,
  });

  const faqs = faqData.contents.map((faq) => ({
    url: `${baseURL}/faq/${faq.id}`,
    lastModified: faq.publishedAt,
  }));

  const faqCategoryData = await getTagList({
    filters: 'category[equals]faq',
  });

  const faqTags = faqCategoryData.contents.map((faq) => ({
    url: `${baseURL}/faq/tags/${faq.id}`,
    lastModified: faq.publishedAt,
  }));

  const newsData = await getList({
    filters: NEWSFILTER,
  });

  const news = newsData.contents.map((news) => ({
    url: `${baseURL}/news/${news.id}`,
    lastModified: news.publishedAt,
  }));

  const peachFightData = await getList({
    filters: PEACHFILTER,
  });

  const peachFight = peachFightData.contents.map((article) => ({
    url: `${baseURL}/news/${article.id}`,
    lastModified: article.publishedAt,
  }));

  const routes = [
    '',
    '/article',
    '/article/search',
    '/contact',
    '/faq',
    '/faq/search',
    '/faq/search',
    '/news',
    '/news-letter',
    '/peach-fight',
    '/peach-fight/search',
    '/pricing',
    '/privacy',
    '/reason',
    '/service',
    '/terms',
    '/thought',
  ].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articles, ...faqs, ...faqTags, ...news, ...peachFight];
}
