import React from "react"

export default function NoteSection() {
  return (
    <div className="card mb-6 h-[600px] bg-background px-2 py-4">
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
  )
}
