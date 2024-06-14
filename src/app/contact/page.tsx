'use client';
import ContactFrom from '@/components/common/ContactForm';

export default function Contact() {
  return (
    <div className=''>
      <section className=''>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col items-center text-center max-w-[700px] mx-auto'>
            <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl'>
              Get in Touch
            </h1>
            <p className='mt-6 text-xl text-gray-600 dark:text-gray-400'>
              Have a question or want to work together? Fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
      <div className='max-w-[700px] mx-auto py-4'>
        <ContactFrom />
      </div>
    </div>
  );
}
