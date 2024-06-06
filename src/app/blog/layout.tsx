import Sidebar from '@/components/common/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='px-4 md:px-6 lg:px-28 2xl:px-64 lg:flex gap-5'>
      <div className='lg:w-8/12'>{children}</div>
      <div className='lg:w-4/12'>
        <Sidebar />
      </div>
    </div>
  );
}
