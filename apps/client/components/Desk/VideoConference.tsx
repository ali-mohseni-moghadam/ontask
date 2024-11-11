import { useEffect, useState, useRef } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'

import io from 'socket.io-client'

const socket = io('http://localhost:5000')

export default function VideoConference() {
  const [me, setMe] = useState('')
  const [stream, setStream] = useState<MediaStream | undefined>()
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState('')
  const [callAccepted, setCallAccepted] = useState(false)
  const [callerSignal, setCallerSignal] = useState<string | null>(null)
  const [idToCall, setIdToCall] = useState('')
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState('')

  const myVideo = useRef<HTMLVideoElement | null>(null)
  const userVideo = useRef<HTMLVideoElement | null>(null)
  const connectionRef = useRef<Peer.Instance | null>()

  // =======================================================
  // useEffect ----------------------------------------------
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        setStream(stream)
        myVideo.current ? (myVideo.current.srcObject = stream) : null
      })

    socket.on('me', id => {
      setMe(id)
    })

    socket.on('callUser', data => {
      setReceivingCall(true)
      setCaller(data.from)
      setName(data.name)
      setCallerSignal(data.signal)
    })
  }, [])
  // useEffect ----------------------------------------------

  // =======================================================

  // callUser ----------------------------------------------
  const callUser = (id: string) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    })

    peer.on('signal', data => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name
      })
    })

    peer.on('stream', stream => {
      userVideo.current ? (userVideo.current.srcObject = stream) : null
    })

    socket.on('callAccepted', signal => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    connectionRef.current = peer
  }
  // callUser ----------------------------------------------

  // =======================================================

  // answerCall ----------------------------------------------
  const answerCall = () => {
    setCallAccepted(true)

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream
    })

    peer.on('signal', data => {
      socket.emit('answerCall', { signal: data, to: caller })
    })

    peer.on('stream', stream => {
      userVideo.current ? (userVideo.current.srcObject = stream) : null
    })

    if (callerSignal) {
      peer.signal(callerSignal)
    }

    connectionRef.current = peer
  }
  // answerCall ----------------------------------------------

  // =======================================================

  // leaveCall ----------------------------------------------
  const leaveCall = () => {
    setCallEnded(true)

    connectionRef.current ? connectionRef.current.destroy() : null
  }
  // leaveCall ----------------------------------------------
  // =======================================================

  return (
    <div className='col-span-2 mb-10 rounded-lg bg-background px-2 py-4 shadow-lg'>
      <h5 className='mb-4 text-lg'>ویدئو کنفرانس</h5>

      <div>
        {stream && (
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className='w-full rounded-lg border-4 border-textColor'
          />
        )}
      </div>

      <div className='mb-4'>
        {callAccepted && !callEnded ? (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className='w-full rounded-lg border-4 border-textColor'
          />
        ) : null}
      </div>

      <div className='mb-4'>
        <div className='mb-4 flex-col items-center'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            className='rounded border border-secondary px-2 py-1 outline-none'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <CopyToClipboard text={me}>
          <button className='rounded-lg bg-primary px-2 py-1 duration-200 hover:bg-textColor'>
            Copy ID
          </button>
        </CopyToClipboard>
      </div>

      <input
        id='id'
        type='text'
        className='rounded border border-secondary px-2 py-1 outline-none'
        value={idToCall}
        onChange={e => setIdToCall(e.target.value)}
      />
      <div className='mb-4'>
        {callAccepted && !callEnded ? (
          <button
            className='rounded-lg bg-[#ff5353] px-2 py-1 duration-200 hover:bg-textColor'
            onClick={leaveCall}
          >
            End Call
          </button>
        ) : (
          <button
            className='rounded-lg bg-primary px-2 py-1 duration-200 hover:bg-textColor'
            onClick={() => callUser(idToCall)}
          >
            Call
          </button>
        )}
        <br />
        <p> me : {me}</p>
        <br />

        <p>id to call : {idToCall}</p>
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div>
            <h3>{name} is calling...</h3>
            <button
              className='rounded-lg bg-primary px-2 py-1 duration-200 hover:bg-textColor'
              onClick={answerCall}
            >
              Answer
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
