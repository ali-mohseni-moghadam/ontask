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

    socket.on("connect", () => {
      console.log("Connected to server")

      socket.emit("online", socket.id)

      socket.on("user-online", id => {
        console.log(`${id} is now online`)
      })
    })
  }
}))
