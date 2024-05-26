import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getBlog } from '@/lib/client';
import Pagination from '@/components/blog/Pagination';

export default async function BlogPageNation({
  params,
}: {
  params: { number: string };
}) {
  const res = await getBlog(Number(params.number));
  const datas = res.datas;
  const totalCount = res.totalCount;

  return (
    <>
      <Section title={`${params.number} ページ`} />
      <BlogList props={datas} />
      <Pagination
        totalCount={totalCount}
        currentPage={Number(params.number)}
        paths='/'
      />
    </>
  );
}
