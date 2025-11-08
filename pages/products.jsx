    import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'

export default function Products(){
  return (
    <>
      <Header />
      <main>
        <section className="container section">
          <h2 className="section-title">Our Products</h2>
          <ProductGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}
