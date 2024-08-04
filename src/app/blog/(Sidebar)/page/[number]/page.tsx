import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getBlog } from '@/lib/client';
import Pagination from '@/components/blog/Pagination';
import { LIST_LIMIT } from '@/lib/client';

export default async function BlogPageNation({
  params,
}: {
  params: { number: string };
}) {
  const { datas, totalCount } = await getBlog(Number(params.number));
  if (datas.length === 0) {
    return <Section title={`記事一覧`} />;
  } else if (datas.length <= LIST_LIMIT) {
    return (
      <div>
        <Section title={'記事一覧'} />
        <BlogList props={datas} />
      </div>
    );
  } else {
    return (
      <div>
        <Section title={'記事一覧'} />
        <BlogList props={datas} />
        <Pagination
          totalCount={totalCount}
          currentPage={Number(params.number)}
          paths='/'
        />
      </div>
    );
  }
}
