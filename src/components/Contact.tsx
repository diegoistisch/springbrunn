"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const formRef = useScrollAnimation<HTMLFormElement>();

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div ref={titleRef} className="slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--primary)]">Kontakt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Lass uns sprechen</h2>
          <p className="text-lg text-white/70 mb-8">Schreib uns – wir melden uns schnell zurück.</p>
          <div className="space-y-4 text-white/80">
            <p className="flex items-center gap-3">
              <span className="w-5 h-5 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
              </span>
              kontakt@springbrunn-fitness.de
            </p>
            <p className="flex items-center gap-3">
              <span className="w-5 h-5 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full"></span>
              </span>
              +49 30 123456
            </p>
          </div>
        </div>
        <form ref={formRef} className="card p-8 text-white/90 slide-in-right">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="Dein Name" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>E-Mail</span>
              <input type="email" className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="you@example.com" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Nachricht</span>
              <textarea className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white min-h-28" placeholder="Wie können wir helfen?" />
            </label>
            <button className="btn btn-primary mt-2" type="button">Nachricht senden</button>
          </div>
        </form>
      </div>
    </section>
  );
}

