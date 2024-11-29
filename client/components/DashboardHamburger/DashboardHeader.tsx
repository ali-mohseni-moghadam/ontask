"use client"
import Logo from "@/app/assets/img/ontask-logo-main.png"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import DashboardHamburger from "./DashboardHamburger"

export default function DashboardHeader() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="sticky top-0 z-10 flex w-full items-center justify-between bg-[#fff] p-2 md:hidden">
        <div>
          {!show ? (
            <HamburgerMenuIcon
              className="size-8 cursor-pointer"
              onClick={() => setShow(true)}
            />
          ) : (
            <Cross1Icon
              className="size-8 cursor-pointer"
              onClick={() => setShow(false)}
            />
          )}
        </div>
        <Link href="/">
          <Image
            src={Logo}
            alt="ONTASK_LOGO"
            width={150}
            height={150}
            loading="eager"
          />
        </Link>
      </div>
      <AnimatePresence key="menu-list">
        {show ? <DashboardHamburger setShow={setShow} /> : null}
      </AnimatePresence>
    </>
  )
}
