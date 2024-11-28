import { useSocketStore } from "@/store/socket.store"
import { useEffect } from "react"

const ws = "http://localhost:5000"
export default function VideoConference() {
  const { socket, connectSocket } = useSocketStore()

  useEffect(() => {
    connectSocket(ws)
  }, [connectSocket])

  return (
    <div className="card col-span-2 mb-10 h-full bg-background px-2 py-4">
      <p className="text-lg font-bold">ویدیو کنفرانس</p>

      <div className="h-60 w-full rounded-md bg-primary p-2 text-[#fff]">
        {socket?.connect ? <p>Video</p> : <p>Loading...</p>}
      </div>
    </div>
  )
}
