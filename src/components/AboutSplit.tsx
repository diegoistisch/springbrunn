"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSplit() {
  const titleRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const imagesRef = useScrollAnimation();
  const thirdImageRef = useScrollAnimation();
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={titleRef} className="space-y-6 slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              <span className="text-sm font-medium text-[var(--accent)]">Wer wir sind</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Entspannt etwas
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent"> verändern</span>
              <br />– aber nachhaltig.
            </h2>
          </div>

          <div ref={contentRef} className="space-y-6 slide-in-right">
            <h3 className="text-2xl font-semibold text-white">So einfach ist das: dein neues Gym.</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Einfachheit ist der Schlüssel für eine Routine, die Körper und Geist gut tut. Wir sorgen dafür, dass Training
              kein Saison-Ding ist, sondern ein motivierender Teil deines Alltags.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">2019</div>
                <div className="text-white/60 text-sm">Gegründet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">16h</div>
                <div className="text-white/60 text-sm">Täglich geöffnet</div>
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
