"use client"

import { useState } from "react"
import RecivedProping from "./RecivedProping"
import SendPropings from "./SendPropings"

export default function PropingList() {
  const [active, setActive] = useState(false)

  return (
    <div className="card mb-6 w-full px-4 py-8">
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

      <div
        style={{ height: "500px" }}
        className="overflow-y-auto transition-all duration-300"
      >
        {!active ? <SendPropings /> : <RecivedProping />}
      </div>
    </div>
  )
}
