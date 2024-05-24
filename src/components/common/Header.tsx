import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '../ui/sheet';
import { GiHamburgerMenu } from 'react-icons/gi';

const Paths = [
  { name: 'Home', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-gray-50'>
      <header className='bg-white dark:bg-gray-900 py-6 px-4 md:px-6 fixed top-0 left-0 right-0 z-50 shadow-md dark:shadow-none'>
        <div className='container mx-auto flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-50'>
            <Link href='/'>My Blog</Link>
          </h1>
          <nav className='hidden md:block'>
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
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button className='rounded-full' size='icon' variant='ghost'>
                  <GiHamburgerMenu className='h-6 w-6' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='left'>
                <nav className='grid gap-4 py-6'>
                  {Paths.map((path) => (
                    <Link
                      key={path.name}
                      href={path.href}
                      className='flex w-full items-center py-2 text-lg font-semibold dark:text-gray-50 hover:text-gray-900 dark:hover:text-gray-50'
                    >
                      {path.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
