'use client';
import ContactFrom from '@/components/common/ContactForm';

export default function Contact() {
  return (
    <div className='py-8'>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='flex flex-col items-center text-center max-w-[760px] mx-auto'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl'>
            Contact
          </h1>
          <p className='my-4 text-xl text-gray-600 dark:text-gray-400'>
            ご連絡は以下のフォームからお願いします<br></br>
            XのDMでも受け付けています
          </p>
        </div>
      </div>
      <div className='max-w-[760px] mx-auto'>
        <ContactFrom />
      </div>
    </div>
  );
}
