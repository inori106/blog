import Link from 'next/link';
import { getCategories } from '@/lib/client';
import { Category } from '@/types/blog';
import { redirect } from 'next/navigation';
import SearchForm from '../blog/SearchForm';

export const revalidate = 0;

const Sidebar: React.FC = async () => {
  const categories = await getCategories();

  return (
    <>
      <aside className='bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-none p-6 mt-5 sm:mt-4 lg:mt-0'>
        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Search</h3>
          <SearchForm />
        </div>
        <div>
          <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>
            Categories
          </h3>
          <ul className='space-y-2'>
            {categories.map((category: Category) => (
              <li key={category.id}>
                <Link
                  className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  href={`/blog/category/${category.id}`}
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

export default Sidebar;
