import LandingPic from "@/app/assets/landing-img.svg"
import Image from "next/image"
import Link from "next/link"

import * as motion from "framer-motion/client"

import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function FirstSection() {
  return (
    <>
      <motion.section
        className="mt-4 xsm:mt-8 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center bg-background p-8 text-center">
          <h3 className="mb-8 text-2xl font-bold lg:text-3xl">
            برای انجام{" "}
            <span className="text-2xl text-primary lg:text-3xl">پروژه</span> های
            بزرگ به یک{" "}
            <span className="text-2xl text-primary lg:text-3xl">تیم</span> بزرگ
            نیاز دارید
          </h3>

          <p className="mb-8 sm:text-lg">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <div className="flex w-full flex-col items-center justify-center md:flex-row-reverse md:items-start md:gap-x-4">
            <Link
              href="/signup"
              className="mb-4 flex w-full items-center justify-between rounded-full bg-primary py-[5.5px] pe-7 ps-4 text-[#fff] duration-300 hover:bg-textColor hover:text-[#000] hover:shadow-lg xsm:w-[50%] md:w-[30%]"
            >
              <div className="rounded-full bg-background p-2 text-primary">
                <ArrowRightIcon className="size-4" />
              </div>
              <p>ثبت‌نام</p>
            </Link>
            <Link
              href="/login"
              className="mb-8 w-full rounded-full border border-primary py-2 shadow duration-300 hover:bg-primary hover:text-background xsm:mb-6 xsm:w-[50%] md:w-[30%] lg:mb-12"
            >
              ورود
            </Link>
          </div>

          <motion.div
            className="w-[280px] xxsm:w-[390px] xsm:w-[490px] lg:w-[590px]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              priority
              src={LandingPic}
              alt="Landing-pic"
              width={600}
              height={400}
              loading="eager"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
