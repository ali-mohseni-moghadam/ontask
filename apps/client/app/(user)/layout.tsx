// import type { Metadata } from 'next'
import SideNav from '@/components/ui/SideNav/SideNav'
import '../globals.css'
import React from 'react'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex'>
      <SideNav />
      <main className='px-6'>{children}</main>
    </div>
  )
}
