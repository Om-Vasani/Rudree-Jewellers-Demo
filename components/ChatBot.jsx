import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

export default function ChatBot(){
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are a helpful assistant for a jewellery store.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)

  useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight }, [messages])

  const send = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    const newMsgs = [...messages, userMsg]
    setMessages(newMsgs)
    setInput('')
    setLoading(true)

    try {
      const resp = await axios.post('/api/chat', { messages: newMsgs })
      const botReply = resp.data.reply
      setMessages(prev => [...prev, { role: 'assistant', content: botReply }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chatbot themed">
      <div className="messages" ref={ref}>
        {messages.filter(m => m.role !== 'system').map((m,i)=>(
          <div key={i} className={m.role==='user' ? 'user' : 'bot'}>{m.content}</div>
        ))}
      </div>

      <div className="chat-input">
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} placeholder={loading? 'Waiting...':'Ask about products, custom orders...'} disabled={loading}/>
        <button onClick={send} disabled={loading}>Send</button>
      </div>
    </div>
  )
}
