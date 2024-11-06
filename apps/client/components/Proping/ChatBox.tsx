export default function ChatBox({
  messages
}: {
  messages: { text: string; fromUser: boolean }[]
}) {
  return (
    <div className='card flex h-64 flex-col overflow-y-auto border border-primary p-4'>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-3 w-fit max-w-xs rounded-xl p-2 text-sm ${
            msg.fromUser
              ? 'self-start bg-primary text-[#fff]'
              : 'text-black self-end bg-secondary'
          }`}
        >
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  )
}
