import { getdetail } from '@/lib/client';
import BlogDetail from '@/components/blog/BlogDetail';

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getdetail(params.id);
  return (
    <div>
      <BlogDetail
        title={data.title}
        content={data.content}
        createdAt={data.createdAt}
        updatedAt={data.updatedAt}
        description={data.description}
        categories={data.categories}
        eyecatch={data.eyecatch}
        id={''}
        publishedAt={''}
        revisedAt={''}
      />

      <h1>{data.title}</h1>
    </div>
  );
}
