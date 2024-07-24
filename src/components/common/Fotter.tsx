import Link from 'next/link';

const Paths = [
  { name: 'About', href: '/about' },
  // { name: 'Blog', href: '/' },
  { name: 'Contact', href: '/contact' },
];

const Fotter: React.FC = () => {
  return (
    <footer className=' bg-white dark:bg-gray-950 py-6 px-4 md:px-64 shadow-sm border-t dark:border-none dark:shadow-none'>
      <div className='container mx-auto md:flex-row'>
        <p className='text-gray-600 dark:text-gray-400 text-sm text-center'>
          © 2024 SciServ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Fotter;
