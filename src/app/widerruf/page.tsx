import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Widerrufsbelehrung - Springbrunn Fitness",
  description: "Widerrufsbelehrung für Online-Verträge bei Springbrunn Fitness",
};

export default function Widerruf() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">
              Widerrufsbelehrung
            </h1>

            <div className="space-y-8 text-white/80">
              {/* Widerrufsrecht */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Widerrufsrecht</h2>
                <p className="leading-relaxed mb-4">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                </p>
                <p className="leading-relaxed mb-4">
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                </p>
                <p className="leading-relaxed mb-4">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
                </p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
                  <p className="font-semibold text-white">SGH Fitness GmbH</p>
                  <p>Hofgarten 1</p>
                  <p>3484 Grafenwörth</p>
                  <p>Österreich</p>
                  <p className="mt-2">
                    E-Mail:{" "}
                    <a href="mailto:kontakt@springbrunn-fitness.at" className="text-[var(--primary)] hover:underline">
                      kontakt@springbrunn-fitness.at
                    </a>
                  </p>
                  <p>
                    Telefon:{" "}
                    <a href="tel:+436767466277" className="text-[var(--primary)] hover:underline">
                      +43 6767466277
                    </a>
                  </p>
                </div>
                <p className="leading-relaxed mb-4">
                  mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren
                  Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte
                  Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                </p>
                <p className="leading-relaxed">
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
                  Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
              </section>

              {/* Folgen des Widerrufs */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Folgen des Widerrufs</h2>
                <p className="leading-relaxed mb-4">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
                  unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
                  Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
                  Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
                  wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung
                  Entgelte berechnet.
                </p>
                <p className="leading-relaxed">
                  Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie
                  uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von
                  der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten
                  Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
                </p>
              </section>

              {/* Vorzeitiges Erlöschen */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Vorzeitiges Erlöschen des Widerrufsrechts</h2>
                <p className="leading-relaxed mb-4">
                  Das Widerrufsrecht erlischt vorzeitig bei Verträgen zur Erbringung von Dienstleistungen, wenn wir die
                  Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben,
                  nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon
                  bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.
                </p>
              </section>

              {/* Besondere Hinweise */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Besondere Hinweise für Fitnessstudio-Verträge</h2>

                <h3 className="text-xl font-semibold text-white mb-3">Sofortiger Nutzungsbeginn</h3>
                <p className="leading-relaxed mb-4">
                  Wenn Sie wünschen, dass wir mit der Dienstleistung (Zugang zum Fitnessstudio) sofort beginnen,
                  also noch während der 14-tägigen Widerrufsfrist, müssen Sie uns dies ausdrücklich mitteilen.
                </p>
                <p className="leading-relaxed mb-4">
                  In diesem Fall müssen Sie bei einem Widerruf für die bereits in Anspruch genommenen Leistungen
                  (anteilige Nutzungstage) aufkommen. Der zu zahlende Betrag wird anteilig auf Basis des vereinbarten
                  Monatsbeitrags berechnet.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Probetraining</h3>
                <p className="leading-relaxed">
                  Bitte beachten Sie: Das kostenlose Probetraining ist vom Widerrufsrecht ausgenommen, da es sich
                  um eine unentgeltliche Leistung handelt.
                </p>
              </section>

              {/* Muster-Widerrufsformular */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Muster-Widerrufsformular</h2>
                <p className="leading-relaxed mb-4">
                  Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular verwenden:
                </p>

                <div className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-4">
                  <p className="text-white font-semibold">An:</p>
                  <div className="ml-4">
                    <p>SGH Fitness GmbH</p>
                    <p>Hofgarten 1</p>
                    <p>3484 Grafenwörth</p>
                    <p>Österreich</p>
                    <p>E-Mail: kontakt@springbrunn-fitness.at</p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="mb-4">
                      Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die
                      Erbringung der folgenden Dienstleistung:
                    </p>
                    <p className="mb-4">_________________________________________________</p>

                    <p className="mb-4">
                      Bestellt am (*) / erhalten am (*):
                    </p>
                    <p className="mb-4">_________________________________________________</p>

                    <p className="mb-4">
                      Name des/der Verbraucher(s):
                    </p>
                    <p className="mb-4">_________________________________________________</p>

                    <p className="mb-4">
                      Anschrift des/der Verbraucher(s):
                    </p>
                    <p className="mb-4">_________________________________________________</p>
                    <p className="mb-4">_________________________________________________</p>

                    <p className="mb-4">
                      Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):
                    </p>
                    <p className="mb-4">_________________________________________________</p>

                    <p className="mb-4">
                      Datum:
                    </p>
                    <p className="mb-4">_________________________________________________</p>

                    <p className="text-sm text-white/60 mt-6">
                      (*) Unzutreffendes streichen.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-lg">
                  <p className="text-sm leading-relaxed">
                    <strong className="text-white">Hinweis:</strong> Sie können dieses Formular auch per E-Mail an
                    kontakt@springbrunn-fitness.at senden. In diesem Fall genügt eine einfache Textform ohne Unterschrift.
                  </p>
                </div>
              </section>

              {/* Häufige Fragen */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Häufig gestellte Fragen zum Widerrufsrecht</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Gilt das Widerrufsrecht auch bei vor Ort abgeschlossenen Verträgen?
                    </h3>
                    <p className="leading-relaxed">
                      Nein, das 14-tägige Widerrufsrecht gilt nur für Verträge, die online (Fernabsatzverträge) oder
                      außerhalb der Geschäftsräume abgeschlossen wurden. Bei Verträgen, die direkt im Fitnessstudio
                      abgeschlossen werden, gilt das gesetzliche Widerrufsrecht nicht.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Kann ich während der Widerrufsfrist bereits trainieren?
                    </h3>
                    <p className="leading-relaxed">
                      Ja, wenn Sie dies ausdrücklich wünschen. Sie müssen uns dann aber mitteilen, dass die Leistung
                      sofort beginnen soll. Im Falle eines Widerrufs müssen Sie für die bereits genutzten Tage zahlen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Wie berechnet sich die Zahlung bei Widerruf nach Nutzungsbeginn?
                    </h3>
                    <p className="leading-relaxed">
                      Der zu zahlende Betrag wird anteilig berechnet: (Monatsbeitrag ÷ 30 Tage) × genutzte Tage.
                      Beispiel: Bei einem Monatsbeitrag von 54,90 € und 7 genutzten Tagen: (54,90 € ÷ 30) × 7 = 12,81 €.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      In welcher Form muss der Widerruf erfolgen?
                    </h3>
                    <p className="leading-relaxed">
                      Der Widerruf kann formfrei erfolgen (Brief, E-Mail, Fax). Sie können das Muster-Widerrufsformular
                      verwenden, müssen es aber nicht. Wichtig ist nur, dass Ihr Entschluss zum Widerruf eindeutig
                      erkennbar ist.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Wann beginnt die 14-Tage-Frist?
                    </h3>
                    <p className="leading-relaxed">
                      Die Widerrufsfrist beginnt mit dem Tag des Vertragsabschlusses. Bei Online-Verträgen ist das der
                      Tag, an dem Sie die Vertragsbestätigung per E-Mail erhalten haben.
                    </p>
                  </div>
                </div>
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
