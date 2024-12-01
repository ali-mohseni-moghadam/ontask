"use client"

import ChatBox from "./ChatBox"
import TaskSection from "./TaskSection"
import VideoConference from "./VideoConference"

export default function DeskPage() {
  return (
    <section className="mb-4 mt-4 flex w-full flex-col gap-6 lg:grid lg:grid-cols-3">
      <ChatBox />
      <div className="card mb-6 h-full bg-background px-2 py-4">
        <h5 className="mb-2 text-lg">اعضا</h5>
        <div className="p-2">
          <p className="text-[#707070]">هیچ عضوی وجود ندارد</p>
        </div>
      </div>
      <TaskSection />

      <div className="card mb-6 h-full bg-background px-2 py-4">
        <h5 className="mb-2 text-lg">یادداشت ها</h5>
        <div className="p-2">
          <textarea
            cols={4}
            rows={20}
            name="notes"
            id="notes"
            className="w-full border-b-2 border-secondary outline-none duration-200 focus:border-primary"
            placeholder="یادداشت مورد نظر را بنویسید"
          ></textarea>
        </div>
      </div>
      <VideoConference />
    </section>
  )
}
