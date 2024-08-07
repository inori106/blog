'use client';
import { FaSearch } from 'react-icons/fa';
import { SearchAction } from '@/actions/SearchAction';
import SubmitButton from '../common/button/Submit';
import { useFormState } from 'react-dom';
import { SearchFormState } from '@/types/form';

const SearchForm: React.FC = () => {
  const initialState: SearchFormState = {
    errors: {
      search: [],
    },
  };
  const [state, dispatch] = useFormState(SearchAction, initialState);
  return (
    <div className='relative'>
      <form
        action={async (payload: FormData) => {
          dispatch(payload);
        }}
        className='flex'
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
