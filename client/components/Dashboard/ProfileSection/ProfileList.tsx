"use client"

import { useState } from "react"
import ProfileForm from "./ProfileForm"
import JobForm from "./JobForm"

export default function ProfileList() {
  const [active, setActive] = useState(false)

  return (
    <div className="card mb-6 w-full px-4 pt-8 sm:w-[80%] lg:w-[60%]">
      <div className="flex justify-center gap-x-4 text-sm">
        <div
          onClick={() => setActive(false)}
          className={`tabItem ${!active ? "activeLink" : ""}`}
        >
          <p>پروفایل</p>
        </div>
        <div
          onClick={() => setActive(true)}
          className={`tabItem ${active ? "activeLink" : ""}`}
        >
          <p>شغل</p>
        </div>
      </div>

      <div>{!active ? <ProfileForm /> : <JobForm />}</div>
    </div>
  )
}
