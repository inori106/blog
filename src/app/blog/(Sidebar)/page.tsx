import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getBlog } from '@/lib/client';
import Pagination from '@/components/blog/Pagination';

export default async function BlogPage() {
  const { datas, totalCount } = await getBlog(1);

  return (
    <>
      <Section title={'記事一覧'} />
      <BlogList props={datas} />
      <Pagination totalCount={totalCount} currentPage={1} paths='/' />
    </>
  );
}
