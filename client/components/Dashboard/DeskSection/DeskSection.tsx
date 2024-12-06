import DeskList from "./DeskList"

export default function DeskSection() {
  return (
    <div className="md:10/12 md:mx-auto lg:w-10/12 xl:w-8/12 2xl:w-6/12">
      <div className="md:content-center">
        <div className="my-10">
          <h3 className="text-5xl opacity-30">میز کار</h3>
        </div>
        <div className="mb-10 text-justify">
          <p className="opacity-80">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:items-end md:py-6">
        <h4 className="mb-3 text-lg md:hidden">لیست میز‌ها</h4>
        <DeskList />
      </div>
    </div>
  )
}
