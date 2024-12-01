"use client"

import React, { useEffect, useState } from "react"

export default function ClientWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false)
    }

    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setLoading(false)
    } else {
      window.addEventListener("load", handlePageLoad)
    }

    return () => {
      window.removeEventListener("load", handlePageLoad)
    }
  }, [])

  return loading ? (
    <div className="flex min-h-screen w-full items-center justify-center">
      <span className="loader"></span>
    </div>
  ) : (
    <>{children}</>
  )
}
