'use client';
import { FaSearch } from 'react-icons/fa';
import { SearchAction } from '@/actions/SearchAction';
import SubmitButton from '../common/button/Submit';
import { useFormState } from 'react-dom';
import { SearchFormState } from '@/types/form';
import { useRef } from 'react';
import { useActionState } from 'react';

const SearchForm: React.FC = () => {
  const initialState: SearchFormState = {
    errors: {
      search: [],
    },
  };
  const [state, dispatch] = useFormState(SearchAction, initialState);
  const searchRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <div className='relative'>
        <form
          action={async (payload: FormData) => {
            dispatch(payload);
            searchRef.current?.reset();
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
            name='search'
            id='search'
          />
          <SubmitButton pretext='Search' loadingtext='Searching...' />
        </form>
      </div>
      {state?.errors?.search && (
        <p className='text-red-500 text-xs mt-1'>{state.errors?.search}</p>
      )}
    </>
  );
};

export default SearchForm;
