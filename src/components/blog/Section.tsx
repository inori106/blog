const Section: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='pb-6'>
      <section className='rounded-lg py-6 bg-white text-center font-bold text-3xl dark:bg-gray-900 dark:text-gray-50 shadow-md'>
        <p>{title}</p>
      </section>
    </div>
  );
};
export default Section;
