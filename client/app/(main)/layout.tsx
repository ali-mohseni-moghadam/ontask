import Header from "@/components/Header/header"
import type { Metadata } from "next"
import "../globals.css"

import React from "react"

export const metadata: Metadata = {
  title: "Ontask",
  description: "Generated by create next app"
}

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto md:w-[700px] lg:w-[1000px]">
      <Header />
      <main>{children}</main>
    </div>
  )
}
