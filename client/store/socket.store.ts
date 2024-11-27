import io, { Socket } from "socket.io-client"
import { create } from "zustand"

type SocketStore = {
  socket: Socket | null
  connectSocket: (url: string) => void
}

export const useSocketStore = create<SocketStore>(set => ({
  socket: null,

  connectSocket: url => {
    const socket = io(url)
    set({ socket })

    console.log("Connected to server")
    socket.emit("online", { userId: crypto.randomUUID() })

    socket.on("user-online", data => {
      console.log(`${data.userId} is now online`)
    })
  }
}))
