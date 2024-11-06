// import type { Metadata } from 'next'
import SideNav from '@/components/ui/SideNav/SideNav'
import '../globals.css'
import React from 'react'
import DashboardHeader from '@/components/ui/DashboardHamburger/DashboardHeader'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashboardHeader />
      <div className='flex'>
        <SideNav />
        <main className='flex w-full justify-center px-6 xl:mx-auto xl:w-[70%]'>
          {children}
        </main>
      </div>
    </>
  )
}
