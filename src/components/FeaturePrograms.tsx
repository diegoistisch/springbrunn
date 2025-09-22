"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  {
    title: "HIIT Ignite",
    img: "/images/hero.jpg",
    desc: "Intensives Intervalltraining für Fettverbrennung und Kondition.",
  },
  {
    title: "Strength Evolution",
    img: "/images/machine1.jpg",
    desc: "Progressiver Kraftaufbau für langfristige Erfolge.",
  },
  {
    title: "Flow & Restore",
    img: "/images/machine1.jpg",
    desc: "Mobilität und Regeneration für bessere Balance.",
  },
];

export default function FeaturePrograms() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const cardsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="programs" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div ref={titleRef} className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--primary)]">Unsere Programme</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto text-white leading-tight mb-6">
            Individuelle
            <span className="text-[var(--primary)]"> Trainingspläne </span>
            für deine Ziele
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Kraft, Ausdauer oder Balance - wir haben das richtige Programm für dich.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 fade-in-up">
          {items.map((it, index) => (
            <div
              key={it.title}
              className="card overflow-hidden group hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative"
              style={{
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={it.img}
                  alt={it.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="p-8 relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-[var(--primary)] px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10">
                    PROGRAMM
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {it.title}
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  {it.desc}
                </p>

                <div className="flex items-center text-[var(--primary)] font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Mehr erfahren</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
