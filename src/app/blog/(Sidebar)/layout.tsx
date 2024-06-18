import Sidebar from '@/components/common/Sidebar';
import { getCategories } from '@/lib/client';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();
  return (
    <div className='px-4 md:px-6 2xl:px-64 3xl:px-80 lg:flex gap-3 py-8 justify-between min-h-screen'>
      <div className='lg:w-2/3'>{children}</div>
      <div className='lg:w-96'>
        <Sidebar categories={categories} />
      </div>
    </div>
  );
}
