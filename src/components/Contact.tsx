"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const formRef = useScrollAnimation<HTMLFormElement>();

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div ref={titleRef} className="slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--primary)]">Kontakt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Kontaktiere uns - ganz unkompliziert.</h2>
          <p className="text-lg text-white/70 mb-8">Schnell, direkt und persönlich.</p>
          <div className="space-y-6 text-white/80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--primary)]">E-Mail:</span>
              </div>
              <p className="ml-7">kontakt@springbrunn-fitness.de</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--primary)]">Telefon:</span>
              </div>
              <p className="ml-7">+43 6767466277</p>
            </div>
          </div>
        </div>
        <form ref={formRef} className="card p-8 text-white/90 slide-in-right">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="Wie dürfen wir dich nennen?" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>E-Mail</span>
              <input type="email" className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white" placeholder="you@example.com" />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Deine Nachricht an uns</span>
              <textarea className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white min-h-28" placeholder="Wie können wir helfen?" />
            </label>
            <button className="btn btn-primary mt-2" type="button">Absenden</button>
          </div>
        </form>
      </div>
    </section>
  );
}

