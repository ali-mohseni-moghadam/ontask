export default function JobForm() {
  return (
    <div>
      <div className='py-6'>
        <form action={''}>
          {/* Job Category */}
          <div className='mb-4'>
            <label htmlFor='jobCategory' className='mb-2 text-sm'>
              دسته شغلی
            </label>
            <div className='relative'>
              <select
                name='jobCategory'
                id='jobCategory'
                className='w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none'
              >
                <option value=''>انتخاب کنید</option>
                <option value='IT'>فناوری اطلاعات</option>
                <option value='Marketing'>بازاریابی</option>
                <option value='Healthcare'>بهداشت و درمان</option>
                <option value='Finance'>مالی</option>
                <option value='Education'>آموزش</option>
              </select>
              <span className='pointer-events-none absolute left-2 top-2.5'>
                &#9660; {/* Down arrow symbol */}
              </span>
            </div>
          </div>

          {/* Job Field */}
          <div className='mb-4'>
            <label htmlFor='jobField' className='mb-2 text-sm'>
              زمینه شغلی
            </label>
            <div className='relative'>
              <select
                name='jobField'
                id='jobField'
                className='w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none'
              >
                <option value=''>انتخاب کنید</option>
                <option value='SoftwareDevelopment'>توسعه نرم‌افزار</option>
                <option value='DigitalMarketing'>بازاریابی دیجیتال</option>
                <option value='Nursing'>پرستاری</option>
                <option value='Accounting'>حسابداری</option>
                <option value='Teaching'>تدریس</option>
              </select>
              <span className='pointer-events-none absolute left-2 top-2.5'>
                &#9660; {/* Down arrow symbol */}
              </span>
            </div>
          </div>

          {/* Job Specialization */}
          <div className='mb-6'>
            <label htmlFor='jobSpecialization' className='mb-2 text-sm'>
              زمینه تخصصی شغلی
            </label>
            <div className='relative'>
              <select
                name='jobSpecialization'
                id='jobSpecialization'
                className='w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none'
              >
                <option value=''>انتخاب کنید</option>
                <option value='Frontend'>فرانت‌اند</option>
                <option value='Backend'>بک‌اند</option>
                <option value='SEO'>سئو</option>
                <option value='DataAnalysis'>تحلیل داده</option>
                <option value='TeachingMath'>تدریس ریاضی</option>
              </select>
              <span className='pointer-events-none absolute left-2 top-2.5'>
                &#9660; {/* Down arrow symbol */}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='hover:bg-white w-full rounded-full bg-primary py-2 text-[#ffffff] duration-300 hover:border hover:border-secondary hover:text-primary'
          >
            ثبت
          </button>
        </form>
      </div>
    </div>
  )
}
