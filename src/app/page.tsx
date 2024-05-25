import BlogList from '@/components/blog/BlogList';
import Section from '@/components/blog/Section';
import { getlist } from '@/lib/client';
export const revalidate = 0;
export default async function Page() {
  const datas = await getlist();
  return (
    <>
      <main className=''>
        <Section title='Latest Post List' />
        <BlogList props={datas} />
      </main>
    </>
  );
}
