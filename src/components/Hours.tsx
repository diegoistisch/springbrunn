"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hours() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const contentRef = useScrollAnimation<HTMLDivElement>();
  const rows = [
    { d: "Montag", t: "05:00 – 23:00" },
    { d: "Dienstag", t: "05:00 – 23:00" },
    { d: "Mittwoch", t: "05:00 – 23:00" },
    { d: "Donnerstag", t: "05:00 – 23:00" },
    { d: "Freitag", t: "05:00 – 23:00" },
    { d: "Samstag", t: "05:00 – 23:00" },
    { d: "Sonntag", t: "05:00 – 23:00" },
  ];

  return (
    <section id="hours" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto">
          <div ref={titleRef} className="text-center mb-12 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
              <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--accent)]">Immer für dich da</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Öffnungszeiten
            </h2>
            <p className="text-xl text-white/70">
              Täglich von 05:00 bis 23:00 Uhr für dich geöffnet
            </p>
          </div>

          <div ref={contentRef} className="card p-8 fade-in-up">
            <div className="grid gap-6">
              {rows.map((r, index) => {
                const isToday = new Date().getDay() === (index + 1) % 7;
                return (
                  <div
                    key={r.d}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                      isToday
                        ? "bg-[var(--primary)]/10 border border-[var(--primary)]/30"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <div className="w-3 h-3 bg-[var(--primary)] rounded-full animate-pulse" />
                      )}
                      <span className={`font-medium ${isToday ? "text-[var(--primary)]" : "text-white"}`}>
                        {r.d}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-[var(--primary)]/20 text-[var(--primary)] px-2 py-1 rounded-full font-medium">
                          HEUTE
                        </span>
                      )}
                    </div>
                    <span className={`font-mono font-semibold ${isToday ? "text-[var(--primary)]" : "text-white/80"}`}>
                      {r.t}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--primary)]/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white">Rund um die Uhr verfügbar</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                18 Stunden täglich geöffnet – perfekt für Frühaufsteher und Nachtschwärmer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

