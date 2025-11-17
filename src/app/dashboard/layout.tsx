import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LogoutButton } from './logout-button'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const displayName = profile?.first_name
    ? `${profile.first_name} ${profile.last_name || ''}`.trim()
    : user.email

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dashboard Header */}
      <header className="w-full py-4 px-4 border-b border-white/10 bg-card/50 backdrop-blur-sm">
        <div className="container flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">
            Springbrunn Fitness
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-muted hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/dashboard/membership" className="text-muted hover:text-white transition-colors">
              Mitgliedschaft
            </Link>
            <Link href="/dashboard/profile" className="text-muted hover:text-white transition-colors">
              Profil
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted hidden sm:block">
              {displayName}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-around py-3 border-b border-white/10 bg-card/30">
        <Link href="/dashboard" className="text-muted hover:text-white transition-colors text-sm">
          Dashboard
        </Link>
        <Link href="/dashboard/membership" className="text-muted hover:text-white transition-colors text-sm">
          Mitgliedschaft
        </Link>
        <Link href="/dashboard/profile" className="text-muted hover:text-white transition-colors text-sm">
          Profil
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-8 px-4">
        <div className="container">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-4 text-center text-muted text-sm border-t border-white/10">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SGH Fitness GmbH</p>
        </div>
      </footer>
    </div>
  )
}
