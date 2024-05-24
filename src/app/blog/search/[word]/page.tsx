import { getSearchblog } from '@/lib/client';
import BlogList from '@/components/blog/BlogList';

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
      <h1>Search : {keyword}</h1>
      {searchblog.length === 0 ? (
        <p>Not found</p>
      ) : (
        <BlogList props={searchblog} />
      )}
    </div>
  );
}
