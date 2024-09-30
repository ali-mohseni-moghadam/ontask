import Image from 'next/image'
import ThemeToggle from '../Theme/theme-toggle'
import Logo from '@/app/assets/img/ontask-logo-mini00.png'
import { PersonIcon } from '@radix-ui/react-icons'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='border-secondary xsm:px-8 sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-8 md:mb-6 md:px-0 md:py-4'>
      <div className='hidden items-center gap-x-3 md:flex'>
        <ThemeToggle />
        <Link href='/signup' className='btnHeader p-3 duration-300'>
          <p>ثبت‌نام</p>
        </Link>
        <Link href='/login' className='btnHeader p-3 duration-300'>
          <PersonIcon className='size-5' />
        </Link>
      </div>
      <HamburgerMenuIcon className='size-8 md:hidden' />
      <Link href='/' className='flex'>
        <Image src={Logo} alt='Logo' width={150} />
      </Link>
    </header>
  )
}
