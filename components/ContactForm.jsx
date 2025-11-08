import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="p-3 border rounded"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="p-3 border rounded"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="4"
        required
        className="p-3 border rounded"
      />
      <button className="bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800">
        Send Message
      </button>
      {sent && <p className="text-green-600 mt-2">Message Sent Successfully!</p>}
    </form>
  )
}
