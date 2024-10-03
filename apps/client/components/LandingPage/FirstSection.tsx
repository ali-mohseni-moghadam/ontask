import LandingPic from '@/app/assets/landing-img.svg'
import Image from 'next/image'
import Link from 'next/link'

import * as motion from 'framer-motion/client'

import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function FirstSection() {
  return (
    <>
      <motion.section
        className='xsm:mt-8 mt-4 md:px-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='flex flex-col items-center rounded-3xl bg-background p-8 text-center shadow-md'>
          <h3 className='mb-8 text-3xl'>
            برای انجام <span className='text-primary text-3xl'>پروژه</span> های
            بزرگ به یک <span className='text-primary text-3xl'>تیم</span> بزرگ
            نیاز دارید
          </h3>

          <p className='mb-8 sm:text-lg'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <div className='flex w-full flex-col items-center justify-center md:flex-row-reverse md:items-start md:gap-x-4'>
            <Link
              href='/signup'
              className='bg-primary xsm:w-[50%] mb-4 flex w-full items-center justify-between rounded-full py-[5.5px] pe-7 ps-4 duration-300 hover:shadow-lg md:w-[30%]'
            >
              <div className='text-primary rounded-full bg-background p-2'>
                <ArrowRightIcon className='size-4' />
              </div>
              <p className='text-background'>ثبت‌نام</p>
            </Link>
            <Link
              href='/login'
              className='xsm:w-[50%] border-primary hover:bg-primary xsm:mb-6 mb-8 w-full rounded-full border py-2 shadow duration-300 hover:text-background md:w-[30%] lg:mb-12'
            >
              ورود
            </Link>
          </div>

          <motion.div
            className='xxsm:w-[390px] xsm:w-[490px] w-[280px] lg:w-[590px]'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={LandingPic} alt='Landing-pic' />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
