import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../lib/firebaseClient'

export default function Admin() {
  const [form, setForm] = useState({ title: '', desc: '', price: '', img: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await addDoc(collection(db, 'products'), form)
      alert('Product added successfully!')
      setForm({ title: '', desc: '', price: '', img: '' })
    } catch (err) {
      alert('Error adding product!')
      console.error(err)
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Title" className="p-2 border rounded" />
          <input name="desc" value={form.desc} onChange={handleChange} required placeholder="Description" className="p-2 border rounded" />
          <input name="price" value={form.price} onChange={handleChange} required placeholder="Price" className="p-2 border rounded" />
          <input name="img" value={form.img} onChange={handleChange} required placeholder="Image URL" className="p-2 border rounded" />
          <button disabled={loading} className="bg-yellow-600 text-white px-4 py-2 rounded">
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
            }
