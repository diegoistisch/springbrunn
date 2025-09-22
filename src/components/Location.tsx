"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Location() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const mapRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="location" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div ref={titleRef} className="slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--accent)]">Anfahrt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">So findest du uns.</h2>
          <p className="text-lg text-white/70 mb-8">
            Mitten in Grafenwörth - dein Weg zu uns ist ganz einfach.
          </p>
          <div className="mb-12">
            <div className="flex items-center gap-3 text-white font-semibold text-lg">
              <div className="w-6 h-6 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              Hofgarten 1, 3484 Grafenwörth
            </div>
          </div>
          <a href="https://maps.google.com/maps?q=Hofgarten+1,+3484+Grafenwörth" target="_blank" className="btn btn-primary">Navigation starten</a>
        </div>
        <div ref={mapRef} className="card min-h-80 h-96 w-full grid place-items-center text-white/50 slide-in-right">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>Google Maps wird hier angezeigt</p>
            <p className="text-sm text-white/30 mt-2">API Key erforderlich</p>
          </div>
        </div>
      </div>
    </section>
  );
}

