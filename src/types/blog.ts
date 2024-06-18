import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  categories: Category[];
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
} & MicroCMSDate;
