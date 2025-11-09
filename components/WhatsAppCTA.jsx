import Image from 'next/image'

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp Chat"
        width={30}
        height={30}
        className="rounded-full shadow-lg"
      />
    </a>
  )
}
