import { z } from 'zod';

export const ContactValidate = z.object({
  name: z
    .string({
      invalid_type_error: 'お名前には文字列を入力してください',
    })
    .min(1, { message: 'お名前は必須です' }),
  email: z
    .string({
      invalid_type_error: 'メールアドレスには文字列を入力してください',
    })
    .email({
      message: '形式が正しくありません',
    }),
  message: z
    .string({
      invalid_type_error: 'メッセージには文字列を入力してください',
    })
    .min(1, { message: 'メッセージは必須です' }),
});

export const SearchValidate = z.object({
  search: z
    .string({
      invalid_type_error: 'Search must be a string',
    })
    .min(1, { message: 'Search is required' }),
});
