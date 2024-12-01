import Peer from "peerjs"
import { useEffect, useRef, useState } from "react"

export default function VideoConference() {
  const [peerId, setPeerId] = useState("")
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("")
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null)
  const currentUserVideoRef = useRef<HTMLVideoElement | null>(null)
  const peerInstance = useRef<Peer | null>(null)

  useEffect(() => {
    // Peer Instance
    const peer = new Peer()

    if (!peer || !currentUserVideoRef) return

    peer.on("open", id => {
      setPeerId(id)
    })

    peer.on("call", call => {
      const getMedia = navigator.mediaDevices.getUserMedia

      getMedia({ video: true, audio: true })
        .then(mediaStream => {
          if (currentUserVideoRef.current) {
            currentUserVideoRef.current.srcObject = mediaStream
            currentUserVideoRef.current.play()
          }

          call.answer(mediaStream)
          call.on("stream", function (remoteStream) {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream
              remoteVideoRef.current.play()
            }
          })
        })
        .catch(error => {
          console.error("Error getting media stream", error)
        })
    })
    peerInstance.current = peer
  }, [])

  const call = (remotePeerId: string) => {
    const getMedia = navigator.mediaDevices.getUserMedia

    getMedia({ video: true, audio: true })
      .then(mediaStream => {
        if (currentUserVideoRef.current) {
          currentUserVideoRef.current.srcObject = mediaStream
          currentUserVideoRef.current.play()
        }

        const call = peerInstance.current?.call(remotePeerId, mediaStream)

        call?.on("stream", remoteStream => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream
            remoteVideoRef.current.play()
          }
        })
      })
      .catch(error => {
        console.error("Error getting media stream", error)
      })
  }

  return (
    <div className="card col-span-2 mb-10 h-full bg-background px-2 py-4">
      <p className="mb-4 text-lg font-bold">ویدیو کنفرانس</p>

      <h3 className="text-[#707070]">ID کاربر : {peerId}</h3>

      <input
        type="text"
        value={remotePeerIdValue}
        onChange={e => setRemotePeerIdValue(e.target.value)}
      />
      <button onClick={() => call(remotePeerIdValue)}>Call</button>

      <div className="h-60 w-full rounded-md p-2 text-[#fff]">
        <video ref={currentUserVideoRef} autoPlay muted></video>
      </div>

      <video ref={remoteVideoRef} autoPlay></video>
    </div>
  )
}
