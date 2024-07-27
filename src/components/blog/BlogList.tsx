import Link from 'next/link';
import { Article, Category } from '@/types/blog';
import dayjs from 'dayjs';

type Props = {
  props: Article[];
};
const BlogList: React.FC<Props> = async ({ props }) => {
  return (
    <div className='space-y-6'>
      {props.map((data: Article) => (
        <article
          className='rounded-lg bg-white dark:bg-gray-900 shadow-md dark:shadow-none mx-auto w-full h-max'
          key={data.id}
        >
          <div className='flex flex-col p-5 w-full'>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                {data.categories.map((category: Category) => (
                  <Link
                    className='inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50 px-2 py-1 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300'
                    href={`blog/category/${category.id}`}
                    key={category.id}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <h2 className='text-2xl font-bold'>
                <Link
                  className='text-gray-900 dark:text-gray-50 hover:underline underline-offset-8 ...'
                  href={`/blog/${data.id}`}
                >
                  {data.title}
                </Link>
              </h2>

              <div className='xl:flex items-center text-gray-500 dark:text-gray-400 xl:space-x-2'>
                <p>投稿日：{dayjs(data.publishedAt).format('YYYY-MM-DD')}</p>
                {data.publishedAt !== data.updatedAt && (
                  <p>更新日：{dayjs(data.updatedAt).format('YYYY-MM-DD')}</p>
                )}
              </div>
              <p className='text-gray-600 dark:text-gray-400 text-clip'>
                {data.description}
              </p>
            </div>
            <Link
              className='mt-4 rounded-md bg-neutral-100 dark:bg-[#1A1A1A] dark:text-gray-400 px-4 py-2 text-sm font-medium text-black dark:hover:bg-zinc-800 shadow transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50'
              href={`/blog/${data.id}`}
            >
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
