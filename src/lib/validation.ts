import { z } from 'zod';

export const ContactValidate = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .min(1, { message: 'Name is required' }),
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
    })
    .email({ message: 'Invalid email address' }),
  message: z
    .string({
      invalid_type_error: 'Message must be a string',
    })
    .min(1, { message: 'Message is required' }),
});

export const SearchValidate = z.object({
  search: z
    .string({
      invalid_type_error: 'Search must be a string',
    })
    .min(1, { message: 'Search is required' }),
});
