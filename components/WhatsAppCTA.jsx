    export default function WhatsAppCTA(){
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'
  return (
    <a className="whatsapp-cta" href={`https://wa.me/${number}`} target="_blank" rel="noreferrer">
      <span>📱</span> Message on WhatsApp
    </a>
  )
}
