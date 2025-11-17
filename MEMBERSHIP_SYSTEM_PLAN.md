# Springbrunn Fitness - Login/Register & Mitgliedschafts-Management System

## Übersicht

Dieses Dokument beschreibt die Implementierung eines vollständigen Benutzer-Management- und Mitgliedschaftssystems für die Springbrunn Fitness Website.

---

## 1. Technologie-Stack

### Authentication & Database
- **Supabase** - All-in-One Backend
  - PostgreSQL Datenbank
  - Authentication (Email/Password, OAuth)
  - Row Level Security
  - Real-time Subscriptions
  - Storage für Dokumente

### Payments
- **Stripe** - Payment Processing
  - Recurring Subscriptions
  - SEPA-Lastschrift (für Österreich)
  - Webhook Integration
  - Customer Portal

### Frontend
- **Next.js 15** (bereits vorhanden)
- **React 19** (bereits vorhanden)
- **Tailwind CSS** (bereits vorhanden)

---

## 2. Datenbank-Schema

### Tabellen

```sql
-- Users (erweitert Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  address TEXT,
  postal_code TEXT,
  city TEXT,
  date_of_birth DATE,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Mitgliedschafts-Typen
CREATE TABLE public.membership_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER NOT NULL,
  duration_days INTEGER NOT NULL, -- 1 für Tagespass, 30 für Monat, 365 für Jahr
  stripe_price_id TEXT,
  is_recurring BOOLEAN DEFAULT false,
  features JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Aktive Mitgliedschaften
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  membership_type_id UUID REFERENCES public.membership_types(id) NOT NULL,
  stripe_subscription_id TEXT,
  status TEXT NOT NULL DEFAULT 'active', -- active, cancelled, expired, paused
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  cancelled_at TIMESTAMP WITH TIME ZONE,
  cancellation_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Zahlungshistorie
CREATE TABLE public.invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  subscription_id UUID REFERENCES public.subscriptions(id),
  stripe_invoice_id TEXT,
  amount_cents INTEGER NOT NULL,
  status TEXT NOT NULL, -- paid, pending, failed
  paid_at TIMESTAMP WITH TIME ZONE,
  invoice_pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 3. Features & User Stories

### Authentication
- [x] Benutzer kann sich registrieren (Email/Password)
- [x] Benutzer kann sich einloggen
- [x] Benutzer kann Passwort zurücksetzen
- [ ] OAuth Login (Google, Apple) - Optional
- [x] Email-Verifizierung
- [x] Session Management

### Profil-Verwaltung
- [ ] Profil anzeigen
- [ ] Profil bearbeiten
- [ ] Passwort ändern
- [ ] Account löschen (DSGVO)

### Mitgliedschaft
- [ ] Verfügbare Mitgliedschaften anzeigen
- [ ] Mitgliedschaft kaufen/abschließen
- [ ] Aktive Mitgliedschaft anzeigen
- [ ] Mitgliedschaft kündigen
- [ ] Mitgliedschaft upgraden/downgraden
- [ ] Kündigungsbestätigung per Email

### Zahlungen
- [ ] Stripe Checkout Integration
- [ ] Recurring Payments
- [ ] Zahlungshistorie anzeigen
- [ ] Rechnungen herunterladen
- [ ] Zahlungsmethode ändern

### Admin (Optional)
- [ ] Alle Benutzer anzeigen
- [ ] Mitgliedschaften verwalten
- [ ] Umsatzübersicht

---

## 4. Seiten-Struktur

```
/src/app/
├── (auth)/                      # Auth-Gruppe (ohne Navbar)
│   ├── login/page.tsx           # Login-Seite
│   ├── register/page.tsx        # Registrierung
│   ├── forgot-password/page.tsx # Passwort vergessen
│   └── reset-password/page.tsx  # Passwort zurücksetzen
├── dashboard/                   # Geschützter Bereich
│   ├── page.tsx                 # Dashboard Übersicht
│   ├── profile/page.tsx         # Profil bearbeiten
│   ├── membership/page.tsx      # Mitgliedschaft verwalten
│   ├── invoices/page.tsx        # Rechnungen
│   └── settings/page.tsx        # Einstellungen
├── api/                         # Backend API Routes
│   ├── auth/
│   │   └── callback/route.ts    # Supabase Auth Callback
│   ├── stripe/
│   │   ├── create-checkout/route.ts
│   │   ├── webhook/route.ts
│   │   └── portal/route.ts
│   └── user/
│       ├── profile/route.ts
│       └── subscription/route.ts
└── middleware.ts                # Route Protection
```

---

## 5. Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-publishable-key
STRIPE_SECRET_KEY=your-secret-key
STRIPE_WEBHOOK_SECRET=your-webhook-secret

# App
NEXT_PUBLIC_APP_URL=https://springbrunn-fitness.at
```

---

## 6. Implementierungs-Reihenfolge

### Phase 1: Foundation (Woche 1)
1. ✅ Supabase Projekt erstellen
2. ✅ Dependencies installieren
3. ✅ Datenbank-Schema aufsetzen
4. ✅ Supabase Client konfigurieren
5. ✅ Basic Auth (Login/Register)

### Phase 2: User Management (Woche 2)
6. Dashboard Layout
7. Profil-Seite
8. Protected Routes (Middleware)
9. Session Handling

### Phase 3: Payments (Woche 3)
10. Stripe Integration
11. Checkout Flow
12. Webhook Handling
13. Subscription Management

### Phase 4: Polish (Woche 4)
14. Email Templates
15. Error Handling
16. Loading States
17. Testing
18. DSGVO Compliance Check

---

## 7. Sicherheit & Compliance

### DSGVO (Österreich/EU)
- Datenschutzerklärung aktualisieren
- Cookie-Consent für Auth-Cookies
- Recht auf Datenlöschung implementieren
- Datenexport-Funktion
- Einwilligungserklärung bei Registrierung

### Sicherheit
- Row Level Security in Supabase
- CSRF Protection
- Rate Limiting
- Input Validation
- Secure Password Policy
- HTTPS (bereits via Netlify)

### Rechtliches
- AGB-Zustimmung bei Registrierung
- Widerrufsrecht bei digitalen Verträgen
- Automatische Vertragsverlängerung Info
- Kündigungsfristen klar kommunizieren

---

## 8. Kosten (Geschätzt)

### Supabase
- **Free Tier:** 50,000 MAU, 500MB DB, 1GB Storage
- **Pro:** $25/Monat (unbegrenzte MAU)

### Stripe
- **Transaktionsgebühren:** 1.4% + 0.25€ (EU-Karten)
- **SEPA:** 0.35€ pro Transaktion
- Keine monatlichen Fixkosten

### Domain & Hosting
- Bereits vorhanden (Netlify)

**Gesamtkosten Start:** ~$25-50/Monat

---

## 9. Nächste Schritte

1. **Supabase Account erstellen** auf [supabase.com](https://supabase.com)
2. **Stripe Account erstellen** auf [stripe.com](https://stripe.com)
3. **Environment Variables** in `.env.local` konfigurieren
4. **Dependencies installieren** (siehe unten)

```bash
npm install @supabase/supabase-js @supabase/ssr @stripe/stripe-js stripe
```

---

## 10. Kontakt & Support

Bei Fragen zur Implementierung:
- Supabase Docs: https://supabase.com/docs
- Stripe Docs: https://stripe.com/docs
- Next.js Auth: https://nextjs.org/docs/app/building-your-application/authentication

---

*Erstellt am: $(date)*
*Version: 1.0*
