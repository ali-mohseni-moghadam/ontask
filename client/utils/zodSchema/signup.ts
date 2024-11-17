import { z } from 'zod'

export const signupSchema = z
  .object({
    email: z.string().email('Invalid email address').trim(),
    password: z
      .string()
      .refine(
        val =>
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
            val
          ),
        {
          message:
            'Password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one special symbol'
        }
      ),
    confirmPassword: z.string()
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: 'Passwords do not match'
      })
    }
  })
