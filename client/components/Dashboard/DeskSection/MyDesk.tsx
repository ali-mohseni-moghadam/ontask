import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons"

export default function MyDesk() {
  return (
    <div className="h-full pt-4">
      <table className="w-full">
        <thead className="border-b-2 border-secondary">
          <tr>
            <th>ID میز</th>
            <th>فعالیت</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td className="text-center">
              <button
                className="m-2 rounded-full bg-[#ff3333] p-1"
                onClick={() => console.log("close")}
              >
                <Cross2Icon className="size-5" />
              </button>
              <button
                className="rounded-full bg-[#4db34d] p-1"
                onClick={() => console.log("click")}
              >
                <CheckIcon className="size-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
