import Link from 'next/link';
import { getCategories } from '@/lib/client';
import { FaSearch } from 'react-icons/fa';
import { revalidatePath } from 'next/cache';
import { redirect, permanentRedirect } from 'next/navigation';

export const revalidate = 0;

const Sidebar: React.FC = async () => {
  async function SearchAction(formData: FormData) {
    'use server';
    const word = String(formData.get('search'));
    if (word) {
      const urlkey = encodeURIComponent(word);
      return redirect(`/blog/search/${urlkey}`);
    } else {
      redirect('/');
    }
  }

  const categories = await getCategories();

  return (
    <>
      <aside className='bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-none p-6 mt-5 sm:mt-4 lg:mt-0'>
        <div className='mb-6'>
          <h3 className='text-lg font-bold mb-2 dark:text-gray-50'>Search</h3>
          <div className='relative'>
            <form action={SearchAction} className='flex gap-2'>
              <FaSearch
                color='black'
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
              />
              <input
                className='w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50'
                placeholder='Search blog posts...'
                type='text'
                name='search'
                id='search'
              />
              <button
                type='submit'
                className='rounded-md bg-black text-white p-2 dark:bg-gray-800
                dark:text-gray-50 hover:bg-gray-900 hover:text-gray-300 transition duration-300 ease-in-out'
              >
                Search
              </button>
            </form>
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
