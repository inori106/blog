import { getfilterCATblog, getCategoryname } from '@/lib/client';
import Section from '@/components/blog/Section';
import BlogList from '@/components/blog/BlogList';
import Pagination from '@/components/blog/Pagination';

export const revalidate = 0;
export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await getfilterCATblog(params.id, 1);
  const categoryname = await getCategoryname(params.id);
  const filterCATblog = res.datas;
  const totalCount = res.totalCount;

  return (
    <div>
      <Section title={`カテゴリー：${categoryname}`} />
      <BlogList props={filterCATblog} />
      <Pagination
        totalCount={totalCount}
        currentPage={1}
        paths={`/category/${params.id}/`}
      />
    </div>
  );
}
