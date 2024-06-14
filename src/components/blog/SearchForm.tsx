'use client';
import { FaSearch } from 'react-icons/fa';
import { SearchAction } from '@/actions/SearchAction';
import SubmitButton from '../common/button/Submit';
import { useFormState } from 'react-dom';
import { SearchFormState } from '@/types/form';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm: React.FC = () => {
  const initialState: SearchFormState = {
    errors: {
      search: [],
    },
  };
  const [state, dispatch] = useFormState(SearchAction, initialState);
  const searchRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  return (
    <div className='relative'>
      <form
        action={async (payload: FormData) => {
          dispatch(payload);
          if (!state?.errors?.search === null) {
            searchRef.current?.reset();
          }
          router.refresh();
          router.push(`/blog/search/${payload.get('search')}`);
        }}
        className='flex'
        ref={searchRef}
      >
        <input
          className='w-full pl-1 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50'
          placeholder='Search blog posts...'
          type='text'
          name='search'
          id='search'
        />
        <SubmitButton
          pretext={<FaSearch color='white' className='m-auto' size={15} />}
          loadingtext='...'
        />
      </form>
      {state?.errors?.search && (
        <p className='text-red-500 text-xs mt-1'>{state.errors?.search}</p>
      )}
    </div>
  );
};

export default SearchForm;
