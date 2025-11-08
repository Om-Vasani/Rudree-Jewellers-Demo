    import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function Contact(){
  return (
    <>
      <Header />
      <main>
        <section className="container section">
          <h2 className="section-title">Contact Us</h2>
          <ContactForm />
        </section>
        <WhatsAppCTA />
      </main>
      <Footer />
    </>
  )
}
