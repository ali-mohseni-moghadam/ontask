export default function SendPropings() {
  return (
    <div>
      <div className="flex h-full flex-col pt-4">
        <form action={""} className="flex h-full flex-col">
          {/* Job Category */}
          <div className="mb-4">
            <label htmlFor="jobCategory" className="mb-2 text-sm">
              دسته بندی تخصص
            </label>
            <div className="relative">
              <select
                name="jobCategory"
                id="jobCategory"
                className="w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none"
              >
                <option value="">انتخاب یک دسته بندی</option>
                <option value="IT">فناوری اطلاعات</option>
                <option value="Marketing">بازاریابی</option>
                <option value="Healthcare">بهداشت و درمان</option>
                <option value="Finance">مالی</option>
                <option value="Education">آموزش</option>
              </select>
              <span className="pointer-events-none absolute left-2 top-2.5">
                &#9660;
              </span>
            </div>
          </div>

          {/* Job Field */}
          <div className="mb-4">
            <label htmlFor="jobField" className="mb-2 text-sm">
              تخصص
            </label>
            <div className="relative">
              <select
                name="jobField"
                id="jobField"
                className="w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none"
              >
                <option value="">انتخاب یک زیر‌شاخه</option>
                <option value="SoftwareDevelopment">توسعه نرم‌افزار</option>
                <option value="DigitalMarketing">بازاریابی دیجیتال</option>
                <option value="Nursing">پرستاری</option>
                <option value="Accounting">حسابداری</option>
                <option value="Teaching">تدریس</option>
              </select>
              <span className="pointer-events-none absolute left-2 top-2.5">
                &#9660;
              </span>
            </div>
          </div>

          {/* Job Specialization */}
          <div className="mb-4">
            <label htmlFor="jobSpecialization" className="mb-2 text-sm">
              تعیین تخصص
            </label>
            <div className="relative">
              <select
                name="jobSpecialization"
                id="jobSpecialization"
                className="w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none"
              >
                <option value="">انتخاب یک مشخصه</option>
                <option value="Frontend">فرانت‌اند</option>
                <option value="Backend">بک‌اند</option>
                <option value="SEO">سئو</option>
                <option value="DataAnalysis">تحلیل داده</option>
                <option value="TeachingMath">تدریس ریاضی</option>
              </select>
              <span className="pointer-events-none absolute left-2 top-2.5">
                &#9660;
              </span>
            </div>
          </div>

          {/* decription form */}
          <div className="mb-6">
            <label htmlFor="expertiseDescription">توضیحات</label>
            <textarea
              name="expertiseDescription"
              id="expertiseDescription"
              rows={4}
              placeholder="آنچه را که نیاز دارید بنویسید"
              className="w-full resize-none border-b border-secondary p-3 outline-none duration-300 focus:border-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="hover-button w-full rounded-full py-2"
          >
            ارسال پروپینگ!
          </button>
        </form>
      </div>
    </div>
  )
}
