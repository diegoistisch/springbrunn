"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSplit() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const contentRef = useScrollAnimation<HTMLDivElement>();
  const imagesRef = useScrollAnimation<HTMLDivElement>();
  const thirdImageRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={titleRef} className="space-y-6 slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              <span className="text-sm font-medium text-[var(--accent)]">Wer wir sind</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2">
              Entspannt etwas
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent"> verändern</span>
              <br />- aber nachhaltig.
            </h2>
          </div>

          <div ref={contentRef} className="slide-in-right">
            <h3 className="text-2xl font-semibold text-white mb-6">So einfach ist das: dein neues Gym.</h3>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Wir machen Training simpel und nachhaltig - kein Saison-Ding, sondern Teil deines Alltags.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-[var(--primary)]">2012</div>
                </div>
                <div className="text-white/60 text-sm text-center">Gegründet</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[var(--accent)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-[var(--accent)]">18h</div>
                </div>
                <div className="text-white/60 text-sm text-center">Täglich geöffnet</div>
              </div>
            </div>
          </div>
        </div>

        <div ref={imagesRef} className="grid md:grid-cols-2 gap-8 mb-8 fade-in-up">
          <div className="card overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="relative">
              <Image
                src="/images/machine1.jpg"
                alt="Gym equipment"
                width={1200}
                height={800}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-semibold text-white mb-2">Moderne Ausstattung</h4>
                <p className="text-white/70 text-sm">Neueste Geräte für optimale Ergebnisse</p>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="relative">
              <Image
                src="/images/hero.jpg"
                alt="Training"
                width={1200}
                height={800}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-semibold text-white mb-2">Community Spirit</h4>
                <p className="text-white/70 text-sm">Gemeinsam erreichen wir mehr</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={thirdImageRef} className="max-w-2xl mx-auto fade-in-up">
          <div className="card overflow-hidden group hover:scale-105 transition-all duration-500">
            <div className="relative">
              <Image
                src="/images/machine1.jpg"
                alt="Personal training"
                width={1200}
                height={800}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-semibold text-white mb-2">Personal Training</h4>
                <p className="text-white/70 text-sm">Individuelle Betreuung für deine Ziele</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
