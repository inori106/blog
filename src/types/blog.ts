import { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk';

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  content: string;
  categories: Category[];
} & MicroCMSDate;

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
} & MicroCMSDate;

export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  categories: Category[];
  publishedAt: string;
  updatedAt: string;
};
