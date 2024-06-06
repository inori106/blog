import Link from 'next/link';
export default async function Page() {
  return (
    <main className='flex-1 px-64'>
      <section className='py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-4'>
            The React Framework
          </h1>
          <p className='text-gray-400 mb-8'>
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static & server rendering,
            TypeScript support, smart bundling, route pre-fetching, and more.
          </p>
          <div className='flex justify-center gap-4'>
            <Link
              href='/blog'
              className='inline-flex items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
              prefetch={false}
            >
              Read a blog
            </Link>
            <Link
              href='/contact'
              className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
              prefetch={false}
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
