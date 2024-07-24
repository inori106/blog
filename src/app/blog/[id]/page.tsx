import { getdetail } from '@/lib/client';
import BlogDetail from '@/components/blog/BlogDetail';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = await getdetail(params.id);
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getdetail(params.id);

  return (
    <>
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
    </>
  );
}
