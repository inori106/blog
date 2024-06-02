import Sidebar from '@/components/common/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='px-4 md:px-6 lg:px-28 2xl:px-64 xl:flex gap-8'>
      <div className='lg:w-4/6'>{children}</div>
      <div className='lg:w-2/6'>
        <Sidebar />
      </div>
    </div>
  );
}
