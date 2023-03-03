import { z } from 'zod';

export const formSchema = z.object({
  title: z.string().min(0),
  summary: z.string().min(0),
});
