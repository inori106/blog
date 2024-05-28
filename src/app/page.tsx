import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getBlog } from '@/lib/client';
import Pagination from '@/components/blog/Pagination';
import { use } from 'react';
// export const revalidate = 0;
export default async function Page() {
  const { datas, totalCount } = await getBlog(1);

  return (
    <div>
      <Section title='Latest Post List' />
      <BlogList props={datas} />
      <Pagination totalCount={totalCount} currentPage={1} paths='/' />
    </div>
  );
}
