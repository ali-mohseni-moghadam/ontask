import { create } from "zustand"
import io, { Socket } from "socket.io-client"

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
      console.log("user connected!")
    })
  }
}))
