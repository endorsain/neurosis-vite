import { z } from 'zod';

export const addTimerSchema = z.object({
  anm: z
    .string()
    .regex(/^[a-zA-Z0-9._]+$/, {
      message:
        'Field can only contain letters, numbers, dots (.), and underscores (_).',
    })
    .max(30, { message: 'Field must be at most 30 characters long.' }),
});
