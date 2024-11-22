import React, { useEffect, useState } from "react"
import { useSocketStore } from "@/store/socket.store"

type ChatMessage = {
  text: string
  fromUser: boolean
}

export default function ChatBox() {
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const { socket } = useSocketStore()

  useEffect(() => {
    if (socket) {
      socket.on("chat pm", (receivedMessage: ChatMessage) => {
        setChatMessages(prevMessages => [
          ...prevMessages,
          { text: receivedMessage.text, fromUser: false }
        ])
      })

      return () => {
        socket.off("chat pm")
      }
    }
  }, [socket])

  const handleAddedMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, fromUser: true }
      setChatMessages(prevMessages => [...prevMessages, newMessage])

      socket?.emit("chat message", newMessage)

      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="mb-6 h-full w-full">
      <div className="card h-full bg-background px-2 py-4">
        <div className="flex">
          <p className="text-lg font-bold">چت باکس</p>
        </div>
        <div className="mt-2 max-h-[384px] min-h-96 overflow-y-auto overflow-x-hidden rounded-lg border border-primary px-2 pt-4">
          {chatMessages.length === 0 ? (
            <p className="text-[#707070]">پیامی وجود ندارد ...</p>
          ) : (
            chatMessages.map((item, index) => (
              <div
                key={index}
                className={`mb-3 max-w-[90%] whitespace-pre-wrap break-words rounded p-2 text-sm ${
                  item.fromUser
                    ? "ml-auto bg-primary text-right text-[#fff]"
                    : "mr-auto bg-secondary text-left text-[#000]"
                }`}
              >
                {item.text}
              </div>
            ))
          )}
        </div>

        <div className="mt-3 flex flex-col-reverse items-center gap-y-2 p-2">
          <div
            className="cursor-pointer self-end rounded bg-primary px-2 py-1 text-background"
            onClick={handleSendMessage}
          >
            ارسال
          </div>

          {/* <div className="w-full">
            /> */}

          <textarea
            value={message}
            onChange={handleAddedMessage}
            onKeyDown={handleKeyPress}
            className="block max-h-[90%] w-full resize-none overflow-y-auto border-none bg-background px-2 py-1 text-[#000] placeholder-[#707070] outline-none"
            placeholder="پیام خود را بنویسید"
          />
        </div>
      </div>
    </div>
  )
}
