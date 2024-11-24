"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      size="sm"
      variant={"custom"}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="text-orange-300 size-5" />
      ) : (
        <MoonIcon className="text-sky-950 size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
