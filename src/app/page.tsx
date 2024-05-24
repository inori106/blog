import BlogList from '@/components/blog/BlogList';
import { getlist } from '@/lib/client';
export const revalidate = 0;
export default async function Page() {
  const datas = await getlist();
  return (
    <>
      <main className=''>
        <BlogList props={datas} />
      </main>
    </>
  );
}
