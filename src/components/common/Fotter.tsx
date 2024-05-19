import Link from 'next/link';

const Paths = [
  { name: 'About', href: '/' },
  { name: 'Blog', href: '/' },
  { name: 'Contact', href: '/contact' },
];

const Fotter: React.FC = () => {
  return (
    <>
      <footer className='bg-white dark:bg-gray-900 py-6 px-4 md:px-6 shadow-md dark:shadow-none'>
        <div className='container mx-auto flex flex-col items-center justify-between md:flex-row'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            © 2024 My Blog. All rights reserved.
          </p>
          <nav className='mt-4 md:mt-0'>
            <ul className='flex space-x-4'>
              {Paths.map((path) => (
                <li key={path.name}>
                  <Link
                    className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                    href={path.href}
                  >
                    {path.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
