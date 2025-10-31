import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum - Springbrunn Fitness",
  description: "Impressum und rechtliche Informationen von Springbrunn Fitness",
};

export default function Impressum() {
  return (
    <>
      <main className="min-h-screen pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>

          <div className="card p-6 md:p-8 lg:p-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">Impressum</h1>

            <div className="space-y-8 text-white/80">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Firmenangaben</h2>
                <div className="space-y-2">
                  <p className="text-white font-medium text-lg">SGH Fitness GmbH</p>
                  <p>Hofgarten 1</p>
                  <p>3484 Grafenwörth</p>
                  <p>Österreich</p>
                </div>
              </section>

              {/* Unternehmensrechtliche Angaben */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Unternehmensrechtliche Angaben</h2>
                <div className="space-y-2">
                  <p>
                    <span className="text-white/60">Rechtsform:</span>{" "}
                    <span className="text-white">Gesellschaft mit beschränkter Haftung</span>
                  </p>
                  <p>
                    <span className="text-white/60">Firmenbuchnummer:</span>{" "}
                    <span className="text-white">FN 380744 v</span>
                  </p>
                </div>
              </section>

              {/* Vertretungsbefugte Geschäftsführer */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Geschäftsführung</h2>
                <p>Markus Hofbauer (Gewerberechtlicher Geschäftsführer)</p>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
                <div className="space-y-2">
                  <p>
                    <span className="text-white/60">Telefon:</span>{" "}
                    <a href="tel:+436767466277" className="text-[var(--primary)] hover:underline">
                      +43 6767466277
                    </a>
                  </p>
                  <p>
                    <span className="text-white/60">E-Mail:</span>{" "}
                    <a href="mailto:kontakt@springbrunn-fitness.at" className="text-[var(--primary)] hover:underline">
                      kontakt@springbrunn-fitness.at
                    </a>
                  </p>
                </div>
              </section>

              {/* Umsatzsteuer-ID */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  <span className="text-white font-semibold">ATU67323345</span>
                </p>
              </section>

              {/* Aufsichtsbehörde */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Aufsichtsbehörde</h2>
                <div className="space-y-2">
                  <p>Bezirkshauptmannschaft Tulln</p>
                  <p className="text-white/60">
                    Gewerbebehörde für den Betrieb eines Fitnesscenters
                  </p>
                </div>
              </section>

              {/* Unternehmensgegenstand */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Unternehmensgegenstand</h2>
                <p>Betrieb eines Fitnesscenters</p>
              </section>

              {/* Streitschlichtung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Streitschlichtung</h2>
                <p className="leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  {" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .
                </p>
                <p className="leading-relaxed mt-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              {/* Haftung für Inhalte */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Haftung für Inhalte</h2>
                <p className="leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
                <p className="leading-relaxed mt-4">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </section>

              {/* Haftung für Links */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Haftung für Links</h2>
                <p className="leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                  Verlinkung nicht erkennbar.
                </p>
                <p className="leading-relaxed mt-4">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </section>

              {/* Urheberrecht */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Urheberrecht</h2>
                <p className="leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                  jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="leading-relaxed mt-4">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                  Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>

            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Stand: {new Date().toLocaleDateString('de-AT', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
