'use client'

import { type DeskParams } from '@/app/(user)/desk/[id]/page'
import ChatBox from './ChatBox'
import TaskSection from './TaskSection'
import VideoConference from './VideoConference'

export default function DeskPage({ params }: DeskParams) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = params

  return (
    <section className='mb-4 mt-4 flex w-full flex-col gap-2 lg:grid lg:grid-cols-3'>
      <ChatBox />
      <div className='mb-10 h-full rounded-lg bg-background px-2 py-4 shadow-lg'>
        <h5 className='mb-2 text-lg'>اعضا</h5>
        <div className='p-2'>
          <p className='text-[#707070]'>هیچ عضوی وجود ندارد</p>
        </div>
      </div>
      <TaskSection />

      <div className='mb-10 rounded-lg bg-background px-2 py-4 shadow-lg'>
        <h5 className='mb-2 text-lg'>یادداشت ها</h5>
        <div className='p-2'>
          <textarea
            cols={4}
            rows={4}
            name='notes'
            id='notes'
            className='w-full border-b-2 border-secondary outline-none duration-200 focus:border-primary'
          ></textarea>
        </div>
      </div>
      <VideoConference />
    </section>
  )
}
