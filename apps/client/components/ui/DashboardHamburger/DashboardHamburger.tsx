'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DashboardHamburgerProps {
  setShow: (value: boolean) => void
}

const CONSTANT = [
  { title: 'داشبورد', href: '/dashboard' },
  { title: 'میز', href: '/desk' },
  { title: 'پروپینگ', href: '/proping' }
]

export default function DashboardHamburger({
  setShow
}: DashboardHamburgerProps) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ y: -1, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ y: -1, opacity: 0 }}
      className='fixed z-10 h-screen w-full bg-background md:hidden'
    >
      <div className='my-4 flex flex-col items-center justify-center gap-y-6 text-lg'>
        {CONSTANT.map((item, index) => (
          <Link
            className={`w-1/4 rounded-xl border-b border-primary text-center ${pathname === item.href ? 'bg-primary text-[#fff]' : ''}`}
            href={item.href}
            key={index}
            onClick={() => setShow(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
