"use client"

import { useState } from "react"
import JobForm from "./JobForm"
import ProfileForm from "./ProfileForm"

export default function ProfileList() {
  const [active, setActive] = useState(false)

  return (
    <div className="card mb-6 w-full px-4 py-8 sm:w-[80%] lg:w-[60%]">
      <div className="flex justify-center gap-x-4 text-base">
        <div
          onClick={() => setActive(false)}
          className={`tabItem ${!active ? "activeLink" : ""} hover-text`}
        >
          <p>پروفایل</p>
        </div>
        <div
          onClick={() => setActive(true)}
          className={`tabItem ${active ? "activeLink" : ""} hover-text`}
        >
          <p>شغل</p>
        </div>
      </div>

      <div
        className="overflow-y-auto transition-all duration-300"
        style={{ height: "500px" }}
      >
        {!active ? <ProfileForm /> : <JobForm />}
      </div>
    </div>
  )
}
