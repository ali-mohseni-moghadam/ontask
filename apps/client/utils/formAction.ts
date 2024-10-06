import { signupSchema } from './zodSchema/signup'
import { loginSchema } from './zodSchema/loginSchema'
import { cookies } from 'next/headers'

// =====================================================
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

// ====================================================
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

  const cookieStore = cookies()
  cookieStore.set('access-token', `${parsedData.success}`, {
    httpOnly: true,
    maxAge: 60 * 10,
    secure: true
  })

  console.log(cookieStore)

  return { success: true }
}
