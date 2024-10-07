export default function JobForm() {
  return (
    <div>
      <div className='p-6'>
        <form action={''}>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='email' className='mb-2 w-fit text-sm'>
              ایمیل
            </label>
            <input
              className='rounded-md bg-secondary p-2'
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
              className='rounded-md bg-secondary p-2'
              id='password'
              type='password'
              placeholder='رمزعبور'
            />
          </div>

          <button
            type='submit'
            className='w-full rounded-full bg-primary py-[5.5px] pe-7 ps-4 text-[#ffffff] duration-300 hover:border hover:border-secondary hover:bg-[#ffffff] hover:text-primary'
          >
            ثبت
          </button>
        </form>
      </div>
    </div>
  )
}
