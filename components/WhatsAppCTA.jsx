import Image from 'next/image'

export default function WhatsAppCTA() {
  return (
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
    </a>
  )
}
