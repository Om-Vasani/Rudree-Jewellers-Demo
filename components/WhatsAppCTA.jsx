import Image from 'next/image'

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-[90px] right-5 z-50 hover:scale-110 transition-transform"
    >
      <Image
        src="/images/whatsapp.svg"
        alt="WhatsApp Chat"
        width={60}
        height={60}
        className="rounded-full shadow-lg"
      />
    </a>
  )
}
