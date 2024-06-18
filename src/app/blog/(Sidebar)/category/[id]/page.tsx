import { getfilterCATblog, getCategoryname } from '@/lib/client';
import Section from '@/components/blog/Section';
import BlogList from '@/components/blog/BlogList';
import Pagination from '@/components/blog/Pagination';
import { LIST_LIMIT } from '@/lib/client';
export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const { datas, totalCount } = await getfilterCATblog(params.id, 1);
  const categoryname = await getCategoryname(params.id);
  if (datas.length === 0) {
    return <Section title={`カテゴリー：${categoryname}`} />;
  } else if (datas.length <= LIST_LIMIT) {
    return (
      <div>
        <Section title={`カテゴリー：${categoryname}`} />
        <BlogList props={datas} />
      </div>
    );
  } else {
    return (
      <div>
        <Section title={`カテゴリー：${categoryname}`} />
        <BlogList props={datas} />
        <Pagination
          totalCount={totalCount}
          currentPage={1}
          paths={`/category/${params.id}/`}
        />
      </div>
    );
  }
}
