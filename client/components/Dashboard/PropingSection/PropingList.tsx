"use client"

import { useState } from "react"
import SendPropings from "./SendPropings"
import RecivedProping from "./RecivedProping"

export default function PropingList() {
  const [active, setActive] = useState(false)

  return (
    <div className="card mb-6 w-full px-4 pt-8 sm:w-[80%] lg:w-[60%]">
      <div className="flex flex-col items-center gap-y-4 text-base">
        <div
          onClick={() => setActive(false)}
          className={`tabItem ${!active ? "activeLink" : ""} hover-text w-32 self-center`}
        >
          <p>ارسال پروپینگ</p>
        </div>
        <div
          onClick={() => setActive(true)}
          className={`tabItem ${active ? "activeLink" : ""} hover-text mb-4 w-36`}
        >
          <p>پروپینگ دریافتی</p>
        </div>
      </div>

      <div>{!active ? <SendPropings /> : <RecivedProping />}</div>
    </div>
  )
}
