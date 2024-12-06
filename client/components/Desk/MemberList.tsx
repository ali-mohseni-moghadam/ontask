import React, { useState } from "react"

interface Member {
  id: number
  name: string
  role: string
  email: string
  joinedDate: string
}

const defaultMembers: Member[] = [
  {
    id: 1,
    name: "علی محسنی مقدم",
    role: "Moderator",
    email: "ali@example.com",
    joinedDate: "2024-01-01"
  },

  {
    id: 2,
    name: "علیرضا فرجی",
    role: "Admin",
    email: "reza@example.com",
    joinedDate: "2024-03-10"
  }
]

export default function MemberList() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  const handleView = (member: Member) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setSelectedMember(null)
    }
  }
  return (
    <div className="card mb-6 h-[600px] overflow-y-auto bg-background px-2 py-4">
      <h5 className="mb-2 text-lg">اعضا</h5>
      {defaultMembers.length > 0 ? (
        <ul className="space-y-2">
          {defaultMembers.map(member => (
            <li
              key={member.id}
              className="flex items-center justify-between rounded-lg bg-secondary p-4"
            >
              <div>
                <p className="text-base font-semibold">{member.name}</p>
                <p className="text-sm text-[#707070]">{member.role}</p>
              </div>
              <button
                onClick={() => handleView(member)}
                className="hover-button rounded px-2 py-1 text-sm"
              >
                View
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-center text-[#707070]">
          <p>هیچ عضوی وجود ندارد</p>
        </div>
      )}

      {/* Modal for Member Details */}
      {selectedMember && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-md"
          onClick={handleBackdropClick}
        >
          <div className="card w-[90%] max-w-md bg-background p-6">
            <h3 className="mb-4 text-lg font-bold text-primary">
              Member Details
            </h3>
            <p>
              <strong>اسم:</strong> {selectedMember.name}
            </p>
            <p>
              <strong>نقش:</strong> {selectedMember.role}
            </p>
            <p>
              <strong>ایمیل:</strong> {selectedMember.email}
            </p>
            <p>
              <strong>تاریخ عضویت:</strong> {selectedMember.joinedDate}
            </p>
            <button
              onClick={closeModal}
              className="hover-button mt-4 w-full rounded px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
