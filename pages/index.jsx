import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import WhatsAppCTA from '../components/WhatsAppCTA'
import dynamic from 'next/dynamic'

const ChatBot = dynamic(() => import('../components/ChatBot'), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="container section">
          <h2 className="section-title">Featured Collection</h2>
          <ProductGrid />
        </section>
        <ChatBot />
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  )
}
