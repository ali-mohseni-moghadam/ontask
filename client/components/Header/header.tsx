"use client"

import LogoDark from "@/app/assets/img/ontask-logo-mini.jpg"
import Logo from "@/app/assets/img/ontask-logo-mini00.png"
import {
  Cross2Icon as Cross1Icon,
  HamburgerMenuIcon,
  PersonIcon
} from "@radix-ui/react-icons"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Menu from "../Menu/Menu"

import React from "react"
import ThemeToggle from "../Theme/theme-toggle"

export default function Header() {
  const [show, setShow] = useState(false)
  const [theme] = useState("light")

  const pathName = usePathname()

  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-secondary bg-background px-4 py-8 xsm:px-8 md:mx-auto md:mb-6 md:w-[700px] md:px-0 md:py-4 lg:w-[1000px]">
        <div className="hidden items-center gap-x-3 md:flex">
          <ThemeToggle />

          {/* Conditionally render buttons based on the route */}
          {pathName === "/" ? (
            <>
              <Link href="/signup" className="btnHeader p-3 duration-300">
                <p>ثبت‌نام</p>
              </Link>
              <Link
                href="/login"
                className="btnHeader flex items-center gap-x-1 p-3 duration-300"
              >
                <p>ورود</p>
                <PersonIcon className="size-4" />
              </Link>
            </>
          ) : pathName === "/login" ? (
            <Link href="/signup" className="btnHeader p-3 duration-300">
              <p>ثبت‌نام</p>
            </Link>
          ) : pathName === "/signup" ? (
            <Link
              href="/login"
              className="btnHeader flex items-center gap-x-1 p-3 duration-300"
            >
              <p>ورود</p>
              <PersonIcon className="size-4" />
            </Link>
          ) : null}
        </div>
        {!show ? (
          <HamburgerMenuIcon
            className="size-8 cursor-pointer md:hidden"
            onClick={() => setShow(true)}
          />
        ) : (
          <Cross1Icon
            className="size-8 cursor-pointer md:hidden"
            onClick={() => setShow(false)}
          />
        )}
        <Link href="/" onClick={() => setShow(false)}>
          <Image
            priority
            className="w-40"
            src={theme === "dark" ? LogoDark : Logo}
            alt="Logo"
            loading="eager"
          />
        </Link>
      </header>
      <AnimatePresence key="menu-list">
        {show ? <Menu setShow={setShow} /> : null}
      </AnimatePresence>
    </>
  )
}
