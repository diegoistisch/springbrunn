import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Header */}
      <header className="w-full py-6 px-4">
        <div className="container">
          <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
            Springbrunn Fitness
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-6 px-4 text-center text-muted text-sm">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SGH Fitness GmbH. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
