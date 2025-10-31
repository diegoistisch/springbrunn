"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Plan = {
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Tageskarte",
    price: 15,
    features: ["Zutritt Fitnessbereich", "Einführung inkl.", "Perfekt zum Reinschnuppern"],
  },
  {
    name: "Jahresvertrag",
    price: 54.90,
    features: ["Alle Bereiche", "Gruppenkurse", "12 Monate Laufzeit", "Beste Preis-Leistung"],
    highlight: true,
  },
  {
    name: "Monatskarte",
    price: 85,
    features: ["Alle Bereiche", "Gruppenkurse", "1 Monat gültig"],
    badge: "Keine Vertragsbindung",
  },
];

export default function Pricing() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const cardsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="plans" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div ref={titleRef} className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--primary)]">Mitgliedschaften</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Flexible Tarife für jedes
            <span className="text-[var(--primary)]"> Fitnessziel</span>
          </h2>
        </div>

        <div ref={cardsRef} className="fade-in-up">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {plans.map((p, index) => (
            <div
              key={p.name}
              className={`card p-8 relative text-white flex flex-col transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
                p.highlight
                  ? "border-[var(--primary)]/50 scale-105 shadow-2xl shadow-[var(--primary)]/20"
                  : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                <div className="w-full h-full rounded-3xl bg-[var(--card)]" />
              </div>
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-600)] rounded-full text-xs font-semibold text-white">
                  BELIEBT
                </div>
              )}
              {p.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-full text-xs font-semibold text-white">
                  {p.badge}
                </div>
              )}

              <div className="mb-6 relative z-10">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Tarif</p>
                  <h4 className="text-xl font-bold">{p.name}</h4>
                </div>
                <div>
                  <div className={`text-4xl font-bold whitespace-nowrap ${p.highlight ? "text-[var(--primary)]" : "text-white"}`}>
                    {p.price % 1 === 0 ? p.price : p.price.toFixed(2).replace('.', ',')} €
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {p.name === "Tageskarte" ? "/ Tag" : "/ Monat"}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-sm flex-grow mb-8 relative z-10">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      p.highlight ? "bg-[var(--primary)]/20" : "bg-white/10"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        p.highlight ? "bg-[var(--primary)]" : "bg-white"
                      }`} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#enroll"
                className={`btn w-full relative z-10 ${
                  p.highlight ? "btn-primary" : "btn-outline"
                }`}
              >
                {p.name === "Tageskarte" ? "Tagesticket holen" : "Jetzt Mitglied werden"}
              </a>
            </div>
            ))}
          </div>

          {/* Ermäßigter Tarif Hinweis */}
          <div className="max-w-3xl mx-auto">
            <div className="card p-6 bg-gradient-to-r from-[var(--accent)]/10 to-[var(--secondary)]/10 border border-[var(--accent)]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Ermäßigter Tarif</h4>
                  <p className="text-[var(--accent)] font-semibold">Nur 44,90 € / Monat (Jahresvertrag) | 65 € (Monatskarte)</p>
                </div>
              </div>
              <p className="text-white/70 text-sm pl-14">
                Für Schüler, Studenten, Zivildiener, Grundwehrdiener und Senioren
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
