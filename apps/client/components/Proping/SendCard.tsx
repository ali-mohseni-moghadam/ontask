'use client'

import { AnimatePresence, motion } from 'framer-motion'

import React, { useState } from 'react'
import { Cross2Icon, PaperPlaneIcon } from '@radix-ui/react-icons'

export default function RecivedCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<
    { text: string; fromUser: boolean }[]
  >([])

  const formattedDate = new Date().toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages(prevMessage => [
        ...prevMessage,
        { text: message, fromUser: true }
      ])
    }
    setMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className='card mb-8 flex flex-col border border-primary p-4'>
      <div className='flex flex-col'>
        <div className='mb-4'>
          <p className='mb-2 text-lg'>علی مقدم</p>
          <span className='text-[#707070]'>{formattedDate}</span>
          <p className='mt-2'>این یک پیام آزمایشی است</p>
        </div>
        <button
          className='self-end rounded-md bg-primary p-2 text-background'
          onClick={() => setIsModalOpen(true)}
        >
          پاسخ دادن
        </button>
      </div>

      <AnimatePresence key='modal-proping'>
        {isModalOpen ? (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: -1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ y: -20, opacity: 0 }}
            className='fixed inset-0 flex items-center justify-center backdrop-blur-md'
            onClick={handleBackdropClick}
          >
            <div className='w-5/6 max-w-md rounded-lg bg-background px-6 py-4 shadow-lg'>
              <div className='flex justify-between'>
                <p className='font-bold'>علی مقدم</p>
                <button onClick={() => setIsModalOpen(false)}>
                  <Cross2Icon className='size-5' />
                </button>
              </div>
              <div className='mt-8 h-80 rounded-lg border border-primary px-2 pt-4'>
                {chatMessages.length === 0 ? (
                  <p>پیامی وجود ندارد</p>
                ) : (
                  chatMessages.map((item, index) => (
                    <div
                      className='mb-3 w-fit max-w-xs rounded-xl bg-primary p-2 text-sm text-[#fff]'
                      key={index}
                    >
                      {item.text}
                    </div>
                  ))
                )}
              </div>
              <div>
                <div className='card mt-3 flex items-center justify-between p-2'>
                  <div
                    className='ml-2 rounded-lg bg-primary p-2'
                    onClick={handleSendMessage}
                  >
                    <PaperPlaneIcon className='size-5 cursor-pointer text-[#fff]' />
                  </div>
                  <div className='w-full'>
                    <input
                      type='text'
                      className='w-full outline-none'
                      placeholder='پیام خود را بنویسید'
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}