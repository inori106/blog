import React from 'react';
export default function Loading() {
  return (
    <div className='flex justify-center items-center gap-6'>
      <div className='h-10 w-10 animate-spin border-[5px] border-sky-400 rounded-full  border-t-transparent'></div>
      <p className='text-[30px] font-weight dark:text-gray-200'>Loading</p>
    </div>
  );
}
