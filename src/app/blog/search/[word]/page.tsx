import { getSearchblog } from '@/lib/client';
import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
export const revalidate = 0;
export default async function SearchPage({
  params,
}: {
  params: { word: string };
}) {
  const keyword = decodeURI(params.word);
  const searchblog = await getSearchblog(keyword);

  return (
    <div>
      {searchblog.length === 0 ? (
        <Section title='No Result' />
      ) : (
        <>
          <Section title={`Search: ${keyword}`} />
          <BlogList props={searchblog} />
        </>
      )}
    </div>
  );
}
