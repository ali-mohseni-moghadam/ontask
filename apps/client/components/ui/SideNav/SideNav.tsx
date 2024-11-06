'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CONSTANT = [
  { title: 'داشبورد', href: '/dashboard' },
  { title: 'میز', href: '/desk' },
  { title: 'پروپینگ', href: '/proping' }
]

export default function SideNav() {
  const pathname = usePathname()

  return (
    <div className='sideNavShadow sticky top-0 hidden h-screen flex-col items-center border-e border-secondary bg-background px-4 py-6 md:flex'>
      <h4 className='mb-10 text-xl'>ONTASK</h4>
      <div className='flex flex-col gap-y-6'>
        {CONSTANT.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`rounded-3xl border-s border-primary p-2 pr-2 text-center duration-300 hover:bg-primary hover:text-[#fff] ${pathname === item.href ? 'bg-primary text-[#fff]' : ''} flex items-center justify-center`}
          >
            <p>{item.title}</p>
            <p></p>
          </Link>
        ))}
      </div>
    </div>
  )
}
