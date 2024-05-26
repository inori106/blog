'use client';
import { FaSearch } from 'react-icons/fa';
import { SearchAction } from '@/actions/search';
import { useRef } from 'react';
import SubmitButton from '../common/button/Submit';
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
          color='gray'
          className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
        />
        <input
          className='w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50'
          placeholder='Search blog posts...'
          type='text'
          name='query'
          id='query'
        />
        <SubmitButton pretext='Search' loadingtext='Searching...' />
      </form>
    </div>
  );
};

export default SearchForm;
