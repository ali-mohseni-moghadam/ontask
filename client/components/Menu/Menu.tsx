'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface MenuProps {
  setShow: (value: boolean) => void
}

export default function Menu({ setShow }: MenuProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: -1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ y: -20, opacity: 0 }}
      className='fixed z-10 h-screen w-full bg-background md:hidden'
    >
      <div className='my-8 flex flex-col items-center gap-y-6 text-xl'>
        <div className='hover:opacity-60'>
          <Link href='/signup' onClick={() => setShow(false)}>
            ثبت‌نام
          </Link>
        </div>
        <hr className='w-4/5 border-t-secondary' />
        <div className='hover:opacity-60'>
          <Link href='/login' onClick={() => setShow(false)}>
            ورود
          </Link>
        </div>
        <hr className='w-4/5 border-t-secondary' />
        <div className='text-2xl'>
          <h4>
            <span className='text-primary'>ONTASK</span> Team
          </h4>
        </div>
      </div>
    </motion.div>
  )
}
