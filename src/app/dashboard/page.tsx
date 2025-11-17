import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Get active subscription
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select(`
      *,
      membership_types (*)
    `)
    .eq('user_id', user.id)
    .eq('status', 'active')
    .single()

  const firstName = profile?.first_name || 'Mitglied'

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Hallo, {firstName}!
        </h1>
        <p className="text-muted">
          Willkommen in deinem persönlichen Bereich bei Springbrunn Fitness.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Membership Status */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Mitgliedschaft</h3>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              subscription
                ? 'bg-green-500/20 text-green-400'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {subscription ? 'Aktiv' : 'Keine'}
            </div>
          </div>
          {subscription ? (
            <div>
              <p className="text-2xl font-bold text-primary mb-1">
                {subscription.membership_types?.name}
              </p>
              <p className="text-sm text-muted">
                Gültig bis: {new Date(subscription.end_date).toLocaleDateString('de-AT')}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-muted mb-4">
                Du hast noch keine aktive Mitgliedschaft.
              </p>
              <Link href="/dashboard/membership" className="btn btn-primary text-sm py-2 px-4">
                Jetzt starten
              </Link>
            </div>
          )}
        </div>

        {/* Profile Completion */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Profil</h3>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted">Vollständigkeit</span>
              <span className="text-white">{calculateProfileCompletion(profile)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                style={{ width: `${calculateProfileCompletion(profile)}%` }}
              />
            </div>
          </div>
          <Link href="/dashboard/profile" className="text-primary hover:text-primary-600 text-sm font-medium transition-colors">
            Profil vervollständigen &rarr;
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Schnellzugriff</h3>
          <div className="space-y-3">
            <Link
              href="/dashboard/membership"
              className="block text-muted hover:text-white transition-colors text-sm"
            >
              &rarr; Mitgliedschaft verwalten
            </Link>
            <Link
              href="/dashboard/profile"
              className="block text-muted hover:text-white transition-colors text-sm"
            >
              &rarr; Profil bearbeiten
            </Link>
            <a
              href="mailto:kontakt@springbrunn-fitness.at"
              className="block text-muted hover:text-white transition-colors text-sm"
            >
              &rarr; Support kontaktieren
            </a>
          </div>
        </div>
      </div>

      {/* Recent Activity / Info Section */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Informationen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">Öffnungszeiten</h4>
            <p className="text-muted text-sm">
              Montag - Sonntag: 05:00 - 23:00 Uhr<br />
              365 Tage im Jahr geöffnet
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Kontakt</h4>
            <p className="text-muted text-sm">
              Tel: +43 676 7466277<br />
              E-Mail: kontakt@springbrunn-fitness.at
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function calculateProfileCompletion(profile: Record<string, unknown> | null): number {
  if (!profile) return 0

  const fields = [
    'first_name',
    'last_name',
    'phone',
    'address',
    'postal_code',
    'city',
    'date_of_birth',
  ]

  const filledFields = fields.filter(field => profile[field] && String(profile[field]).trim() !== '')
  return Math.round((filledFields.length / fields.length) * 100)
}
