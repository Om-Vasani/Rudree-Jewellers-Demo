import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <p className="mb-4">For orders and enquiries WhatsApp us or use the form below.</p>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
