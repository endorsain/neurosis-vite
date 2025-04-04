import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    username: z
      .string()
      .regex(/^[a-z0-9._]+$/, {
        message: 'Username can only contain lowercase letters, numbers, and ._',
      })
      .min(5, { message: 'Username must be at least 5 characters long' })
      .max(25, { message: 'Username must be at most 25 characters long' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string().min(6, {
      message: 'Confirm Password must be at least 6 characters long',
    }),
  })
  .refine(data => data.pss === data.cP, {
    path: ['cP'],
    message: 'Passwords do not match',
  });

export const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});
