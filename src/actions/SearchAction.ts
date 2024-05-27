'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { SearchValidate } from '@/lib/validation';
import { redirect } from 'next/navigation';

export async function SearchAction(prevState: any, formData: FormData) {
  const validateResult = SearchValidate.safeParse({
    search: formData.get('search'),
  });
  if (!validateResult.success) {
    const errors = {
      errors: validateResult.error.flatten().fieldErrors,
    };
    return errors;
  }
  const { search } = validateResult.data;
  redirect(`/blog/search/${encodeURIComponent(search)}`);
}
