import { handleLogin } from '@/utils/formAction'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const loginUser = async (formData: FormData) => {
    'use server'

    const data = await handleLogin(formData)

    if (data.success) {
      redirect('/dashboard')
    }
  }
  return (
    <div className='mb-2 px-6 pt-5 md:mx-auto md:w-[60%]'>
      <div className='card rounded-3xl p-6'>
        <form action={loginUser}>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='email' className='mb-2 w-fit text-sm'>
              ایمیل
            </label>
            <input
              className='bg-secondary rounded-md p-2'
              name='email'
              id='email'
              type='text'
              placeholder='ایمیل'
            />
          </div>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='password' className='mb-2 w-fit text-sm'>
              رمز‌عبور
            </label>
            <input
              name='password'
              className='bg-secondary rounded-md p-2'
              id='password'
              type='password'
              placeholder='رمزعبور'
            />
          </div>

          <button
            type='submit'
            className='bg-primary hover:text-primary hover:border-secondary w-full rounded-full py-[5.5px] pe-7 ps-4 text-[#ffffff] duration-300 hover:border hover:bg-[#ffffff]'
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}
