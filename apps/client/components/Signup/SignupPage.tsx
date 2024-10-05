import { handleSignup } from '@/utils/formAction'
import { redirect } from 'next/navigation'

export default function SignupPage() {
  const addUser = async (formData: FormData) => {
    'use server'

    const data = await handleSignup(formData)

    console.log(data)

    if (data.success) {
      redirect('/dashboard')
    }
  }

  return (
    <div className='mb-2 px-6 pt-5'>
      <div className='card rounded-3xl p-6'>
        <form action={addUser}>
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
          <div className='mb-6 flex flex-col'>
            <label htmlFor='password' className='mb-2 w-fit text-sm'>
              تایید رمزعبور
            </label>
            <input
              name='confirmPassword'
              className='bg-secondary rounded-md p-2'
              id='confirmPassword'
              type='password'
              placeholder='تایید رمزعبور'
            />
          </div>
          <button
            type='submit'
            className='bg-primary xsm:w-[50%] hover:text-primary hover:border-secondary w-full rounded-full py-[5.5px] pe-7 ps-4 text-[#ffffff] duration-300 hover:border hover:bg-[#ffffff] md:w-[30%]'
          >
            ثبت‌نام
          </button>
        </form>
      </div>
    </div>
  )
}
