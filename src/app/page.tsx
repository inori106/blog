import Link from 'next/link';
export default async function Page() {
  return (
    <main className='flex-1'>
      <section className='bg-gray-900 text-white py-12 md:py-24 lg:py-32'>
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
              href='#'
              className='inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors'
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              href='#'
              className='inline-flex items-center justify-center bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 rounded-md transition-colors'
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
