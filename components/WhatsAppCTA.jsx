import Image from 'next/image'

export default function WhatsAppCTA() {
  return (
    <section className="bg-yellow-700 py-8 text-center text-white mt-10">
      <h2 className="text-2xl font-semibold mb-3">Need Assistance?</h2>
      <p className="mb-4 text-yellow-100">Chat with us on WhatsApp for custom orders and price details.</p>
      <a
      href="https://wa.me/1234567890"
      target="_blank"
      className="fixed bottom-4 right-4"
    >
      <Image
        src="https://via.placeholder.com/60x60.png?text=WA"
        alt="WhatsApp Contact"
        width={60}
        height={60}
      />
        💬 Chat on WhatsApp
      </a>
    </section>
  )
}
