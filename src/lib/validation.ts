import { z } from 'zod';

const validate = z.object({
  name: z
    .string({
      invalid_type_error: 'Name must be a string',
    })
    .min(1, { message: 'Name is required' }),
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
    })
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  message: z
    .string({
      invalid_type_error: 'Message must be a string',
    })
    .min(1, { message: 'Message is required' }),
});

export default validate;
