import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className='flex flex-col'>
      <section className='bg-gray-100 py-16 dark:bg-gray-800'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col items-center text-center max-w-[700px] mx-auto'>
            <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl'>
              Acme Software
            </h1>
            <p className='mt-6 text-xl text-gray-600 dark:text-gray-400'>
              Acme Software is a leading provider of innovative software
              solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>
      <section className='py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-[700px] mx-auto'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
                Our Mission
              </h2>
              <p className='mt-6 text-xl text-gray-600 dark:text-gray-400'>
                At Acme Software, our mission is to create cutting-edge
                technologies that transform the way businesses operate. We are
                committed to empowering our clients with the tools and expertise
                they need to thrive in the digital landscape.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
                Our Values
              </h2>
              <ul className='mt-6 space-y-4 text-xl text-gray-600 dark:text-gray-400'>
                <li>Innovation</li>
                <li>Integrity</li>
                <li>Collaboration</li>
                <li>Customer-Centricity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 py-20 dark:bg-gray-800'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-[700px] mx-auto'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
                Our History
              </h2>
              <p className='mt-6 text-xl text-gray-600 dark:text-gray-400'>
                Acme Software was founded in 2010 by a team of passionate
                technologists who saw the need for innovative software solutions
                that could help businesses thrive in the digital age. Since
                then, we have grown to become a leading provider of cutting-edge
                software products and services, serving clients across a wide
                range of industries.
              </p>
            </div>
            <div>
              <Image
                alt='Acme Software History'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                height={310}
                src='/placeholder.svg'
                width={550}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
