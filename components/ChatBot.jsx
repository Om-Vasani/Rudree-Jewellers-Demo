import { useState } from 'react'

export default function ChatBot() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })
    const data = await res.json()
    setResponse(data.reply)
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border shadow-xl rounded-xl p-4 w-72">
      <h3 className="font-bold text-gray-700">💬 Chat with Rudree AI</h3>
      <textarea
        className="w-full border mt-2 p-2 rounded-md"
        rows="2"
        placeholder="Ask about jewellery..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="bg-yellow-500 text-white w-full py-2 rounded-md mt-2 hover:bg-yellow-600"
      >
        Send
      </button>
      {response && <p className="mt-3 text-gray-700">{response}</p>}
    </div>
  )
}
