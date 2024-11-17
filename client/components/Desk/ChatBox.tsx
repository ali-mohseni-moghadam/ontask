import React, { useEffect, useState } from "react"
import { useSocketStore } from "@/store/socket.store"

type ChatMessage = {
  text: string
  fromUser: boolean
}

export default function ChatBox() {
  const [message, setMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [pm, setPm] = useState<ChatMessage>()
  const { socket } = useSocketStore()

  useEffect(() => {
    if (socket) {
      socket.on("chat pm", (receivedMessage: ChatMessage) => {
        setPm(receivedMessage)
      })

      return () => {
        socket.off("chat pm")
      }
    }
  }, [socket])

  if (!socket) return

  const handleAddedMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }
  return (
    <div className="w-full">
      <div className="h-full rounded bg-background px-2 py-4 shadow-lg">
        <div className="flex">
          <p className="text-lg font-bold">چت باکس</p>
        </div>
        <div className="mt-2 min-h-96 overflow-y-scroll rounded-lg border border-primary px-2 pt-4">
          {chatMessages.length === 0 ? (
            <p className="text-[#707070]">پیامی وجود ندارد ...</p>
          ) : (
            chatMessages.map((item, index) => (
              <div
                className={`mb-3 w-full max-w-fit whitespace-pre-wrap break-words rounded p-2 text-sm ${
                  item.fromUser
                    ? "text-white bg-primary"
                    : "text-black bg-secondary"
                }`}
                key={index}
              >
                {item.text}
              </div>
            ))
          )}
          <p>{pm?.text}</p>
        </div>

        <div className="mt-3 flex flex-col-reverse items-center gap-y-2 p-2">
          <div
            className="cursor-pointer self-end rounded bg-primary px-2 py-1 text-background"
            onClick={handleSendMessage}
          >
            ارسال
          </div>
          <div className="w-full">
            <input
              type="text"
              className="w-full rounded border border-secondary px-2 py-1 outline-none"
              placeholder="پیام خود را بنویسید"
              value={message}
              onChange={handleAddedMessage}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
