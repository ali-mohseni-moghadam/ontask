import { DragHandleHorizontalIcon } from "@radix-ui/react-icons"
import { Reorder } from "framer-motion"
import { useState } from "react"

interface Task {
  id: number
  text: string
  isDone: boolean
}

export default function TaskSection() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Math.random(), text: newTask, isDone: false }])
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

  return (
    <div className="card mb-6 flex h-[600px] flex-col overflow-y-auto bg-background px-2 py-4">
      <h5 className="mb-4 text-lg">برنامه ریزی</h5>
      <div className="mb-4 flex flex-col p-2">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="تسک جدید"
          className="mb-2 w-full rounded border border-secondary px-2 py-1 outline-none"
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
        axis="y"
        onReorder={setTasks}
      >
        {tasks.map(item => (
          <Reorder.Item
            key={item.id}
            value={item}
            className="flex items-center justify-between whitespace-pre-wrap break-words rounded-xl bg-secondary p-2"
          >
            <DragHandleHorizontalIcon className="size-6" />

            <p
              className={`${item.isDone ? "text-[#707070] line-through" : ""} w-[70%] text-center`}
            >
              {item.text}
            </p>
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={item.isDone}
              onChange={() => checkHandler(item.id)}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
