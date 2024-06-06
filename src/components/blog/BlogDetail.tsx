import { Blog } from '@/types/blog';
import Parse from './Parse';
import dayjs from 'dayjs';

// type h1s = {
//   id?: string | undefined;
//   text?: string | undefined;
// };
type Props = Blog;
const BlogDetail: React.FC<Props> = ({
  title,
  content,
  createdAt,
  updatedAt,
  description,
  categories,
}) => {
  const create = dayjs(createdAt).format('YYYY-MM-DD');
  const update = dayjs(updatedAt).format('YYYY-MM-DD');

  // const matcher: string[] =
  //   content.match(/<h2(?![^>]*class|[^>]*data-id).*?>(.*?)<\/h2>/g) || [];
  // const ids = matcher.map((m) => {
  //   return m.match(/id="([^"]+)"/)?.[1];
  // });
  // const texts = matcher.map((m) => {
  //   return m.match(/<h2.*?>(.*?)<\/h2>/)?.[1];
  // });
  // const h2s: h1s[] = ids.map((id, index) => {
  //   return {
  //     id: id,
  //     text: texts[index],
  //   };
  // });
  return (
    <div className='bg-white dark:bg-gray-900 sm:px-12 px-3 rounded-xl shadow-md py-8 sm:py-20'>
      <section className='pb-16'>
        <div className='container'>
          <div className='max-w-3xl'>
            <div className='space-y-5 pb-8'>
              <h1 className='text-[30px] font-bold tracking-tight dark:text-gray-50'>
                {title}
              </h1>
              <div className='md:flex  items-center text-gray-500 dark:text-gray-400 md:space-x-4'>
                <div className=''>投稿日 {create}</div>
                {update && (
                  <div>
                    <p className=''>更新日 {update}</p>
                  </div>
                )}
              </div>
              {categories && (
                <div className='space-x-2'>
                  {categories.map((category) => (
                    <span
                      className='px-2 py-2 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-md'
                      key={category.id}
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className='text-[20px]  dark:text-[#ededed]'>{description}</p>
          </div>
        </div>
      </section>
      {/* {h2s.length !== 0 && (
        <section className='py-5'>
          <h2 className='text-[25px] font-bold dark:text-[#ededed]'>目次</h2>
          <div className=''>
            {h2s.map((h2) => (
              <Link href={`#${h2.id}`} key={h2.id} className='visible'>
                <p className='py-1 hover:text-gray-600 dark:text-[#ededed] dark:hover:text-gray-400'>
                  {'> '}
                  {h2.text}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )} */}
      <div className='prose prose-gray dark:prose-invert max-w-none'>
        <Parse content={content} />
      </div>
    </div>
  );
};

export default BlogDetail;
