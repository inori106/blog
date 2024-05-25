const Section: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className='bg-gray-100 py-16 dark:bg-gray-800 mb-8'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center text-center max-w-[700px] mx-auto'>
          <h1 className='mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl'>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Section;
