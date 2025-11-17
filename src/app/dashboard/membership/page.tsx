import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

interface MembershipType {
  id: string
  name: string
  description: string | null
  price_cents: number
  duration_days: number
  stripe_price_id: string | null
  is_recurring: boolean
  features: string[]
}

interface Subscription {
  id: string
  status: string
  start_date: string
  end_date: string | null
  cancelled_at: string | null
  membership_types: MembershipType
}

export default async function MembershipPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  // Get all membership types
  const { data: membershipTypes } = await supabase
    .from('membership_types')
    .select('*')
    .order('price_cents', { ascending: true })

  // Get user's active subscription
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select(`
      *,
      membership_types (*)
    `)
    .eq('user_id', user.id)
    .eq('status', 'active')
    .single() as { data: Subscription | null }

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('de-AT', {
      style: 'currency',
      currency: 'EUR',
    }).format(cents / 100)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Mitgliedschaft</h1>
        <p className="text-muted">Verwalte deine Mitgliedschaft bei Springbrunn Fitness</p>
      </div>

      {/* Current Subscription */}
      {subscription && (
        <div className="card p-6 border-primary/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Deine aktive Mitgliedschaft</h2>
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
              Aktiv
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted mb-1">Typ</p>
              <p className="text-lg font-semibold text-primary">
                {subscription.membership_types.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Gültig bis</p>
              <p className="text-lg font-semibold text-white">
                {subscription.end_date
                  ? new Date(subscription.end_date).toLocaleDateString('de-AT')
                  : 'Unbegrenzt'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted mb-1">Preis</p>
              <p className="text-lg font-semibold text-white">
                {formatPrice(subscription.membership_types.price_cents)}
                {subscription.membership_types.is_recurring && (
                  <span className="text-sm text-muted">
                    /{subscription.membership_types.duration_days === 30 ? 'Monat' : 'Jahr'}
                  </span>
                )}
              </p>
            </div>
          </div>

          {subscription.membership_types.is_recurring && !subscription.cancelled_at && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <button className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                Mitgliedschaft kündigen
              </button>
              <p className="text-xs text-muted mt-2">
                Die Kündigung wird zum Ende der aktuellen Laufzeit wirksam.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Available Plans */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">
          {subscription ? 'Andere Mitgliedschaften' : 'Verfügbare Mitgliedschaften'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTypes?.map((type: MembershipType) => {
            const isCurrentPlan = subscription?.membership_types.id === type.id
            const features = type.features || []

            return (
              <div
                key={type.id}
                className={`card p-6 relative ${
                  isCurrentPlan ? 'border-primary/50 opacity-60' : 'hover:border-white/30 transition-colors'
                }`}
              >
                {isCurrentPlan && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                    Aktuell
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                <p className="text-muted text-sm mb-4">{type.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {formatPrice(type.price_cents)}
                  </span>
                  {type.is_recurring && (
                    <span className="text-muted text-sm">
                      /{type.duration_days === 30 ? 'Monat' : 'Jahr'}
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-sm text-muted">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {!isCurrentPlan && (
                  <button
                    className="w-full btn btn-primary text-sm py-3"
                    disabled={!type.stripe_price_id}
                  >
                    {type.stripe_price_id ? 'Jetzt buchen' : 'Demnächst verfügbar'}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {!membershipTypes || membershipTypes.length === 0 && (
          <div className="card p-8 text-center">
            <p className="text-muted">
              Keine Mitgliedschaften verfügbar. Bitte kontaktiere uns für weitere Informationen.
            </p>
            <a href="mailto:kontakt@springbrunn-fitness.at" className="btn btn-primary mt-4">
              Kontakt aufnehmen
            </a>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Hinweise zur Mitgliedschaft</h3>
        <div className="space-y-4 text-sm text-muted">
          <p>
            <strong className="text-white">Kündigung:</strong> Monats- und Jahresabos können jederzeit
            zum Ende der aktuellen Laufzeit gekündigt werden.
          </p>
          <p>
            <strong className="text-white">Widerrufsrecht:</strong> Du hast ein 14-tägiges Widerrufsrecht
            gemäß unserer{' '}
            <Link href="/widerruf" className="text-primary hover:text-primary-600">
              Widerrufsbelehrung
            </Link>.
          </p>
          <p>
            <strong className="text-white">Fragen?</strong> Kontaktiere uns unter{' '}
            <a href="tel:+436767466277" className="text-primary hover:text-primary-600">
              +43 676 7466277
            </a>{' '}
            oder per{' '}
            <a href="mailto:kontakt@springbrunn-fitness.at" className="text-primary hover:text-primary-600">
              E-Mail
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
