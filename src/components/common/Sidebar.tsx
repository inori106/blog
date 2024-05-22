import Link from 'next/link';
import { Input } from '../ui/input';
import { getCategories } from '@/lib/client';
const Sidebar: React.FC = async () => {
  const categories = await getCategories();
  return (
    <>
      <aside className='bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-none p-6 mt-5 sm:mt-4 lg:mt-0'>
        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Search</h3>
          <div className='relative'>
            <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400' />
            <Input
              className='w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50'
              placeholder='Search blog posts...'
              type='text'
            />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>
            Categories
          </h3>
          <ul className='space-y-2'>
            {categories.map((category: any) => (
              <li key={category.id}>
                <Link
                  className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href='#'
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

export default Sidebar;
