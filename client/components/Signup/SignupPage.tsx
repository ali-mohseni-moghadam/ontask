import { handleSignup } from "@/utils/formAction"

export default function SignupPage() {
  const addUser = async (formData: FormData) => {
    "use server"

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await handleSignup(formData)
  }

  return (
    <div className="mt-[15%] px-6 pt-5 md:mx-auto md:w-[60%]">
      <div className="card rounded-3xl p-6">
        <form action={addUser}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="mb-2 w-fit text-sm">
              ایمیل
            </label>
            <input
              className="rounded-md bg-secondary p-2"
              name="email"
              id="email"
              type="text"
              placeholder="ایمیل"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="password" className="mb-2 w-fit text-sm">
              رمز‌عبور
            </label>
            <input
              name="password"
              className="rounded-md bg-secondary p-2"
              id="password"
              type="password"
              placeholder="رمزعبور"
            />
          </div>
          <div className="mb-8 flex flex-col">
            <label htmlFor="password" className="mb-2 w-fit text-sm">
              تایید رمزعبور
            </label>
            <input
              name="confirmPassword"
              className="rounded-md bg-secondary p-2"
              id="confirmPassword"
              type="password"
              placeholder="تایید رمزعبور"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-[5.5px] pe-7 ps-4 text-[#ffffff] duration-300 hover:border hover:border-secondary hover:bg-[#ffffff] hover:text-primary"
          >
            ثبت‌نام
          </button>
        </form>
      </div>
    </div>
  )
}
