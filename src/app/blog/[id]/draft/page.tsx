import { Blog } from '@/types/blog';
import BlogDetail from '@/components/blog/BlogDetail';
import { client } from '@/lib/client';
export const metadata = {
  robots: 'noindex',
};

export const revalidate = 0;

type Props = {
  params: { id: string };
  searchParams: { [draftKey: string]: string | undefined };
};

export default async function PreviewPage({ params, searchParams }: Props) {
  const { id } = params;
  const { draftKey } = searchParams;

  const article = (await client.getListDetail({
    endpoint: 'blog',
    contentId: id,
    queries: { draftKey },
  })) as Blog;

  return (
    <div>
      <div className='bg-destructive/10 text-center mt-8 font-bold text-green-400'>
        プレビュー画面です
      </div>
      <BlogDetail
        id={article.id}
        title={article.title}
        description={article.description}
        content={article.content}
        categories={article.categories}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
      />
    </div>
  );
}
