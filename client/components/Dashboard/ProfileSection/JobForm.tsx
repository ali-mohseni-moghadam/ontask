export default function JobForm() {
  const fields = [
    {
      id: "jobCategory",
      label: "دسته شغلی",
      options: [
        { value: "", text: "انتخاب کنید" },
        { value: "IT", text: "فناوری اطلاعات" },
        { value: "Marketing", text: "بازاریابی" },
        { value: "Healthcare", text: "بهداشت و درمان" },
        { value: "Finance", text: "مالی" },
        { value: "Education", text: "آموزش" }
      ]
    },
    {
      id: "jobField",
      label: "زمینه شغلی",
      options: [
        { value: "", text: "انتخاب کنید" },
        { value: "SoftwareDevelopment", text: "توسعه نرم‌افزار" },
        { value: "DigitalMarketing", text: "بازاریابی دیجیتال" },
        { value: "Nursing", text: "پرستاری" },
        { value: "Accounting", text: "حسابداری" },
        { value: "Teaching", text: "تدریس" }
      ]
    },
    {
      id: "jobSpecialization",
      label: "زمینه تخصصی شغلی",
      options: [
        { value: "", text: "انتخاب کنید" },
        { value: "Frontend", text: "فرانت‌اند" },
        { value: "Backend", text: "بک‌اند" },
        { value: "SEO", text: "سئو" },
        { value: "DataAnalysis", text: "تحلیل داده" },
        { value: "TeachingMath", text: "تدریس ریاضی" }
      ]
    }
  ]

  return (
    <div className="flex h-full flex-col pt-4">
      <form className="flex h-full flex-col">
        {fields.map(field => (
          <div key={field.id} className="mb-12">
            <label htmlFor={field.id} className="mb-1 block text-sm">
              {field.label}
            </label>
            <div className="relative">
              <select
                id={field.id}
                name={field.id}
                className="w-full appearance-none rounded-md bg-secondary p-2 pl-4 pr-4 outline-none"
              >
                {field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute left-2 top-2.5">
                &#9660;
              </span>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="hover-button mt-auto w-full rounded-full py-2"
        >
          ثبت
        </button>
      </form>
    </div>
  )
}
