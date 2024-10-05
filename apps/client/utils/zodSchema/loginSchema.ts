import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
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
    )
})
