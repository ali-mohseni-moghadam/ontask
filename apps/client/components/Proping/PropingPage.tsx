'use client'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '@/app/assets/img/ontask-logo-main.png'
import Link from 'next/link'
import RecivedCard from './RecivedCard'
import Conversation from './Conversation'
import SendCard from './SendCard'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
// import { AnimatePresence } from 'framer-motion'

export default function PropingPage() {
  const [active, setActive] = useState(0)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='mt-5 flex w-full flex-col items-center'>
        <div className='mb-6 flex w-full items-center justify-between md:justify-end'>
          <div className='md:hidden'>
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
          </div>
          <Link href='/'>
            <Image src={Logo} alt='ONTASK_LOGO' width={150} />
          </Link>
        </div>
        <div className='mb-6 w-full px-2 pt-8 sm:w-[80%] lg:w-[60%]'>
          <div className='flex flex-col items-center gap-y-2 text-sm'>
            <div
              onClick={() => setActive(0)}
              className={`tabItem ${active === 0 ? 'activeLink' : ''} w-32`}
            >
              <p>پروپینگ دریافتی</p>
            </div>
            <div
              onClick={() => setActive(1)}
              className={`tabItem ${active === 1 ? 'activeLink' : ''} w-32`}
            >
              <p>ارسال پروپینگ</p>
            </div>
            <div
              onClick={() => setActive(2)}
              className={`tabItem ${active === 2 ? 'activeLink' : ''} mb-8 w-32`}
            >
              <p>گفتگو‌ها</p>
            </div>
          </div>

          <div className='max-h-[calc(100vh-200px)] flex-1 overflow-y-auto pl-2'>
            {active === 0 && (
              <div className='xsm:grid xsm:grid-cols-2 xsm:gap-x-2'>
                <SendCard /> <SendCard />
              </div>
            )}
            {active === 1 && (
              <div className='xsm:grid xsm:grid-cols-2 xsm:gap-x-2'>
                <RecivedCard /> <RecivedCard />
                <RecivedCard /> <RecivedCard />
                <RecivedCard /> <RecivedCard />
              </div>
            )}
            {active === 2 && <Conversation />}
          </div>
        </div>
      </div>
      {/* <AnimatePresence key='dashboard-menu-list'>
        {show ? <Menu setShow={setShow} /> : null}
      </AnimatePresence> */}
    </>
  )
}
