import { useState } from 'react'

interface Task {
  id: number
  text: string
  isDone: boolean
}

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, isDone: false }])
      setNewTask('')
    }
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleToggleDone = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  return (
    <div className='flex flex-col rounded-lg bg-background px-2 py-4 shadow-lg'>
      <h5 className='mb-4 text-lg'>برنامه ریزی</h5>
      <div className='mb-4 flex flex-col p-2'>
        <input
          type='text'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder='تسک جدید'
          className='mb-2 w-full rounded border border-secondary px-2 py-1 outline-none'
        />
        <button
          onClick={handleAddTask}
          className='self-end rounded bg-primary px-2 py-1 text-[#fff]'
        >
          اضافه کردن
        </button>
      </div>

      {/* Active Tasks Section */}
      <h6 className='mb-2 rounded bg-[#fdd244] p-1 text-lg'>تسک‌ها</h6>
      <ul className='p-2'>
        {tasks
          .filter(task => !task.isDone)
          .map(task => (
            <li
              key={task.id}
              className='mb-2 flex w-full flex-col justify-between gap-x-1 whitespace-pre-wrap break-words border-b border-accentColor pb-3 xsm:flex xsm:flex-row xsm:items-center lg:flex-col'
            >
              <span className='mb-3 w-full xsm:w-[50%] lg:w-full'>
                {task.text}
              </span>
              <div className='self-end xsm:self-center lg:self-end'>
                <button
                  onClick={() => handleToggleDone(task.id)}
                  className='text-white ml-2 rounded bg-[#3ef83e] px-2 py-1'
                >
                  انجام شد
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className='text-white ml-2 rounded bg-[#fa4242] px-2 py-1'
                >
                  حذف
                </button>
              </div>
            </li>
          ))}
      </ul>

      {/* Done Tasks Section */}
      <h6 className='mb-2 mt-6 rounded bg-[#3ef83e] p-1 text-lg'>انجام شده</h6>
      <ul className='p-2'>
        {tasks
          .filter(task => task.isDone)
          .map(task => (
            <li
              key={task.id}
              className='mb-2 w-full flex-col items-center justify-between gap-x-1 whitespace-pre-wrap break-words border-b border-accentColor pb-2 xsm:flex xsm:flex-row'
            >
              <span className='w-full text-[#707070] line-through xsm:w-[50%]'>
                {task.text}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className='text-white ml-2 w-full rounded bg-[#fa4242] px-2 py-1 xsm:w-[20%]'
              >
                حذف
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
