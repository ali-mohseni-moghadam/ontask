import Peer from "peerjs"
import { MutableRefObject } from "react"

type CallProps = {
  remotePeerId: string
  currentUserVideoRef: MutableRefObject<HTMLVideoElement | null>
  remoteVideoRef: MutableRefObject<HTMLVideoElement | null>
  peerInstance: MutableRefObject<Peer | null>
}

export const call = ({
  remotePeerId,
  currentUserVideoRef,
  remoteVideoRef,
  peerInstance
}: CallProps) => {
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
