"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Beschreibung */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/brand/logo_small.svg"
                alt="Springbrunn Fitness"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-bold text-xl">Springbrunn Fitness</span>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Mehr als ein Gym - eine Community, die dich antreibt. Moderne Ausstattung,
              individuelle Trainingspläne und flexible Mitgliedschaften.
            </p>
          </div>

          {/* Schnelllinks */}
          <div>
            <h4 className="text-white font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#programs" className="text-white/70 hover:text-[var(--primary)] transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-white/70 hover:text-[var(--primary)] transition-colors">
                  Mitgliedschaften
                </Link>
              </li>
              <li>
                <Link href="#hours" className="text-white/70 hover:text-[var(--primary)] transition-colors">
                  Öffnungszeiten
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-[var(--primary)] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <p>Hofgarten 1<br />3484 Grafenwörth</p>
              <p>
                <Link href="tel:+436767466277" className="hover:text-[var(--primary)] transition-colors">
                  +43 6767466277
                </Link>
              </p>
              <p>
                <Link href="mailto:kontakt@springbrunn-fitness.at" className="hover:text-[var(--primary)] transition-colors">
                  kontakt@springbrunn-fitness.at
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Springbrunn Fitness. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/impressum" className="text-white/60 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-white/60 hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-white/60 hover:text-white transition-colors">
                AGB
              </Link>
              <Link href="/widerruf" className="text-white/60 hover:text-white transition-colors">
                Widerruf
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}