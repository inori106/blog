import Link from 'next/link';
import { Category } from '@/types/blog';
import SearchForm from '../blog/SearchForm';

type Props = {
  categories: Category[];
};
export const Sidebar: React.FC<Props> = async ({ categories }) => {
  return (
    <aside className='bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-none p-6 sticky top-24 mt-6 lg:mt-0'>
      <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Search</h3>
      <SearchForm />
      <div>
        <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Categories</h3>
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
  );
};

export default Sidebar;
