import { getSearchblog } from '@/lib/client';
import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import TestPagination from '@/components/blog/Pagination';

export const revalidate = 0;

export default async function SearchPage({
  params,
}: {
  params: { query: string };
}) {
  const query = decodeURI(params.query);
  const { datas, totalCount } = await getSearchblog(decodeURI(query), 1);
  if (datas.length === 0) {
    return <Section title={`${query}の検索結果`} />;
  } else {
    return (
      <div>
        <Section title={`${query}の検索結果`} />
        <BlogList props={datas} />
        <TestPagination
          totalCount={totalCount}
          currentPage={1}
          paths={`/search/${query}/`}
        />
      </div>
    );
  }
}
