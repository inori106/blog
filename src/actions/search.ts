'use server';
import { redirect } from 'next/navigation';
export async function SearchAction(formData: FormData) {
  const query = String(formData.get('query'));
  if (query) {
    return redirect(`/blog/search/${encodeURIComponent(query)}`);
  } else {
    redirect('/');
  }
}
