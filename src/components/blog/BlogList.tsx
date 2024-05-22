import Link from 'next/link';
import { getlist } from '@/lib/client';
import Image from 'next/image';
import { Blog, Category } from '@/types/blog';
import dayjs from 'dayjs';

export const revalidate = 0;
const BlogList: React.FC = async () => {
  const datas: Blog[] = await getlist();

  return (
    <main>
      <div className=''>
        {datas.map((data: Blog) => (
          <article
            className='flex flex-col md:flex-row gap-6 rounded-lg bg-white dark:bg-gray-900 shadow-md dark:shadow-none mx-auto mb-8'
            key={data.id}
          >
            <Image
              alt='Blog post image'
              className='h-48 w-full rounded-t-lg md:h-auto md:w-72 md:rounded-l-lg object-cover'
              height={300}
              src={data.eyecatch?.url ?? '/No_image.png'}
              width={400}
            />
            <div className='flex flex-col justify-between p-4 w-full'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  {data.categories.map((category: Category) => (
                    <Link
                      className='inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50 px-2 py-1 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300'
                      href='#'
                      key={category.id}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
                <h2 className='mb-2 text-2xl font-bold'>
                  <Link
                    className='text-gray-900 dark:text-gray-50 hover:underline underline-offset-8 ...'
                    href={`/blog/${data.id}`}
                  >
                    {data.title}
                  </Link>
                </h2>
                <div className='xl:flex items-center mb-2 xl:space-x-2 dark:text-gray-400'>
                  <p>投稿日：{dayjs(data.createdAt).format('YYYY-MM-DD')}</p>
                  {data.updatedAt && (
                    <>
                      <div className='xl:h-4 xl:w-px bg-gray-300 dark:bg-gray-700'></div>
                      <p>
                        更新日：{dayjs(data.updatedAt).format('YYYY-MM-DD')}
                      </p>
                    </>
                  )}
                </div>
                <p className='text-gray-600 dark:text-gray-400'>
                  {data.description}
                </p>
              </div>
              <Link
                className='mt-4 inline-flex items-center rounded-md bg-neutral-100 dark:bg-gray-50 dark:text-gray-900 px-4 py-2 text-sm font-medium text-black dark:hover:bg-gray-50/90 shadow transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50'
                href={`/blog/${data.id}`}
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
    // </div>
  );
};

export default BlogList;
