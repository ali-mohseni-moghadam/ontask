import { signupSchema } from './zodSchema/signup'
import { loginSchema } from './zodSchema/loginSchema'

export async function handleSignup(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  const parsedData = signupSchema.safeParse({
    email,
    password,
    confirmPassword
  })

  if (!parsedData.success) {
    return { success: false, errors: parsedData.error.format() }
  }

  return { success: true }
}

export async function handleLogin(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  const parsedData = loginSchema.safeParse({
    email,
    password
  })

  if (!parsedData.success) {
    return { success: false, errors: parsedData.error.format() }
  }

  return { success: true }
}
