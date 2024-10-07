// import type { Metadata } from 'next'
import '../../globals.css'
import { cn } from '@/lib/utils'
import React from 'react'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main className={cn('px-6')}>{children}</main>
    </>
  )
}
