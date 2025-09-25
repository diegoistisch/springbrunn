"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EquipmentTeam() {
  const equipmentRef = useScrollAnimation<HTMLDivElement>();
  const teamRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="equipment-team" className="py-24 relative">
      <div className="absolute top-16 right-1/4 w-64 h-64 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Equipment Section */}
          <div ref={equipmentRef} className="grid lg:grid-cols-2 gap-20 items-center fade-in-up">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Bestes Equipment</h3>

              <div className="space-y-8">
                <p className="text-xl text-white/80 leading-relaxed">
                  Geräte von <span className="text-white font-medium">Life Fitness, Hammer Strength, Cybex, Panatta, Gymleco, Nautilus und Schnell.</span> Stellen sicher, dass du das Maximum aus dir selbst herausholen kannst.
                </p>

                {/* Equipment brands as badges */}
                <div className="pt-6">
                  <div className="flex flex-wrap gap-4">
                    {["Life Fitness", "Hammer Strength", "Cybex", "Panatta", "Gymleco", "Nautilus", "Schnell"].map((brand) => (
                      <span key={brand} className="px-5 py-3 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full text-sm text-[var(--primary)] font-medium">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* No Compromise Quote */}
                <div className="relative mt-12 mb-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
                  <blockquote className="pl-8 py-4 text-2xl font-medium text-white italic">
                    "Keine Spielereien, keine Kompromisse."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Equipment Image */}
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-500 lg:ml-8">
              <div className="relative">
                <Image
                  src="/images/machine1.jpg"
                  alt="Hochwertige Fitnessgeräte"
                  width={1200}
                  height={800}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-semibold text-white mb-2">High-End Geräte</h4>
                  <p className="text-white/70 text-sm">Maximale Leistung garantiert</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div ref={teamRef} className="grid lg:grid-cols-2 gap-20 items-center fade-in-up">
            <div className="space-y-8 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-white">Unser Team</h3>

              <div className="space-y-6">
                <p className="text-xl text-white/80 leading-relaxed">
                  Unser Team begleitet dich auf jedem Level - vom ersten Training bis zum Wettkampfsport. <span className="text-white font-medium">Wir nehmen dich ernst, wir fordern dich, und wir geben dir die Sicherheit, deine Ziele nachhaltig zu erreichen.</span>
                </p>
              </div>

              {/* Manifest Statement - Isolated */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  <span className="text-[var(--accent)]">Springbrunn Fitness ist kein Ort für Oberflächlichkeit.</span><br />
                  Es ist ein Ort für Menschen, die ihr volles Potenzial entfalten wollen.
                </blockquote>
              </div>

            </div>

            {/* Team Image */}
            <div className="card overflow-hidden group hover:scale-105 transition-all duration-500 order-2 lg:order-1 lg:mr-8">
              <div className="relative">
                <Image
                  src="/images/hero.jpg"
                  alt="Unser professionelles Team"
                  width={1200}
                  height={800}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-semibold text-white mb-2">Coaching auf jedem Level</h4>
                  <p className="text-white/70 text-sm">Individuelle Betreuung garantiert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Statement Section */}
        <div className="text-center pt-24 space-y-12">
          {/* Manifest Statement */}
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
              „Echter Fortschritt braucht Zeit, Wille und Leidenschaft."
            </blockquote>
          </div>

          {/* Brand Claim */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-[var(--primary)] font-medium leading-relaxed">
              Springbrunn Fitness - wo Qualität auf Konsequenz trifft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}