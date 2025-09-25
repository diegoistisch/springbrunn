"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FreeTrial() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const contentRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="probetraining" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div ref={titleRef} className="text-center mb-20 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-8">
            <span className="text-sm font-medium text-[var(--accent)]">Unverbindlich testen</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Kostenloses
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent"> Probetraining</span>
          </h2>
        </div>

        <div ref={contentRef} className="max-w-4xl mx-auto slide-in-up text-center space-y-16">
          {/* Main Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--accent)] to-[var(--secondary)] rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-light max-w-3xl mx-auto">
              Ein Probetraining ist bei uns jederzeit kostenlos möglich - komm einfach vorbei und lerne unser Studio kennen.
            </p>

            {/* Separator */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>

            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
              Falls du ein geführtes Training wünschst, nimm dir bitte kurz Zeit und vereinbare vorab einen Termin, damit wir dir die volle Aufmerksamkeit schenken können.
            </p>
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto border border-[var(--accent)]/20">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Spontan vorbeikommen</h3>
              <p className="text-white/60">Jederzeit ohne Termin möglich</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-full flex items-center justify-center mx-auto border border-[var(--secondary)]/20">
                <svg className="w-8 h-8 text-[var(--secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Termin vereinbaren</h3>
              <p className="text-white/60">Für geführtes Training</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a
              href="#contact"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Termin vereinbaren
            </a>
            <a
              href="#location"
              className="btn btn-outline text-lg px-8 py-4"
            >
              Einfach vorbeikommen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}