import { getfilterCATblog, getCategoryname } from '@/lib/client';
import Section from '@/components/blog/Section';
import BlogList from '@/components/blog/BlogList';

export const revalidate = 0;
export default async function blogPage({ params }: { params: { id: string } }) {
  const filterCATblog = await getfilterCATblog(params.id);
  const categoryname = await getCategoryname(params.id);

  return (
    <div>
      <Section title={`カテゴリー：${categoryname}`} />
      <BlogList props={filterCATblog} />
    </div>
  );
}
