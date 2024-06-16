import { getfilterCATblog, getCategoryname } from '@/lib/client';
import Section from '@/components/blog/Section';
import BlogList from '@/components/blog/BlogList';
import Pagination from '@/components/blog/Pagination';

export default async function CategoryPagiNation({
  params,
}: {
  params: { id: string; number: number };
}) {
  const { datas, totalCount } = await getfilterCATblog(
    params.id,
    params.number
  );
  const categoryname = await getCategoryname(params.id);
  if (datas.length === 0) {
    return <Section title={`カテゴリー：${categoryname}`} />;
  } else {
    return (
      <div>
        <Section title={`カテゴリー：${categoryname}`} />
        <BlogList props={datas} />
        <Pagination
          totalCount={totalCount}
          currentPage={params.number}
          paths={`/category/${params.id}/`}
        />
      </div>
    );
  }
}
