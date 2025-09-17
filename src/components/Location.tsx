"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Location() {
  const titleRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  return (
    <section id="location" className="py-32 relative">
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div ref={titleRef} className="slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--accent)]">Anfahrt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Finde zu uns</h2>
          <p className="text-lg text-white/70 mb-6">
            Zentral gelegen und gut erreichbar
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-white/80 flex items-center gap-3">
              <span className="w-5 h-5 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
              </span>
              Musterstraße 12, 12345 Musterstadt
            </p>
            <p className="text-white/80 flex items-center gap-3">
              <span className="w-5 h-5 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full"></span>
              </span>
              ÖPNV: U2 Musterplatz, Bus 101 Fitnesspark
            </p>
          </div>
          <a href="https://maps.google.com" target="_blank" className="btn btn-primary">In Karten öffnen</a>
        </div>
        <div ref={mapRef} className="card min-h-80 h-96 w-full grid place-items-center text-white/50 slide-in-right">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--accent)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>Karten-Embed Platzhalter</p>
          </div>
        </div>
      </div>
    </section>
  );
}

