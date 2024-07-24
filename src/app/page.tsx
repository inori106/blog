import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getBlog, getCategories } from '@/lib/client';
import Pagination from '@/components/blog/Pagination';
import { LIST_LIMIT } from '@/lib/client';
import Sidebar from '@/components/common/Sidebar';
export default async function BlogPage() {
  const { datas, totalCount } = await getBlog(1);
  const categories = await getCategories();
  if (datas.length === 0) {
    return (
      <div className='px-4 md:px-6 2xl:px-80 lg:flex gap-6 py-8 justify-between min-h-screen'>
        <div className='lg:w-8/12'>
          <Section title={'記事一覧'} />
        </div>
        <div className='lg:w-4/12'>
          <Sidebar categories={categories} />
        </div>
      </div>
    );
  } else if (datas.length <= LIST_LIMIT) {
    return (
      <div className='px-4 md:px-6 2xl:px-80 lg:flex gap-6 py-8 justify-between min-h-screen'>
        <div className='lg:w-8/12'>
          <Section title={'記事一覧'} />
          <BlogList props={datas} />
        </div>
        <div className='lg:w-4/12'>
          <Sidebar categories={categories} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='px-4 md:px-6 2xl:px-80 lg:flex gap-6 py-8 justify-between min-h-screen'>
        <div className='lg:w-10/12'>
          <Section title={'記事一覧'} />
          <BlogList props={datas} />
          <Pagination totalCount={totalCount} currentPage={1} paths='/' />
        </div>
        <div className='lg:w-2/12'>
          <Sidebar categories={categories} />
        </div>
      </div>
    );
  }
}
