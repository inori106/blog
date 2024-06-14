import Link from 'next/link';
export default async function Page() {
  return (
    <div className='md:px-64 px-4 justify-center'>
      <section className='mx-auto py-12 md:py-24 lg:py-32'>
        <div className='px-4 md:px-6 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-4 dark:text-white'>
            The React Framework
          </h1>
          <p className='text-gray-400 mb-8'>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more.
          </p>
        </div>
        <div className='flex-none'>
          <Link
            href='/blog'
            className='inline-flex h-10 rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
            prefetch={false}
          >
            Read a blog
          </Link>
          <Link
            href='/contact'
            className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:text-white'
            prefetch={false}
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
