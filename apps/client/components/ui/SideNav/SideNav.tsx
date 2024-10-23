'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CONSTANT = [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'Desk', href: '/desk' },
  { title: 'Proping', href: '/proping' }
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
            className={`rounded-3xl border-s border-primary p-2 pr-2 text-center duration-300 hover:bg-primary ${pathname === item.href ? 'bg-primary' : ''}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
