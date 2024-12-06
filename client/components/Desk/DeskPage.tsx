"use client"

import ChatBox from "./ChatBox"
import MemberList from "./MemberList"
import NoteSection from "./NoteSection"
import TaskSection from "./TaskSection/TaskSection"
import VideoConference from "./VideoConference"

export default function DeskPage() {
  return (
    <section className="mt-4 flex w-full flex-col gap-x-6 lg:grid lg:grid-cols-3">
      <ChatBox />
      <MemberList />
      <TaskSection />
      <NoteSection />
      <VideoConference />
    </section>
  )
}
