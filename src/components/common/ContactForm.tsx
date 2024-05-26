'use clinet';
import { useRef } from 'react';
import { formActions } from '@/actions/formaction';
import { useFormStatus, useFormState } from 'react-dom';
import SubmitButton from '@/components/common/button/Submit';
import { useRouter } from 'next/navigation';
import { FiGithub } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

const ContactFrom: React.FC = () => {
  const formref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const initialState = {
    errors: {},
    messages: null,
  };
  // const { state, dispatch } = useFormState(formActions,initialState);
  return (
    <div className='flex items-center'>
      <div className='bg-white dark:bg-gray-900 rounded-lg shadow-lg p-10 w-full'>
        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
          Contact Us
        </h2>
        <form
          className='space-y-8'
          action={async (formData: FormData) => {
            formref.current?.reset();
            const res = await formActions(formData);
            if (res === true) {
              router.push('/');
              alert('Success');
            } else {
              alert('送信に失敗しました');
            }
          }}
          ref={formref}
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
              rows={5}
            />
          </div>
          <div className='flex container items-center justify-between'>
            <SubmitButton pretext='Send' loadingtext='Sending...' />
            <div className='flex space-x-4'>
              <RiTwitterXLine size={30} color='gray' />
              <FiGithub size={30} color='gray' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
