"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSplit() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const contentRef = useScrollAnimation<HTMLDivElement>();
  const imagesRef = useScrollAnimation<HTMLDivElement>();
  const thirdImageRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section id="about" className="pt-24 pb-8 relative">
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

            {/* Stats moved to left side */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-[var(--primary)]">2012</div>
                </div>
                <div className="text-white/60 text-sm">Gegründet</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-[var(--accent)]">18h</div>
                </div>
                <div className="text-white/60 text-sm">Täglich geöffnet</div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="slide-in-right max-w-3xl space-y-12">
            {/* Eröffner - Claim */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Springbrunn Fitness – wo aus Zielen Ergebnisse werden.
              </h3>
            </div>

            {/* Philosophie Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--accent)]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white">Unsere Philosophie</h4>
              </div>

              <div className="pl-11 space-y-3">
                <p className="text-white/80 leading-relaxed">
                  Seit 2012 steht Springbrunn Fitness für Qualität, Beständigkeit und echte Ergebnisse.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Wir glauben an Fortschritt durch Disziplin, Geduld und konsequentes Training – nicht an schnelle Versprechen oder kurzlebige Trends.
                </p>
                <p className="text-white/80 leading-relaxed">
                  <span className="text-white font-medium">Wenn du bereit bist, an dir zu arbeiten, bekommst du bei uns alles, was du dafür brauchst.</span>
                </p>
              </div>

              {/* Key Quote */}
              <div className="relative my-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
                <blockquote className="pl-6 py-4 text-xl font-medium text-white italic">
                  Wir glauben daran, dass wahre Stärke nicht über Nacht entsteht, sondern durch <span className="text-[var(--primary)]">Disziplin, Geduld und konsequentes Training.</span>
                </blockquote>
              </div>
            </div>



          </div>
        </div>

        <div ref={imagesRef} className="grid md:grid-cols-2 gap-8 mb-16 fade-in-up">
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

        <div ref={thirdImageRef} className="max-w-2xl mx-auto mb-20 fade-in-up">
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
