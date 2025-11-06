"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Location() {
  const titleRef = useScrollAnimation<HTMLDivElement>();
  const mapRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="location" className="py-32 relative bg-[hsl(220,15%,12%)]">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div ref={titleRef} className="slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6">
            <span className="text-sm font-medium text-[var(--accent)]">Anfahrt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">So findest du uns.</h2>
          <p className="text-lg text-white/70 mb-8">
            Mitten in Grafenwörth - dein Weg zu uns ist ganz einfach.
          </p>
          <div className="mb-12">
            <div className="flex items-center gap-3 text-white font-semibold text-lg">
              <div className="w-6 h-6 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              Hofgarten 1, 3484 Grafenwörth
            </div>
          </div>
          <a href="https://maps.google.com/maps?q=Hofgarten+1,+3484+Grafenwörth" target="_blank" className="btn btn-primary">Navigation starten</a>
        </div>
        <div ref={mapRef} className="card overflow-hidden slide-in-right">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.9952236199147!2d15.778624415653537!3d48.21075517922998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d9df91d7f7e9d%3A0x3b1e3d1e3b1e3d1e!2sHofgarten%201%2C%203484%20Grafenw%C3%B6rth%2C%20Austria!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            title="Karte zur Anfahrt Springbrunn Fitness"
          />
        </div>
      </div>
    </section>
  );
}

