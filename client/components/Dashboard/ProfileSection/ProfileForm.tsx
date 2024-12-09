export default function ProfileForm() {
  const fields = [
    { id: "name", label: "نام", placeholder: "نام" },
    { id: "lastName", label: "نام خانوادگی", placeholder: "نام خانوادگی" },
    { id: "email", label: "آدرس ایمیل", placeholder: "آدرس ایمیل" },
    { id: "mobile", label: "شماره تلفن", placeholder: "شماره تلفن" },
    { id: "username", label: "نام کاربری", placeholder: "نام کاربری" }
  ]

  return (
    <div className="flex h-full flex-col pt-4">
      <form className="flex h-full flex-col">
        {fields.map(field => (
          <div key={field.id} className="mb-4 flex flex-col">
            <label htmlFor={field.id} className="mb-2 w-fit text-sm">
              {field.label}
            </label>
            <input
              className="rounded-md bg-secondary p-2"
              id={field.id}
              name={field.id}
              type="text"
              placeholder={field.placeholder}
            />
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
