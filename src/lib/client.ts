import { createClient } from 'microcms-js-sdk';
import { Blog, Category } from '@/types/blog';

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

export const LIST_LIMIT: number = 15;

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export const getBlog = async (page: number) => {
  const res = (await client.getList({
    endpoint: process.env.MICROCMS_ENDPOINT as string,
    queries: {
      offset: (page - 1) * LIST_LIMIT,
      limit: LIST_LIMIT,
    },
  })) as { contents: Blog[]; totalCount: number };

  return { datas: res.contents, totalCount: res.totalCount };
};

export const getCategories = async () => {
  const res = await client.getList({
    endpoint: 'categories',
  });
  return res.contents as Category[];
};

export const getCategoryname = async (id: string) => {
  const res = (await client.get({
    endpoint: 'categories',
    contentId: id,
  })) as Category;
  return res.name as string;
};
export const getdetail = async (id: string) => {
  const res = await client.getListDetail<Blog>({
    endpoint: process.env.MICROCMS_ENDPOINT as string,
    contentId: id,
  });
  return res;
};
export const getfilterCATblog = async (id: string, page: number) => {
  const res = (await client.get({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: process.env.MICROCMS_ENDPOINT as string,
    queries: {
      filters: `categories[contains]${id}`,
      offset: (page - 1) * LIST_LIMIT,
      limit: LIST_LIMIT,
    },
  })) as { contents: Blog[]; totalCount: number };
  return { datas: res.contents, totalCount: res.totalCount };
};

export const getSearchblog = async (query: string, page: number) => {
  const res = (await client.get({
    customRequestInit: {
      cache: 'no-cache',
    },
    endpoint: process.env.MICROCMS_ENDPOINT as string,
    queries: {
      q: query,
      offset: (page - 1) * LIST_LIMIT,
      limit: LIST_LIMIT,
    },
  })) as { contents: Blog[]; totalCount: number };
  return { datas: res.contents, totalCount: res.totalCount };
};

export const StaticDetail = async () => {
  const res = await client.getList({
    endpoint: process.env.MICROCMS_ENDPOINT as string,
  });
  // Idsを[{ id: '1' }, { id: '2' }, { id: '3' }]の形に変換
  const Ids = res.contents.map((content) => {
    return { id: content.id };
  });
  return Ids;
};
