"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hours() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const contentRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="hours" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          <div ref={titleRef} className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
              <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--accent)]">Immer für dich da</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Öffnungszeiten
            </h2>
            <p className="text-white/50 text-sm">
              Täglich für dich da
            </p>
          </div>

          <div ref={contentRef} className="fade-in-up">
            {/* Hauptzeiten - Split Design */}
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              {/* Öffnung */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Öffnung</h3>
                <div className="text-7xl md:text-8xl font-bold text-white mb-3 font-mono">05:00</div>
                <p className="text-white/50">Perfekt für Frühaufsteher</p>
              </div>

              {/* Schließung */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Schließung</h3>
                <div className="text-7xl md:text-8xl font-bold text-white mb-3 font-mono">23:00</div>
                <p className="text-white/50">Ideal für Nachtschwärmer</p>
              </div>
            </div>

            {/* Info-Banner */}
            <div className="text-center pt-12 mt-8 border-t border-white/5">
              <p className="text-[var(--accent)] font-semibold text-lg md:text-xl">
                7 Tage die Woche · 365 Tage im Jahr · 18 Stunden täglich
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

