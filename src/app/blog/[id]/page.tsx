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
        id={data.id}
        title={data.title}
        content={data.content}
        updatedAt={data.updatedAt}
        description={data.description}
        categories={data.categories}
        publishedAt={data.publishedAt}
      />
    </>
  );
}
