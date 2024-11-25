"use client"

import { useState } from "react"
import MyDesk from "./MyDesk"
import AvalibvaleDesk from "./AvalibvaleDesk"

export default function DeskList() {
  const [active, setActive] = useState(false)

  return (
    <div className="card mb-6 w-full px-4 pt-8 sm:w-[80%] lg:w-[60%]">
      <div className="flex flex-col items-center gap-y-4 text-sm">
        <div
          onClick={() => setActive(false)}
          className={`tabItem ${!active ? "activeLink" : ""} self-center`}
        >
          <p>میز من</p>
        </div>
        <div
          onClick={() => setActive(true)}
          className={`tabItem ${active ? "activeLink" : ""} mb-4 w-32`}
        >
          <p>میز‌های در دسترس</p>
        </div>
      </div>

      <div>{!active ? <MyDesk /> : <AvalibvaleDesk />}</div>
    </div>
  )
}
