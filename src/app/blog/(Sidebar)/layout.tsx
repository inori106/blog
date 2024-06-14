import Sidebar from '@/components/common/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='px-4 md:px-6 2xl:px-64 3xl:px-80 lg:flex gap-3 py-8 min-h-screen justify-between'>
      <div className='lg:w-2/3'>{children}</div>
      <div className='lg:w-96'>
        <Sidebar />
      </div>
    </div>
  );
}
