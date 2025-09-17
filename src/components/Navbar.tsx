"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setMounted(true);

    // Mobile viewport height fix
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none mobile-header-fix">
      {/* Desktop Navigation */}
      <div className="pointer-events-auto absolute left-6 top-6 hidden md:flex items-center gap-3">
        <div className="drop-shadow-2xl">
          <Image
            src="/brand/logo_small.svg"
            alt="Springbrunn Fitness"
            width={60}
            height={60}
            priority
            className="h-12 w-auto object-contain"
          />
        </div>
        <span className="text-white font-bold text-lg drop-shadow-lg">Springbrunn Fitness</span>
      </div>

      <div className="pointer-events-auto absolute right-6 top-6 hidden md:flex items-center gap-3">
        <nav className="border-2 border-white/30 text-white backdrop-blur-sm bg-white/5 rounded-full px-8 py-4 flex items-center gap-3 text-sm font-medium">
          <Link href="#programs" onClick={(e) => handleSmoothScroll(e, '#programs')} className="text-white hover:text-white transition-colors px-2 py-1">Programme</Link>
          <Link href="#plans" onClick={(e) => handleSmoothScroll(e, '#plans')} className="text-white/80 hover:text-white transition-colors px-2 py-1">Tarife</Link>
          <Link href="#hours" onClick={(e) => handleSmoothScroll(e, '#hours')} className="text-white/80 hover:text-white transition-colors px-2 py-1">Öffnungszeiten</Link>
          <Link href="#location" onClick={(e) => handleSmoothScroll(e, '#location')} className="text-white/80 hover:text-white transition-colors px-2 py-1">Anfahrt</Link>
          <Link href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="text-white/80 hover:text-white transition-colors px-2 py-1">Kontakt</Link>
        </nav>
        <Link href="#enroll" className="btn btn-primary text-sm whitespace-nowrap">Jetzt starten</Link>
      </div>


      {/* Mobile Burger Button Portal */}
      {mounted && createPortal(
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99999,
            pointerEvents: 'auto'
          }}
        >
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Menu öffnen"
              style={{
                width: '56px',
                height: '56px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                <span style={{ display: 'block', height: '2px', width: '24px', backgroundColor: 'white' }} />
                <span style={{ display: 'block', height: '2px', width: '24px', backgroundColor: 'white' }} />
                <span style={{ display: 'block', height: '2px', width: '24px', backgroundColor: 'white' }} />
              </div>
            </button>
          )}
        </div>,
        document.body
      )}

      {/* Mobile Menu Portal */}
      {mounted && createPortal(
        <div
          className="fixed inset-0 transition-all duration-300"
          style={{
            zIndex: 9999,
            backgroundColor: isMenuOpen ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
            backdropFilter: isMenuOpen ? 'blur(4px)' : 'blur(0px)',
            visibility: isMenuOpen ? 'visible' : 'hidden',
            opacity: isMenuOpen ? 1 : 0,
            pointerEvents: isMenuOpen ? 'auto' : 'none'
          }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div
            className="absolute inset-y-0 right-0 w-80 shadow-2xl transition-transform duration-300 ease-in-out"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white hover:text-orange-500 transition-colors"
              style={{ zIndex: 10000 }}
              aria-label="Menü schließen"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className="block h-0.5 w-6 bg-currentColor rotate-45 translate-y-0.5" />
                <span className="block h-0.5 w-6 bg-currentColor -rotate-45 -translate-y-0.5" />
              </div>
            </button>

            <div className="p-8 pt-24">
              <nav className="flex flex-col space-y-8">
                <Link
                  href="#programs"
                  className="text-white hover:text-orange-500 transition-colors text-xl font-medium"
                  onClick={(e) => { handleSmoothScroll(e, '#programs'); setIsMenuOpen(false); }}
                >
                  Programme
                </Link>
                <Link
                  href="#plans"
                  className="text-white hover:text-orange-500 transition-colors text-xl font-medium"
                  onClick={(e) => { handleSmoothScroll(e, '#plans'); setIsMenuOpen(false); }}
                >
                  Tarife
                </Link>
                <Link
                  href="#hours"
                  className="text-white hover:text-orange-500 transition-colors text-xl font-medium"
                  onClick={(e) => { handleSmoothScroll(e, '#hours'); setIsMenuOpen(false); }}
                >
                  Öffnungszeiten
                </Link>
                <Link
                  href="#location"
                  className="text-white hover:text-orange-500 transition-colors text-xl font-medium"
                  onClick={(e) => { handleSmoothScroll(e, '#location'); setIsMenuOpen(false); }}
                >
                  Anfahrt
                </Link>
                <Link
                  href="#contact"
                  className="text-white hover:text-orange-500 transition-colors text-xl font-medium"
                  onClick={(e) => { handleSmoothScroll(e, '#contact'); setIsMenuOpen(false); }}
                >
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
