// pages/admin.jsx
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../lib/firebaseClient'

export default function Admin() {
  const [form, setForm] = useState({ title: '', desc: '', price: '', img: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await addDoc(collection(db, 'products'), {
        title: form.title,
        desc: form.desc,
        price: form.price,
        img: form.img,
        createdAt: new Date().toISOString(),
      })
      alert('Product added!')
      setForm({ title: '', desc: '', price: '', img: '' })
    } catch (err) {
      console.error(err)
      alert('Error adding product — check console.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Admin — Add Product</h1>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <input name="title" value={form.title} onChange={handleChange} required placeholder="Title" className="p-2 border rounded" />
          <input name="desc" value={form.desc} onChange={handleChange} required placeholder="Short description" className="p-2 border rounded" />
          <input name="price" value={form.price} onChange={handleChange} required placeholder="Price (e.g. ₹85,000)" className="p-2 border rounded" />
          <input name="img" value={form.img} onChange={handleChange} required placeholder="Image URL (public/images/xyz.jpg or external)" className="p-2 border rounded" />
          <div>
            <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded" disabled={loading}>
              {loading ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Note: This demo writes directly to Firestore. For production protect this route with auth or use Cloud Functions.
        </p>
      </main>
      <Footer />
    </>
  )
              }    <>
      <Header />
      <div className="container admin-panel">
        <h2>Admin</h2>
        <div className="admin-form">
          <input placeholder="Title" value={p.title} onChange={e=>setP({...p,title:e.target.value})}/>
          <input placeholder="Price" value={p.price} onChange={e=>setP({...p,price:e.target.value})}/>
          <input type="file" onChange={e=>setFile(e.target.files[0])}/>
          <button onClick={addProduct}>Add</button>
        </div>

        <div className="product-grid" style={{marginTop: '1rem'}}>
          {products.map(prod => <ProductCard key={prod.id} {...prod} />)}
        </div>
      </div>
    </>
  )
}
