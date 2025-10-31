"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function Contact() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const formRef = useScrollAnimation<HTMLFormElement>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kontakt@springbrunn-fitness.at?subject=Kontaktanfrage von ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

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
              <a href="mailto:kontakt@springbrunn-fitness.at" className="ml-7 hover:text-[var(--primary)] transition-colors">
                kontakt@springbrunn-fitness.at
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--primary)]">Telefon:</span>
              </div>
              <div className="ml-7 space-y-2">
                <p className="mb-3">+43 6767466277</p>
                <div className="flex gap-3">
                  <a
                    href="tel:+436767466277"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 border border-[var(--primary)]/30 rounded-lg transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Anrufen
                  </a>
                  <a
                    href="https://wa.me/436767466277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/10 hover:bg-green-600/20 border border-green-600/30 rounded-lg transition-colors text-sm text-green-400"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="card p-8 text-white/90 slide-in-right">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span>Name</span>
              <input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white"
                placeholder="Wie dürfen wir dich nennen?"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span>E-Mail</span>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span>Deine Nachricht an uns</span>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-white min-h-28"
                placeholder="Wie können wir helfen?"
              />
            </label>
            <button className="btn btn-primary mt-2" type="submit">Absenden</button>
          </div>
        </form>
      </div>
    </section>
  );
}

