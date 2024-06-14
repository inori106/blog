import Link from 'next/link';
import { getCategories } from '@/lib/client';
import SearchForm from '../blog/SearchForm';
import { Category } from '@/types/blog';
type Props = {
  name: string;
  id: string;
};
const Test: React.FC = async () => {
  const categories = await getCategories();
  const items = [
    { title: 'Item 1', href: '#item-1' },
    { title: 'Item 2', href: '#item-2' },
    { title: 'Item 3', href: '#item-3' },
  ];
  return (
    <aside className='space-y-5 sticky top-24 inset-y-0'>
      <div className='p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-none'>
        <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Search</h3>
        <SearchForm />

        <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Categories</h3>
        <ul className='space-y-2' id='hight'>
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
          <li>まりも</li>
          <li>まりも</li>
          <li>まりも</li>
          <li>まりも</li>
        </ul>
      </div>
      <div
        className='p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-none
        flex-grow overflow-auto'
      >
        <li>目次</li>
        <li>目次</li>
        <li>目次</li>
        <li>目次</li>
      </div>
    </aside>
  );
};

export default Test;
