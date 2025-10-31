import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB - Springbrunn Fitness",
  description: "Allgemeine Geschäftsbedingungen von Springbrunn Fitness",
};

export default function AGB() {
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
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>

            <div className="space-y-8 text-white/80">
              {/* Geltungsbereich */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Geltungsbereich</h2>
                <p className="leading-relaxed mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der SGH Fitness GmbH,
                  Hofgarten 1, 3484 Grafenwörth (nachfolgend "Fitnessstudio" oder "wir") und den Mitgliedern
                  (nachfolgend "Mitglied" oder "Sie") über die Nutzung der Fitnesseinrichtungen und -angebote.
                </p>
                <p className="leading-relaxed">
                  Mit Ihrer Anmeldung erkennen Sie diese AGB als verbindlich an. Abweichende Bedingungen des Mitglieds
                  werden nicht akzeptiert, es sei denn, wir haben ausdrücklich schriftlich zugestimmt.
                </p>
              </section>

              {/* Vertragsabschluss */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Vertragsabschluss</h2>
                <p className="leading-relaxed mb-4">
                  Der Vertrag kommt durch Ihre Anmeldung (online oder vor Ort) und unsere Annahme zustande. Die Annahme
                  erfolgt durch Zusendung einer Bestätigungsmail oder Aushändigung der Mitgliedskarte.
                </p>
                <p className="leading-relaxed mb-4">
                  Mit der Anmeldung bestätigen Sie, dass Sie mindestens 18 Jahre alt sind oder die Zustimmung Ihrer
                  Erziehungsberechtigten besitzen. Bei Minderjährigen ist die schriftliche Einwilligung eines
                  Erziehungsberechtigten erforderlich.
                </p>
                <p className="leading-relaxed">
                  Sie verpflichten sich, wahrheitsgemäße Angaben zu machen und Änderungen (insbesondere Adresse,
                  Bankverbindung, Gesundheitszustand) unverzüglich mitzuteilen.
                </p>
              </section>

              {/* Mitgliedschaft und Laufzeit */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Mitgliedschaft und Laufzeit</h2>

                <h3 className="text-xl font-semibold text-white mb-3">3.1 Mitgliedschaftsarten</h3>
                <p className="leading-relaxed mb-4">
                  Wir bieten verschiedene Mitgliedschaftsarten an:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li><strong className="text-white">Tageskarte:</strong> Einmalige Nutzung für einen Tag</li>
                  <li><strong className="text-white">Monatskarte:</strong> Laufzeit von 1 Monat, endet automatisch</li>
                  <li><strong className="text-white">Jahresvertrag:</strong> Mindestlaufzeit von 12 Monaten</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">3.2 Jahresvertrag</h3>
                <p className="leading-relaxed mb-4">
                  Der Jahresvertrag hat eine Mindestlaufzeit von 12 Monaten ab Vertragsbeginn. Nach Ablauf der
                  Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils 12 Monate, sofern nicht mit einer
                  Frist von 3 Monaten zum Ende der Laufzeit gekündigt wird.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">3.3 Monatskarte</h3>
                <p className="leading-relaxed">
                  Die Monatskarte hat eine Laufzeit von 1 Monat und endet automatisch. Eine Kündigung ist nicht
                  erforderlich. Eine Verlängerung erfolgt nur durch erneuten Abschluss.
                </p>
              </section>

              {/* Kündigung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Kündigung</h2>

                <h3 className="text-xl font-semibold text-white mb-3">4.1 Ordentliche Kündigung</h3>
                <p className="leading-relaxed mb-4">
                  Die Kündigung des Jahresvertrags muss schriftlich (per Post oder E-Mail an
                  kontakt@springbrunn-fitness.at) mit einer Frist von 3 Monaten zum Ende der jeweiligen Laufzeit erfolgen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">4.2 Außerordentliche Kündigung</h3>
                <p className="leading-relaxed mb-4">
                  Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund
                  liegt insbesondere vor bei:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Dauerhafter Wegzug (mehr als 50 km Entfernung), nachgewiesen durch Meldebestätigung</li>
                  <li>Dauerhafter gesundheitlicher Grund, nachgewiesen durch ärztliches Attest</li>
                  <li>Schwerer Verstoß gegen die Hausordnung oder diese AGB</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">4.3 Form der Kündigung</h3>
                <p className="leading-relaxed">
                  Kündigungen müssen schriftlich erfolgen (Brief, E-Mail oder Fax). Mündliche Kündigungen sind unwirksam.
                  Der Zugang der Kündigung bei uns ist maßgeblich für die Wahrung der Kündigungsfrist.
                </p>
              </section>

              {/* Preise und Zahlung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Preise und Zahlung</h2>

                <h3 className="text-xl font-semibold text-white mb-3">5.1 Mitgliedsbeiträge</h3>
                <p className="leading-relaxed mb-4">
                  Die aktuellen Preise ergeben sich aus unserer Preisliste auf der Website bzw. im Studio. Alle Preise
                  verstehen sich als Endpreise inklusive der gesetzlichen Mehrwertsteuer.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.2 Zahlungsweise</h3>
                <p className="leading-relaxed mb-4">
                  Die Mitgliedsbeiträge sind monatlich im Voraus fällig und werden per SEPA-Lastschrift eingezogen.
                  Der Einzug erfolgt jeweils zum 1. des Monats. Bei Vertragsabschluss während des laufenden Monats
                  erfolgt eine anteilige Berechnung.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.3 Zahlungsverzug</h3>
                <p className="leading-relaxed mb-4">
                  Bei Zahlungsverzug sind wir berechtigt, das Mitglied von der Nutzung auszuschließen, bis die
                  ausstehenden Beträge beglichen sind. Dies befreit nicht von der Pflicht zur Zahlung der
                  Mitgliedsbeiträge. Bei Rücklastschriften können wir eine Bearbeitungsgebühr von 10 € erheben.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">5.4 Preisanpassungen</h3>
                <p className="leading-relaxed">
                  Wir behalten uns vor, die Preise einmal jährlich anzupassen. Preiserhöhungen werden Ihnen mindestens
                  6 Wochen vor Inkrafttreten schriftlich mitgeteilt. In diesem Fall haben Sie ein Sonderkündigungsrecht
                  innerhalb von 4 Wochen nach Zugang der Mitteilung zum Zeitpunkt des Inkrafttretens der Preiserhöhung.
                </p>
              </section>

              {/* Leistungsumfang */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Leistungsumfang</h2>
                <p className="leading-relaxed mb-4">
                  Die Mitgliedschaft berechtigt zur Nutzung der Fitnesseinrichtungen während der jeweiligen
                  Öffnungszeiten. Der Leistungsumfang richtet sich nach der gewählten Mitgliedschaftsart.
                </p>
                <p className="leading-relaxed mb-4">
                  Im Leistungsumfang enthalten sind:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Nutzung des Trainingsbereichs und der Geräte</li>
                  <li>Teilnahme an Gruppenkursen (je nach Mitgliedschaftsart)</li>
                  <li>Nutzung der Umkleiden und Duschen</li>
                  <li>Kostenlose Einführung in die Geräte</li>
                </ul>
                <p className="leading-relaxed">
                  Zusatzleistungen wie Personal Training können gegen gesonderte Gebühr in Anspruch genommen werden.
                </p>
              </section>

              {/* Probetraining */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Probetraining</h2>
                <p className="leading-relaxed mb-4">
                  Interessenten haben die Möglichkeit, unser Fitnessstudio im Rahmen eines kostenlosen Probetrainings
                  kennenzulernen. Das Probetraining kann einmalig in Anspruch genommen werden.
                </p>
                <p className="leading-relaxed">
                  Während des Probetrainings gelten die gleichen Nutzungs- und Verhaltensregeln wie für Mitglieder.
                </p>
              </section>

              {/* Hausordnung und Nutzungsbedingungen */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Hausordnung und Nutzungsbedingungen</h2>

                <h3 className="text-xl font-semibold text-white mb-3">8.1 Allgemeine Verhaltensregeln</h3>
                <p className="leading-relaxed mb-4">
                  Mitglieder verpflichten sich:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Die Trainingsgeräte sachgemäß und bestimmungsgemäß zu nutzen</li>
                  <li>Anweisungen des Personals Folge zu leisten</li>
                  <li>Andere Mitglieder und Besucher nicht zu belästigen oder zu gefährden</li>
                  <li>Sauberkeit und Ordnung in den Räumlichkeiten zu wahren</li>
                  <li>Geräte nach Benutzung zu reinigen und wieder aufzuräumen</li>
                  <li>Handtücher während des Trainings zu verwenden</li>
                  <li>In angemessener Sportbekleidung zu trainieren</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.2 Verbote</h3>
                <p className="leading-relaxed mb-4">
                  Untersagt sind insbesondere:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Das Training unter Einfluss von Alkohol oder Drogen</li>
                  <li>Das Rauchen im gesamten Gebäude</li>
                  <li>Das Mitbringen von Glasflaschen in den Trainingsbereich</li>
                  <li>Die gewerbliche Nutzung oder Weitergabe der Mitgliedschaft</li>
                  <li>Ton- und Bildaufnahmen ohne ausdrückliche Genehmigung</li>
                  <li>Das Mitbringen von Tieren (ausgenommen Assistenzhunde)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">8.3 Zutritt und Zutrittskontrolle</h3>
                <p className="leading-relaxed">
                  Der Zutritt zum Studio erfolgt mittels persönlicher Mitgliedskarte oder digitaler Zugangsberechtigung.
                  Die Zugangsberechtigung ist nicht übertragbar. Bei Verlust ist dies unverzüglich zu melden. Für eine
                  Ersatzkarte können wir eine Gebühr von 10 € erheben.
                </p>
              </section>

              {/* Haftung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Haftung</h2>

                <h3 className="text-xl font-semibold text-white mb-3">9.1 Haftung des Studios</h3>
                <p className="leading-relaxed mb-4">
                  Wir haften uneingeschränkt nur für Schäden aus der Verletzung des Lebens, des Körpers oder der
                  Gesundheit sowie für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.
                </p>
                <p className="leading-relaxed mb-4">
                  Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten. In diesem
                  Fall ist die Haftung auf den typischerweise vorhersehbaren Schaden begrenzt.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">9.2 Gesundheitszustand</h3>
                <p className="leading-relaxed mb-4">
                  Die Nutzung der Einrichtungen erfolgt auf eigene Gefahr. Mitglieder versichern, dass keine
                  gesundheitlichen Bedenken gegen die Ausübung von Sport bestehen. Bei gesundheitlichen Einschränkungen
                  wird eine ärztliche Konsultation vor Trainingsbeginn empfohlen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">9.3 Haftung für Wertsachen</h3>
                <p className="leading-relaxed">
                  Für Garderobe, Wertsachen und andere persönliche Gegenstände übernehmen wir keine Haftung. Wir
                  empfehlen die Nutzung der bereitgestellten Schließfächer. Bei Verlust des Schlüssels können wir
                  eine Gebühr von 20 € für die Öffnung und den Austausch des Schlosses erheben.
                </p>
              </section>

              {/* Ruhen der Mitgliedschaft */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Ruhen der Mitgliedschaft</h2>
                <p className="leading-relaxed mb-4">
                  Bei nachweislich längerer Verhinderung (z.B. Krankheit, Schwangerschaft, berufliche Abwesenheit)
                  kann die Mitgliedschaft auf Antrag für mindestens 1 Monat und maximal 3 Monate ruhen.
                </p>
                <p className="leading-relaxed mb-4">
                  Der Antrag muss schriftlich und mit entsprechendem Nachweis (ärztliches Attest, Arbeitgeberbescheinigung)
                  gestellt werden. Während des Ruhens entfällt die Zahlungspflicht, die Laufzeit des Vertrages verlängert
                  sich entsprechend.
                </p>
                <p className="leading-relaxed">
                  Das Ruhen der Mitgliedschaft ist bei Jahresverträgen einmal pro Vertragsjahr möglich.
                </p>
              </section>

              {/* Betriebsänderungen */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Betriebsänderungen und -schließungen</h2>
                <p className="leading-relaxed mb-4">
                  Wir behalten uns vor, Öffnungszeiten, Kursangebote und den Umfang der Leistungen anzupassen. Über
                  wesentliche Änderungen werden Sie rechtzeitig informiert.
                </p>
                <p className="leading-relaxed mb-4">
                  Bei vorübergehender Schließung aus wichtigem Grund (z.B. behördliche Anordnung, Renovierung,
                  höhere Gewalt) bis zu 4 Wochen pro Jahr besteht kein Anspruch auf Beitragserstattung. Bei längerer
                  Schließung verlängert sich die Vertragslaufzeit entsprechend oder Sie erhalten eine anteilige
                  Rückerstattung.
                </p>
                <p className="leading-relaxed">
                  Bei dauerhafter Betriebsschließung endet der Vertrag automatisch. Bereits bezahlte Beiträge für
                  den nicht genutzten Zeitraum werden anteilig erstattet.
                </p>
              </section>

              {/* Schlussbestimmungen */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Schlussbestimmungen</h2>

                <h3 className="text-xl font-semibold text-white mb-3">12.1 Änderungen der AGB</h3>
                <p className="leading-relaxed mb-4">
                  Wir behalten uns vor, diese AGB zu ändern. Änderungen werden Ihnen mindestens 6 Wochen vor
                  Inkrafttreten per E-Mail mitgeteilt. Widersprechen Sie den Änderungen nicht innerhalb von 4 Wochen
                  nach Zugang der Mitteilung, gelten die geänderten AGB als angenommen. Auf Ihr Widerspruchsrecht
                  und die Folgen werden wir Sie in der Mitteilung gesondert hinweisen.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">12.2 Salvatorische Klausel</h3>
                <p className="leading-relaxed mb-4">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der
                  übrigen Bestimmungen hiervon unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu
                  ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">12.3 Gerichtsstand und anwendbares Recht</h3>
                <p className="leading-relaxed mb-4">
                  Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="leading-relaxed">
                  Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich zulässig, der Sitz
                  des Fitnessstudios.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">12.4 Schriftform</h3>
                <p className="leading-relaxed">
                  Änderungen und Ergänzungen des Vertrages sowie dieser AGB bedürfen der Schriftform. Dies gilt auch
                  für die Aufhebung des Schriftformerfordernisses.
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
