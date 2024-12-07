import { Cross2Icon, DragHandleHorizontalIcon } from "@radix-ui/react-icons"
import { Reorder, useDragControls } from "framer-motion"
import React from "react"
import { Task } from "./TaskSection"

type TaskItemProps = {
  item: Task
  container: React.MutableRefObject<null>
  checkHandler: (id: number) => void
  deleteHandler: (id: number) => void
}

export default function TaskItem({
  item,
  container,
  checkHandler,
  deleteHandler
}: TaskItemProps) {
  const dragControls = useDragControls()

  const handlePointerDown = (event: React.PointerEvent | React.TouchEvent) => {
    if (event.type === "touchstart") {
      const touchEvent = event as React.TouchEvent
      const touch = touchEvent.changedTouches[0]
      dragControls.start(touch as unknown as PointerEvent)
    } else {
      dragControls.start(event as React.PointerEvent)
    }
  }

  return (
    <Reorder.Item
      key={item.id}
      value={item}
      className="flex items-center justify-between whitespace-pre-wrap break-words rounded-xl bg-secondary p-2 px-4"
      dragControls={dragControls}
      dragConstraints={container}
      dragListener={false}
      whileDrag={{ backgroundColor: "#e0e0e0" }}
    >
      <div className="flex cursor-pointer flex-col gap-y-3">
        <div onClick={() => deleteHandler(item.id)}>
          <Cross2Icon className="size-6" />
        </div>
        <div
          className="w-fit cursor-pointer"
          onPointerDown={handlePointerDown}
          onTouchStart={handlePointerDown}
          style={{ touchAction: "none" }}
        >
          <DragHandleHorizontalIcon className="size-6" />
        </div>
      </div>

      <span
        className={`${item.isDone ? "text-[#707070] line-through" : ""} w-[70%] text-center`}
      >
        {item.text}
      </span>
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={item.isDone}
        onChange={() => checkHandler(item.id)}
      />
    </Reorder.Item>
  )
}
