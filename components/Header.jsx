import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/image/logo.png" alt="Rudree Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-yellow-700">Rudree Jewellers</span>
        </Link>
        <nav className="space-x-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
