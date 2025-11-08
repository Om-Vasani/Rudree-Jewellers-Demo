    import { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); alert('Message sent (demo)') }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="grid">
        <input name="name" placeholder="Name" value={form.name} onChange={handle} required/>
        <input name="email" placeholder="Email" value={form.email} onChange={handle} required/>
      </div>
      <textarea name="message" placeholder="Message" value={form.message} onChange={handle} required/>
      <button type="submit" className="btn-primary">Send Message</button>
    </form>
  )
}
