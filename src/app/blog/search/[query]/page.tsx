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
  const res = await getSearchblog(decodeURI(query), 1);
  const searchblog = res.datas;
  const totalCount = res.totalCount;

  return (
    <div>
      {searchblog.length === 0 ? (
        <Section title={`${query} : No Result`} />
      ) : (
        <>
          <Section title={`Search: ${query}`} />
          <BlogList props={searchblog} />
          <TestPagination
            totalCount={totalCount}
            currentPage={1}
            paths={`/search/${query}/`}
          />
        </>
      )}
    </div>
  );
}
