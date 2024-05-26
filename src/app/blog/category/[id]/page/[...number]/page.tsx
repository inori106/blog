import { getfilterCATblog, getCategoryname } from '@/lib/client';
import Section from '@/components/blog/Section';
import BlogList from '@/components/blog/BlogList';
import Pagination from '@/components/blog/Pagination';

export const revalidate = 0;
export default async function CategoryPagiNation({
  params,
}: {
  params: { id: string; number: number };
}) {
  const res = await getfilterCATblog(params.id, params.number);
  const categoryname = await getCategoryname(params.id);
  const filterCATblog = res.datas;
  const totalCount = res.totalCount;
  console.log(totalCount);
  console.log(params.id, params.number);

  return (
    <div>
      <Section title={`カテゴリー：${categoryname}`} />
      <BlogList props={filterCATblog} />
      <Pagination
        totalCount={totalCount}
        currentPage={Number(params.number)}
        paths={`/category/${params.id}/`}
      />
    </div>
  );
}
