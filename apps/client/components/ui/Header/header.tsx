'use client'

import Image from 'next/image'
import ThemeToggle from '../Theme/theme-toggle'
import Logo from '@/app/assets/img/ontask-logo-mini00.png'
import { PersonIcon } from '@radix-ui/react-icons'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Cross2Icon as Cross1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useState } from 'react'
import Menu from '../Menu/Menu'
import { AnimatePresence } from 'framer-motion'

export default function Header() {
  const [show, setShow] = useState(false)

  return (
    <>
      <header className='border-secondary xsm:px-8 sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-8 md:mx-auto md:mb-6 md:w-[700px] md:px-0 md:py-4 lg:w-[1000px]'>
        <div className='hidden items-center gap-x-3 md:flex'>
          <ThemeToggle />
          <Link href='/signup' className='btnHeader p-3 duration-300'>
            <p>ثبت‌نام</p>
          </Link>
          <Link href='/login' className='btnHeader p-3 duration-300'>
            <PersonIcon className='size-5' />
          </Link>
        </div>
        {!show ? (
          <HamburgerMenuIcon
            className='size-8 cursor-pointer md:hidden'
            onClick={() => setShow(true)}
          />
        ) : (
          <Cross1Icon
            className='size-8 cursor-pointer md:hidden'
            onClick={() => setShow(false)}
          />
        )}

        <Link href='/' className='flex'>
          <Image src={Logo} alt='Logo' width={150} />
        </Link>
      </header>
      <AnimatePresence key='menu-list'>
        {show ? <Menu setShow={setShow} /> : null}
      </AnimatePresence>
    </>
  )
}
