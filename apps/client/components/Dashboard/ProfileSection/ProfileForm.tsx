export default function ProfileForm() {
  return (
    <div>
      <div className='py-6'>
        <form action={''}>
          <div className='mb-4 flex flex-col'>
            <label htmlFor='name' className='mb-2 w-fit text-sm'>
              نام
            </label>
            <input
              className='rounded-md bg-secondary p-2'
              name='name'
              id='name'
              type='text'
              placeholder='نام'
            />
          </div>

          <div className='mb-4 flex flex-col'>
            <label htmlFor='lastName' className='mb-2 w-fit text-sm'>
              نام خانوداگی
            </label>
            <input
              name='lastName'
              className='rounded-md bg-secondary p-2'
              id='lastName'
              type='text'
              placeholder='نام خانوادگی'
            />
          </div>

          <div className='mb-4 flex flex-col'>
            <label htmlFor='email' className='mb-2 w-fit text-sm'>
              آدرس ایمیل
            </label>
            <input
              name='email'
              className='rounded-md bg-secondary p-2'
              id='email'
              type='text'
              placeholder='آدرس ایمیل'
            />
          </div>

          <div className='mb-4 flex flex-col'>
            <label htmlFor='mobile' className='mb-2 w-fit text-sm'>
              شماره تلفن
            </label>
            <input
              name='mobile'
              className='rounded-md bg-secondary p-2'
              id='mobile'
              type='number'
              placeholder='شماره تلفن'
            />
          </div>

          <div className='mb-6 flex flex-col'>
            <label htmlFor='username' className='mb-2 w-fit text-sm'>
              نام کاربری
            </label>
            <input
              name='username'
              className='rounded-md bg-secondary p-2'
              id='username'
              type='text'
              placeholder='نام کاربری'
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
