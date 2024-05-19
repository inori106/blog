import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from 'microcms-js-sdk';
import { Blog, Category } from '@/types/blog';
export const revalidate = 0;
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export const getlist = async (queries?: MicroCMSQueries) => {
  const res = await client.get({
    endpoint: process.env.MICROCMS_ENDPOINT as string,
    queries,
  });
  return res.contents;
};
export const getCategories = async () => {
  const res = await client.get({
    endpoint: 'categories',
  });
  return res.contents as Blog[];
};

export const getdetail = async (id: string, queries: MicroCMSQueries) => {
  const res = await client.getListDetail<Blog>({
    endpoint: process.env.MICROCMS_ENDPOINT as string,
    contentId: id,
    queries,
  });
  return res;
};
