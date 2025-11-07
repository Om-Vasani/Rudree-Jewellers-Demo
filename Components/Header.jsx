    import Link from 'next/link'

export default function Header(){
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/images/logo.png" alt="Rudree" className="logo" />
          <div>
            <h1 className="brand-title">Rudree Jewellers</h1>
            <p className="brand-sub">Handcrafted since 1995</p>
          </div>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
