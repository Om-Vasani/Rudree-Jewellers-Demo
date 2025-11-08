import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <img src="/images/logo.png" alt="Rudree Jewellers" className="h-10" />
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
