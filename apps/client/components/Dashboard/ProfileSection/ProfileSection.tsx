import Logo from '@/app/assets/img/ontask-logo-main.png'
import Image from 'next/image'
import UserData from './UserData'

export default function ProfileSection() {
  return (
    <div>
      <div className='my-10'>
        <div className='absolute'>
          <Image src={Logo} alt='ontask-logo' width={130} />
        </div>
        <h3 className='text-8xl opacity-30'>پروفایل</h3>
      </div>
      <div className='mb-5 text-justify'>
        <p className='opacity-80'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h4 className='mb-3 text-lg'>اطلاعات کاربر</h4>
        <UserData />
      </div>
    </div>
  )
}