"use client"

import { AnimatePresence, motion } from "framer-motion"

import { Cross2Icon } from "@radix-ui/react-icons"
import React, { useState } from "react"

export default function RecivedCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formattedDate = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  return (
    <div className="card mb-8 flex flex-col border border-primary p-4">
      <div className="flex flex-col">
        <div className="mb-4">
          <p className="mb-2 text-lg">علی مقدم</p>
          <span className="text-[#707070]">{formattedDate}</span>
          <p className="mt-2">این یک پیام آزمایشی است</p>
        </div>
        <button
          className="hover-button self-end rounded-md p-2"
          onClick={() => setIsModalOpen(true)}
        >
          نشان دادن
        </button>
      </div>

      <AnimatePresence key="modal-proping">
        {isModalOpen ? (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ y: -20, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center backdrop-blur-md"
            onClick={handleBackdropClick}
          >
            <div className="card w-5/6 max-w-md bg-background px-6 py-4">
              <div className="flex justify-between">
                <p className="font-bold">علی مقدم</p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-1 duration-150 hover:bg-primary hover:text-[#fff]"
                >
                  <Cross2Icon className="size-5" />
                </button>
              </div>
              <div className="mt-8 h-80 rounded-lg border border-primary px-2 pt-4">
                <p className="font-semibold text-primary">پیام همگانی :</p>
                <p className="text-[#707070]">این یک پیام آزمایشی است</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
