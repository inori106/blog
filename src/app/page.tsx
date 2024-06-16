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
        <div className='sm:flex justify-center sm:space-x-8'>
          <Link href='/blog' prefetch={false}>
            <div className='w-full py-3 bg-black rounded-md sm:w-40 text-center hover:bg-gray-800 dark:border-2 dark:border-gray-700 my-4'>
              <button className='text-white font-bold'>Read blog</button>
            </div>
          </Link>
          <Link href='/contact' prefetch={false}>
            <div
              className='w-full py-3 bg-white rounded-md sm:w-40 text-center hover:bg-gray-200
           border-2 my-4'
            >
              <button className='font-bold'>Contact us</button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
