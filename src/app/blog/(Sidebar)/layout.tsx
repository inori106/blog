import Sidebar from '@/components/common/Sidebar';
import { getCategories } from '@/lib/client';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();
  return (
    <div className='px-4 md:px-6 2xl:px-80 lg:flex gap-5 py-8 justify-between min-h-screen'>
      <div className='lg:w-8/12'>{children}</div>
      <div className='lg:w-4/12'>
        <Sidebar categories={categories} />
      </div>
    </div>
  );
}
