import { getfilterCATblog, getCategoryname } from '@/lib/client';
import Link from 'next/link';
import BlogList from '@/components/blog/BlogList';

export const relative = 0;
export default async function blogPage({ params }: { params: { id: string } }) {
  const filterCATblog = await getfilterCATblog(params.id);
  const categoryname = await getCategoryname(params.id);

  return (
    <div>
      <h1>カテゴリー：{categoryname}</h1>
      {/* <ul>
        {filterCATblog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul> */}
      <BlogList props={filterCATblog} />
    </div>
  );
}
