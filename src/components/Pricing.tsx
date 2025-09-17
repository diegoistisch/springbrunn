"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Plan = {
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Tageskarte",
    price: 15,
    features: ["Zutritt Fitnessbereich", "Einführung inkl."],
  },
  {
    name: "Mitgliedschaft monatlich",
    price: 50,
    features: ["Alle Bereiche", "Gruppenkurse", "Kündbar monatlich"],
    highlight: true,
  },
  {
    name: "Monatskarte",
    price: 65,
    features: ["Alle Bereiche", "Gruppenkurse", "1 Monat gültig"],
  },
];

export default function Pricing() {
  const titleRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section id="plans" className="py-32 relative">
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl" />

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

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto fade-in-up">
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

              <div className="flex items-baseline justify-between mb-6 relative z-10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Tarif</p>
                  <h4 className="text-xl font-bold">{p.name}</h4>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${p.highlight ? "text-[var(--primary)]" : "text-white"}`}>
                    €{p.price}
                  </div>
                  <div className="text-sm text-white/60">
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
                Jetzt Mitglied werden
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
