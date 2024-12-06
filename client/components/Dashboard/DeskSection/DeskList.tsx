"use client"

import { useState } from "react"
import AvalibvaleDesk from "./AvalibvaleDesk"
import MyDesk from "./MyDesk"

export default function DeskList() {
  const [active, setActive] = useState(false)

  return (
    <div className="card mb-6 w-full px-4 py-8">
      <div className="flex flex-col items-center gap-y-4 text-base">
        <div
          onClick={() => setActive(false)}
          className={`tabItem ${!active ? "activeLink" : ""} hover-text self-center`}
        >
          <p>میز من</p>
        </div>
        <div
          onClick={() => setActive(true)}
          className={`tabItem ${active ? "activeLink" : ""} hover-text mb-4 w-36`}
        >
          <p>میز‌های در دسترس</p>
        </div>
      </div>

      <div
        className="overflow-y-auto transition-all duration-300"
        style={{ height: "500px" }}
      >
        {!active ? <MyDesk /> : <AvalibvaleDesk />}
      </div>
    </div>
  )
}
