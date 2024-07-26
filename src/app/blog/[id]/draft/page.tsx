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

  console.log('id', id);

  const article = await client.getListDetail({
    endpoint: 'blog',
    contentId: id,
    queries: { draftKey },
  });

  return (
    <div>
      <div className='bg-destructive/10 text-center mt-8 font-bold text-green-400'>
        プレビュー中です画面
      </div>
      <BlogDetail
        title={article.title}
        content={article.content}
        createdAt={article.createdAt}
        updatedAt={article.updatedAt}
        description={article.description}
        categories={article.categories}
        eyecatch={article.eyecatch}
        id={article.id}
        publishedAt={article.publishedAt}
        revisedAt={article.revisedAt}
      />
    </div>
  );
}
