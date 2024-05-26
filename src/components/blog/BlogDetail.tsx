import Image from 'next/image';
import { Blog } from '@/types/blog';
import Parse from './Parse';
import dayjs from 'dayjs';

type Props = Blog;
const BlogDetail: React.FC<Props> = ({
  title,
  content,
  createdAt,
  updatedAt,
  description,
  categories,
  eyecatch,
}) => {
  const create = dayjs(createdAt).format('YYYY-MM-DD');
  const update = dayjs(updatedAt).format('YYYY-MM-DD');
  return (
    <>
      <section className='bg-gray-100 dark:bg-gray-900 py-6 md:py-10 lg:py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl dark:text-gray-50'>
                {title}
              </h1>
              <div className='flex items-center space-x-2 text-gray-500 dark:text-gray-400'>
                <div className='h-4 bg-gray-300 dark:bg-gray-700' />
                <div>投稿日：{create}</div>
                {update && (
                  <>
                    <div className='h-4 w-px bg-gray-300 dark:bg-gray-700' />
                    <div>更新日：{update}</div>
                  </>
                )}
              </div>
              <p className='pl-2 dark:text-gray-400'>{description}</p>
              {categories && (
                <div className='flex space-x-2'>
                  <div className='pl-2 text-gray-500 dark:text-gray-400'>
                    カテゴリー：
                  </div>
                  {categories.map((category) => (
                    <span
                      className='px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded'
                      key={category.id}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className='prose prose-gray dark:prose-invert max-w-none'>
        {/* <figure>
          <Image
            alt='Eyecatch Image'
            className='rounded-lg object-cover w-full'
            height={200}
            src={eyecatch?.url ?? '/images/no-image.png'}
            width={400}
          />
          <figcaption className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
            A whimsical illustration of the Joke Tax Chronicles
          </figcaption>
        </figure> */}
        <p>{description}</p>
        <Parse content={content} />
      </div>
    </>
  );
};

export default BlogDetail;
