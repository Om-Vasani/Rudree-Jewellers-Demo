    import { useState, useEffect } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { db, storage } from '../lib/firebaseClient'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

export default function Admin(){
  const [products, setProducts] = useState([])
  const [p, setP] = useState({ title:'', price:'' })
  const [file, setFile] = useState(null)

  useEffect(()=> {
    const load = async () => {
      try {
        const snaps = await getDocs(collection(db, 'products'))
        setProducts(snaps.docs.map(d => ({ id: d.id, ...d.data() })))
      } catch(e) {
        console.warn('Firestore load skipped in local demo', e.message)
      }
    }
    load()
  }, [])

  const addProduct = async () => {
    if (!p.title || !file) return alert('Title and image required')
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    await addDoc(collection(db, 'products'), { title: p.title, price: p.price, img: url, createdAt: Date.now() })
    setP({ title:'', price:'' })
    setFile(null)
    alert('Product added')
  }

  return (
    <>
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
