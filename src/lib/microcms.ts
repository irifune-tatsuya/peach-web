import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';
import type { Article, Tag, Service } from '@/types/microcms';
import { FAQFILTER } from '@/constants';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Article>({
      endpoint: 'article',
      queries,
    })
    .catch(notFound);
  return listData;
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Article>({
      endpoint: 'article',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

export const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Tag>({
      endpoint: 'tags',
      queries,
    })
    .catch(notFound);

  return listData;
};

export const getTag = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Tag>({
      endpoint: 'tags',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

export const getServicesList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Service>({
      endpoint: 'services',
      queries,
    })
    .catch(notFound);
  return listData;
};

export const getServiceDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const mergedQueries = {
    ...queries,
    depth: 1 as const,
  };

  const detailData = await client
    .getListDetail<Service>({
      endpoint: 'services',
      contentId,
      queries: mergedQueries,
    })
    .catch(notFound);

  return detailData;
};

export const getFaqsByTag = async (tagId: string, queries?: MicroCMSQueries) => {
  const mergedQueries = {
    ...queries,
    filters: `${FAQFILTER}[and]tags[contains]${tagId}`,
    limit: 10,
  };

  const listData = await client
    .getList<Article>({
      endpoint: 'article',
      queries: mergedQueries,
    })
    .catch(notFound);

  return listData;
};
