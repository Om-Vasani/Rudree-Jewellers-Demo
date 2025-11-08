import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'

export default function Products() {
  return (
    <>
      <Header />
      <main className="container py-10">
        <h1 className="text-3xl font-semibold mb-6">All Jewellery Products</h1>
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
      }
