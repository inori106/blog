'use client';
import { FaSearch } from 'react-icons/fa';
import { SearchAction } from '@/actions/search';
import { useRef } from 'react';
const SearchForm: React.FC = () => {
  const searchRef = useRef<HTMLFormElement>(null);
  return (
    <div className='relative'>
      <form
        action={async (formData: FormData) => {
          searchRef.current?.reset();
          await SearchAction(formData);
        }}
        className='flex gap-2'
        ref={searchRef}
      >
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
          className='rounded-md bg-black text-white p-2 dark:bg-gray-200
                dark:text-gray-800 hover:bg-gray-400 hover:text-gray-900 transition duration-300 ease-in-out'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
