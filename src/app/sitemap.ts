import { ARTICLEFILTER, FAQFILTER, LIMIT100, NEWSFILTER, PEACHFILTER } from '@/constants';
import { getList } from '@/lib/microcms';
import type { Tag } from '@/types/microcms';

export const sitemap = async () => {
  const baseURL = (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');

  const articleData = await getList({
    filters: ARTICLEFILTER,
    limit: LIMIT100,
  });

  const articles = articleData.contents.map((article) => ({
    url: `${baseURL}/article/${article.id}`,
    lastModified: article.publishedAt,
  }));

  const faqData = await getList({
    filters: FAQFILTER,
    limit: LIMIT100,
  });

  const faqs = faqData.contents.map((faq) => ({
    url: `${baseURL}/faq/${faq.id}`,
    lastModified: faq.publishedAt,
  }));

  const uniqueTagsMap = new Map<string, Tag>();
  faqData.contents.forEach((article) => {
    (article.tags || []).forEach((tag) => {
      uniqueTagsMap.set(tag.id, tag);
    });
  });
  const faqTags = Array.from(uniqueTagsMap.values()).map((tag) => ({
    url: `${baseURL}/faq/tags/${tag.id}`,
    lastModified: tag.updatedAt,
  }));

  const newsData = await getList({
    filters: NEWSFILTER,
    limit: LIMIT100,
  });

  const news = newsData.contents.map((news) => ({
    url: `${baseURL}/news/${news.id}`,
    lastModified: news.publishedAt,
  }));

  const peachFightData = await getList({
    filters: PEACHFILTER,
    limit: LIMIT100,
  });

  const peachFight = peachFightData.contents.map((article) => ({
    url: `${baseURL}/peach-fight/${article.id}`,
    lastModified: article.publishedAt,
  }));

  const routes = [
    '/',
    '/achievements',
    '/achievements/design/lp01',
    '/article',
    '/article/search',
    '/contact',
    '/faq',
    '/faq/search',
    '/faq/tags',
    '/news',
    '/newsletter',
    '/peach-fight',
    '/peach-fight/search',
    '/pekechi',
    '/pricing',
    '/privacy',
    '/reason',
    '/service',
    '/terms',
    '/thought',
    '/tokushoho',
  ].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articles, ...faqs, ...faqTags, ...news, ...peachFight];
};

export default sitemap;
