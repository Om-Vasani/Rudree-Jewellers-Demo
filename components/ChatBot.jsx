import { useState } from 'react'

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return
    const newMsg = { user: true, text: input }
    setMessages((prev) => [...prev, newMsg])
    setInput('')

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()
    setMessages((prev) => [...prev, { user: false, text: data.reply }])
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-yellow-700 text-white p-4 rounded-full shadow-lg hover:bg-yellow-800"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 bg-white w-72 rounded-2xl shadow-lg border">
          <div className="p-3 border-b bg-yellow-600 text-white rounded-t-2xl">
            <b>Rudree Assistant</b>
          </div>
          <div className="p-3 h-64 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <p key={i} className={m.user ? 'text-right text-yellow-800' : 'text-gray-700'}>
                {m.text}
              </p>
            ))}
          </div>
          <div className="p-3 border-t flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
              className="flex-1 border rounded p-1 text-sm"
            />
            <button onClick={sendMessage} className="ml-2 bg-yellow-700 text-white px-3 rounded text-sm">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
                           }
