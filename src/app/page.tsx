import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getBlog } from '@/lib/client';
import Pagination from '@/components/blog/Pagination';

export const revalidate = 0;
export default async function Page() {
  const res = await getBlog(1);
  const datas = res.datas;
  const totalCount = res.totalCount;
  const str = 'test';

  return (
    <>
      <main className=''>
        <Section title='Latest Post List' />
        <BlogList props={datas} />
        <Pagination totalCount={totalCount} currentPage={1} paths='/' />
      </main>
    </>
  );
}
