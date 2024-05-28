import { getSearchblog } from '@/lib/client';
import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import TestPagination from '@/components/blog/Pagination';

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

  return (
    <div>
      {datas.length === 0 ? (
        <Section title='No Result' />
      ) : (
        <>
          <Section title={`Nation Search: ${query}`} />
          <BlogList props={datas} />
          <TestPagination
            totalCount={totalCount}
            currentPage={Number(params.number)}
            paths={`/search/${query}/`}
          />
        </>
      )}
    </div>
  );
}
