'use clinet';
import { useRef } from 'react';
import { formActions } from '@/actions/ContactAction';
import { useFormState } from 'react-dom';
import SubmitButton from '@/components/common/button/Submit';
import { ContactFormState } from '@/types/form';
import { FiGithub } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import Link from 'next/link';

const ContactFrom: React.FC = () => {
  const initialState: ContactFormState = {
    errors: {
      name: [],
      email: [],
      message: [],
    },
    message: null,
  };

  const [state, dispatch] = useFormState(formActions, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className='flex items-center px-4 sm:px-0'>
      <div className='bg-white dark:bg-gray-900 rounded-lg shadow-lg p-10 w-full'>
        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
          Contact Us
        </h2>
        {state?.message && (
          <p className='text-red-500 text-xl mt-1'>{state.message}</p>
        )}
        <form
          className='space-y-8'
          action={async (payload: FormData) => {
            dispatch(payload);
            if (state.message?.length === 0) {
              formRef.current?.reset();
            }
          }}
          ref={formRef}
        >
          <div>
            <label
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='py-3 mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300'
              id='name'
              name='name'
              placeholder='Enter your name'
              type='text'
            />
            {state?.errors?.name && (
              <p className='text-red-500 text-xs mt-1'>{state.errors?.name}</p>
            )}
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='py-3 mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300'
              id='email'
              name='email'
              placeholder='Enter your email'
              type='email'
            />
            {state?.errors?.email && (
              <p className='text-red-500 text-xs mt-1'>{state.errors?.email}</p>
            )}
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='py-3 px-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300'
              id='message'
              name='message'
              placeholder='Enter your message'
              rows={3}
            />
            {state?.errors?.message && (
              <p className='text-red-500 text-xs mt-1'>
                {state.errors?.message}
              </p>
            )}
          </div>
          <div className='flex container items-center justify-between'>
            <SubmitButton pretext='Send' loadingtext='Sending...' />
            <div className='flex space-x-4'>
              <Link href='https://twitter.com/' prefetch={false}>
                <RiTwitterXLine size={30} color='gray' />
              </Link>
              <FiGithub size={30} color='gray' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
