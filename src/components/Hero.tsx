"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Gym hero"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10 md:bg-transparent" />
      </div>


      <div className="container relative z-10">
        <div className="min-h-[80vh] flex items-center">
          <div className="max-w-4xl">

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] sm:leading-[1.1] mb-16 sm:mb-14">
              <span className="text-white drop-shadow-lg">Mehr als ein </span>
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent drop-shadow-lg">Gym.</span>
              <br />
              <span className="text-white drop-shadow-lg">Eine Community.</span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 font-light max-w-2xl mb-16 sm:mb-14 leading-relaxed drop-shadow-md">
              Motivation, die bleibt. Ergebnisse, die zählen.
            </p>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
              <a
                href="#probetraining"
                className="btn btn-primary group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('probetraining')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Jetzt starten</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="btn btn-outline text-sm px-6 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
