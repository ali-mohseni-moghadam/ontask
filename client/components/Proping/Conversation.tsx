"use client"

import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import ChatBox from "./ChatBox"

export default function Conversation() {
  const [select, setSelect] = useState(0)
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<
    { text: string; fromUser: boolean }[]
  >([])

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages(prevMessages => [
        ...prevMessages,
        { text: message, fromUser: true }
      ])
      setMessage("")
    }
  }

  const handleSelectChat = (initialMessage: string) => {
    setChatMessages([{ text: initialMessage, fromUser: false }])
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="flex w-full flex-col lg:h-full lg:flex-row lg:gap-4">
      <div className="mb-6 w-full lg:flex-grow">
        <div
          className={`card mb-4 flex flex-col border border-primary p-4 ${
            select === 1 ? "bg-primary text-[#ffffff]" : "hover:bg-textColor"
          } cursor-pointer duration-200`}
          onClick={() => {
            setSelect(1)
            handleSelectChat("سلام , حالت چطوره؟")
          }}
        >
          <p className="mb-2 text-lg">علی مقدم</p>
          <p
            className={`text-[#707070] ${select === 1 ? "text-[#e4e4e4]" : ""}`}
          >
            سلام , حالت چطوره؟
          </p>
        </div>
        <div
          className={`card mb-4 flex flex-col border border-primary p-4 ${
            select === 2 ? "bg-primary text-[#ffffff]" : "hover:bg-textColor"
          } cursor-pointer duration-200`}
          onClick={() => {
            setSelect(2)
            handleSelectChat("میشه زمان جلسه رو عوض کنیم؟")
          }}
        >
          <p className="mb-2 text-lg">علیرضا فرجی</p>
          <p
            className={`text-[#707070] ${select === 2 ? "text-[#e4e4e4]" : ""}`}
          >
            میشه زمان جلسه رو عوض کنیم؟
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col pb-2 lg:flex-grow">
        <div>
          {select === 0 && <p>لطفا یک گفتگو انتخاب کنید</p>}
          {select > 0 && <ChatBox messages={chatMessages} />}
        </div>

        {select ? (
          <div className="card mt-3 flex items-center justify-between rounded-3xl border border-primary p-2">
            <div
              className="hover-button ml-2 cursor-pointer rounded-lg p-2"
              onClick={handleSendMessage}
            >
              <PaperPlaneIcon className="size-5" />
            </div>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="block max-h-[90%] w-full resize-none content-center overflow-y-auto border-none bg-background px-2 py-1 text-[#000] placeholder-[#707070] outline-none"
              placeholder="پیام خود را بنویسید"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
