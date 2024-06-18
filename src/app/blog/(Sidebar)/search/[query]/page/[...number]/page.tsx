import { getSearchblog } from '@/lib/client';
import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import TestPagination from '@/components/blog/Pagination';
import { LIST_LIMIT } from '@/lib/client';
export const revalidate = 0;
export default async function SearcPagiNation({
  params,
}: {
  params: { query: string; number: string };
}) {
  const query = decodeURI(params.query);
  const { datas, totalCount } = await getSearchblog(
    query,
    Number(params.number)
  );
  if (datas.length === 0) {
    return <Section title={`${query}の検索結果`} />;
  } else if (datas.length <= LIST_LIMIT) {
    return (
      <div>
        <Section title={`${query}の検索結果`} />
        <BlogList props={datas} />
      </div>
    );
  } else {
    return (
      <div>
        <Section title={`${query}の検索結果`} />
        <BlogList props={datas} />
        <TestPagination
          totalCount={totalCount}
          currentPage={Number(params.number)}
          paths={`/search/${query}/`}
        />
      </div>
    );
  }
}
