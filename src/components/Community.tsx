"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Community() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const communityRef = useScrollAnimation<HTMLDivElement>();
  const valuesRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="community" className="py-24 relative">
      <div className="absolute top-16 right-1/4 w-64 h-64 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-6xl mx-auto space-y-24">
          <div ref={titleRef} className="text-center fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20 mb-6">
              <span className="text-sm font-medium text-[var(--secondary)]">Community</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Unsere Community
              <span className="text-[var(--secondary)]"> ist einzigartig</span>
            </h2>
          </div>

          {/* Community Section */}
          <div ref={communityRef} className="grid lg:grid-cols-2 gap-20 items-center fade-in-up">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Vielfältige Community</h3>

              <div className="space-y-8">
                <p className="text-xl text-white/80 leading-relaxed">
                  Unsere Community ist einzigartig, weil sie so vielfältig ist: <span className="text-white font-medium">die 90-jährige Pensionistin, die mit gezieltem Training ihre Mobilität erhält, der 14-jährige Schüler, der voller Energie seine ersten Schritte im Krafttraining macht.</span>
                </p>

                <p className="text-xl text-white/80 leading-relaxed">
                  <span className="text-white font-medium">Der Profisportler, der an seiner Bestleistung feilt, und der Fitness-Neuling, der den Mut fasst, den ersten Schritt zu gehen.</span>
                </p>

                {/* Key Quote */}
                <div className="relative mt-12 mb-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--secondary)] to-[var(--accent)] rounded-full"></div>
                  <blockquote className="pl-8 py-4 text-2xl font-medium text-white italic">
                    "Alle trainieren unter einem Dach. Und alle verbindet dasselbe Ziel: <span className="text-[var(--secondary)]">besser werden.</span>"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Community Image */}
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-500 lg:ml-8">
              <div className="relative">
                <Image
                  src="/images/hero.jpg"
                  alt="Unsere Community"
                  width={1200}
                  height={800}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Gemeinsam stark</h4>
                  <p className="text-white/70 text-sm">Vielfalt macht uns besser</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div ref={valuesRef} className="grid lg:grid-cols-2 gap-20 items-center fade-in-up">
            {/* Values Image */}
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-500 lg:order-1 lg:mr-8">
              <div className="relative">
                <Image
                  src="/images/machine1.jpg"
                  alt="Respekt und Unterstützung"
                  width={1200}
                  height={800}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Echte Gemeinschaft</h4>
                  <p className="text-white/70 text-sm">Unterstützung auf jedem Level</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:order-2">
              <h3 className="text-3xl font-bold text-white">Unsere Werte</h3>

              <div className="space-y-6">
                <p className="text-xl text-white/80 leading-relaxed">
                  Bei uns zählen <span className="text-white font-medium">Respekt, Unterstützung und gegenseitige Motivation.</span> Hier trainierst du nicht allein - du gehörst dazu.
                </p>
                <p className="text-xl text-white/80 leading-relaxed">
                  Du wirst Teil einer Atmosphäre, in der jede Wiederholung zählt - nicht nur für dich, sondern für uns alle.
                </p>
              </div>

              {/* Final Statement */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  <span className="text-[var(--accent)]">Springbrunn Fitness ist kein anonymer Trainingsraum.</span><br />
                  Es ist ein Ort, an dem Fremde zu Trainingspartnern werden.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}