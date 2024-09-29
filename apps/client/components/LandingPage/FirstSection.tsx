import LandingPic from '@/app/assets/landing-img.svg'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function FirstSection() {
  return (
    <section className='mt-4 px-6'>
      <div className='bg-accentColor flex flex-col items-center rounded-3xl p-8 text-center'>
        <p className='mb-3 text-3xl'>
          برای انجام <span className='text-primary text-3xl'>پروژه</span> های
          بزرگ به یک تیم <span className='text-primary text-3xl'>تیم</span> بزرگ
          دارید
        </p>

        <p className='mb-5'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است
        </p>

        <Link
          href='/signup'
          className='bg-primary hover:border-secondary mb-4 flex w-full items-center justify-between rounded-full py-1.5 pe-7 ps-4 duration-300 hover:shadow-md'
        >
          <div className='text-primary rounded-full bg-background p-2'>
            <ArrowRightIcon className='size-5' />
          </div>
          <p className='text-background'>ثبت‌نام</p>
        </Link>
        <Link
          href='/login'
          className='border-primary hover:bg-primary mb-2 w-full rounded-full border py-2 shadow duration-300 hover:text-background'
        >
          ورود
        </Link>

        <div className='w-[290px]'>
          <Image src={LandingPic} alt='Landing-pic' />
        </div>
      </div>
    </section>
  )
}
