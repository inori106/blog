'use server';
import { SearchValidate } from '@/lib/validation';

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
  // permanentRedirect(`/blog/search/${search}`);
}
