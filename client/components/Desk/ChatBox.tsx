import React, { useState } from 'react'

export default function ChatBox() {
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<
    { text: string; fromUser: boolean }[]
  >([])

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
    <div className='w-full'>
      <div className='h-full rounded bg-background px-2 py-4 shadow-lg'>
        <div className='flex'>
          <p className='text-lg font-bold'>چت باکس</p>
        </div>
        <div className='mt-2 min-h-96 overflow-hidden rounded-lg border border-primary px-2 pt-4'>
          {chatMessages.length === 0 ? (
            <p className='text-[#707070]'>پیامی وجود ندارد ...</p>
          ) : (
            chatMessages.map((item, index) => (
              <div
                className='mb-3 w-full max-w-fit whitespace-pre-wrap break-words rounded bg-primary p-2 text-sm text-[#fff]'
                key={index}
              >
                {item.text}
              </div>
            ))
          )}
        </div>

        <div className='mt-3 flex flex-col-reverse items-center gap-y-2 p-2'>
          <div
            className='self-end rounded bg-primary px-2 py-1 text-background'
            onClick={handleSendMessage}
          >
            ارسال
          </div>
          <div className='w-full'>
            <input
              type='text'
              className='w-full rounded border border-secondary px-2 py-1 outline-none'
              placeholder='پیام خود را بنویسید'
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
