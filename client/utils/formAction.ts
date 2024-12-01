"use server"

import { signupSchema } from "./zodSchema/signup"
import { loginSchema } from "./zodSchema/loginSchema"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// =====================================================
export async function handleSignup(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

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
export async function handleLogin(formData: FormData): Promise<void> {
  const email = formData.get("email")
  const password = formData.get("password")

  const parsedData = loginSchema.parse({
    email,
    password
  })

  if (!parsedData.email || !parsedData.password) {
    throw new Error("email or password in incorrect")
  }

  const cookieStore = cookies()
  cookieStore.set("access-token", `${parsedData.email}`, {
    httpOnly: true,
    maxAge: 60 * 1000,
    secure: true
  })

  console.log(cookieStore)

  redirect("/dashboard")
}
