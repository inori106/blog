'use client';
import { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';
const Paths = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/' },
  { name: 'Contact', href: '/contact' },
];
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => setIsOpen(!isOpen);
  return (
    <div className='dark:bg-gray-950 dark:text-gray-50'>
      <header className=''>
        <div
          className='flex items-center justify-between bg-white dark:bg-gray-900 shadow-sm py-4 px-4 md:px-6 xl:px-48 mx-auto border-b dark:border-none
      fixed top-0 left-0 right-0 z-50 opacity-95 dark:opacity-100 transition-all duration-300 ease-in-out'
        >
          <h1 className='text-2xl font-bold text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
            <Link href='/'>My Blog</Link>
          </h1>
          <nav className='hidden sm:flex gap-6'>
            {Paths.map((path) => (
              <Link
                key={path.name}
                href={path.href}
                className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
              >
                {path.name}
              </Link>
            ))}
          </nav>
          <button
            className='sm:hidden text-gray-500 hover:text-gray-90'
            onClick={handleMenuToggle}
          >
            {isOpen ? (
              <FiX color='gray' size={30} className='h-full w-full' />
            ) : (
              <GiHamburgerMenu
                color='gray'
                size={30}
                className='h-full w-full'
              />
            )}
          </button>
        </div>
        {isOpen && (
          <div className='fixed sm:hidden top-16 left-0 w-full h-full bg-white opacity-7 z-10 dark:bg-[#030712]'>
            <div className='bg-white dark:bg-[#030712] px-1 mt-2 rounded-m'>
              <nav>
                {Paths.map((path) => (
                  <Link
                    key={path.name}
                    href={path.href}
                    className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-[#0d1117]
                    text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  >
                    {path.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
export default Header;
