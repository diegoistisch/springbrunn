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
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="min-h-[80vh] flex items-center">
          <div className="max-w-4xl">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
              <span className="text-white">Mehr als ein</span>
              <br />
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                Gym
              </span>
              <br />
              <span className="text-white/90">eine Community</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mb-10 leading-relaxed">
              Die dich antreibt, motiviert und zu deinen besten Ergebnissen führt.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#enroll" className="btn btn-primary group">
                <span>Jetzt starten</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#programs" className="btn btn-outline">Mehr erfahren</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
