import { Reorder } from "framer-motion"
import React, { useRef, useState } from "react"
import TaskItem from "./TaskItem"

export interface Task {
  id: number
  text: string
  isDone: boolean
}

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const container = useRef(null)

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, isDone: false }])
      setNewTask("")
    }
  }

  const checkHandler = (id: number) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      handleAddTask()
    }
  }

  return (
    <div className="card mb-6 flex h-[600px] flex-col overflow-y-auto bg-background px-2 py-4">
      <h5 className="mb-4 text-lg">برنامه ریزی</h5>
      <div className="mb-4 flex flex-col p-2">
        <textarea
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          className="block max-h-[90%] w-full resize-none overflow-y-auto border-none bg-background px-2 py-1 text-[#000] placeholder-[#707070] outline-none"
          placeholder="پیام خود را بنویسید"
        />
        <button
          onClick={handleAddTask}
          className="hover-button self-end rounded px-2 py-1"
        >
          اضافه کردن
        </button>
      </div>

      <Reorder.Group
        className="mb-4 flex flex-col gap-y-2 p-2"
        values={tasks}
        onReorder={setTasks}
        ref={container}
        axis="y"
      >
        {tasks.map(item => (
          <TaskItem
            key={item.id}
            item={item}
            checkHandler={checkHandler}
            container={container}
          />
        ))}
      </Reorder.Group>
    </div>
  )
}
