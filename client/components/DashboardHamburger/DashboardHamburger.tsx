"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface DashboardHamburgerProps {
  setShow: (value: boolean) => void
}

const CONSTANT = [
  { title: "داشبورد", href: "/dashboard" },
  { title: "میز‌ کار", href: "/desk" },
  { title: "پروپینگ", href: "/proping" }
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
      className="fixed z-10 h-screen w-full bg-background pt-6 md:hidden"
    >
      <div className="my-4 flex flex-col items-center justify-center gap-y-6 text-lg">
        {CONSTANT.map((item, index) => (
          <Link
            className={`w-1/4 rounded-3xl border-b border-primary p-2 text-center ${pathname === item.href ? "bg-primary text-[#fff]" : ""} duration-300 hover:bg-primary hover:text-[#fff]`}
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
