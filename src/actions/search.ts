'use server';
import { redirect } from 'next/navigation';
export async function SearchAction(formData: FormData) {
  const word = String(formData.get('search'));
  if (word) {
    const urlkey = encodeURIComponent(word);
    return redirect(`/blog/search/${urlkey}`);
  } else {
    redirect('/');
  }
}
