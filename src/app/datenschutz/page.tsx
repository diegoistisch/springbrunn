import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutzerklärung - Springbrunn Fitness",
  description: "Datenschutzerklärung von Springbrunn Fitness",
};

export default function Datenschutz() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 break-words">Datenschutzerklärung</h1>

            <div className="space-y-8 text-white/80">
              {/* Einleitung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold text-white mb-3">Allgemeine Hinweise</h3>
                <p className="leading-relaxed mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </section>

              {/* Datenerfassung auf dieser Website */}
              <section>
                <h3 className="text-xl font-semibold text-white mb-3">Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-semibold text-white mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>

                <h4 className="text-lg font-semibold text-white mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                  Daten handeln, die Sie in ein Kontaktformular eingeben oder bei der Anmeldung zu einem Probetraining.
                </p>
                <p className="leading-relaxed mb-4">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
                  erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                  Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <h4 className="text-lg font-semibold text-white mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p className="leading-relaxed mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h4 className="text-lg font-semibold text-white mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p className="leading-relaxed mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                  Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                  können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
                  bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                <p className="leading-relaxed">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </section>

              {/* Verantwortliche Stelle */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Hinweis zur verantwortlichen Stelle</h2>
                <p className="leading-relaxed mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
                  <p className="font-semibold text-white">SGH Fitness GmbH</p>
                  <p>Markus Hofbauer</p>
                  <p>Hofgarten 1</p>
                  <p>3484 Grafenwörth</p>
                  <p>Österreich</p>
                  <p className="mt-2">
                    Telefon:{" "}
                    <a href="tel:+436767466277" className="text-[var(--primary)] hover:underline">
                      +43 6767466277
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:kontakt@springbrunn-fitness.at" className="text-[var(--primary)] hover:underline">
                      kontakt@springbrunn-fitness.at
                    </a>
                  </p>
                </div>
                <p className="leading-relaxed">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                  über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
                  entscheidet.
                </p>
              </section>

              {/* Speicherdauer */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Speicherdauer</h2>
                <p className="leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                  Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                  berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                  werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                  Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                  letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
              </section>

              {/* Rechtsgrundlagen */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Allgemeine Hinweise zu den Rechtsgrundlagen</h2>
                <p className="leading-relaxed mb-4">
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
                  Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
                  nach Art. 9 Abs. 1 DSGVO verarbeitet werden.
                </p>
                <p className="leading-relaxed mb-4">
                  Sofern wir Ihre personenbezogenen Daten zur Erfüllung eines Vertrags verarbeiten, erfolgt dies auf
                  Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung
                  vorvertraglicher Maßnahmen erforderlich sind (z. B. bei Anfragen zu unseren Leistungen).
                </p>
                <p className="leading-relaxed">
                  Soweit eine Verarbeitung Ihrer Daten aufgrund unserer berechtigten Interessen erforderlich ist, erfolgt
                  dies auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt z. B. in der
                  Durchführung und Aufrechterhaltung unseres Geschäftsbetriebs.
                </p>
              </section>

              {/* Ihre Rechte */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Ihre Rechte als betroffene Person</h2>
                <p className="leading-relaxed mb-4">
                  Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="space-y-3 list-disc list-inside mb-4">
                  <li className="leading-relaxed">
                    <strong className="text-white">Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie haben das Recht,
                    Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie haben das Recht,
                    unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten
                    personenbezogenen Daten zu verlangen.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Recht auf Löschung</strong> (Art. 17 DSGVO): Sie haben das Recht,
                    die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die
                    Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer
                    rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung
                    oder Verteidigung von Rechtsansprüchen erforderlich ist.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO):
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie haben
                    das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten,
                    gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen
                    Verantwortlichen zu verlangen.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie haben das Recht,
                    aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer
                    personenbezogenen Daten Widerspruch einzulegen.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Recht auf Widerruf der Einwilligung</strong>: Sie haben das Recht,
                    Ihre erteilte Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die
                    Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-white">Beschwerderecht</strong>: Sie haben das Recht, sich bei einer
                    Aufsichtsbehörde zu beschweren. Zuständig ist die Datenschutzbehörde Ihres üblichen Aufenthaltsortes,
                    Ihres Arbeitsplatzes oder unseres Unternehmenssitzes.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                  <a href="mailto:kontakt@springbrunn-fitness.at" className="text-[var(--primary)] hover:underline">
                    kontakt@springbrunn-fitness.at
                  </a>
                </p>
              </section>

              {/* Datenerfassung auf dieser Website */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Datenerfassung auf dieser Website</h2>

                <h3 className="text-xl font-semibold text-white mb-3">Server-Log-Dateien</h3>
                <p className="leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
                <p className="leading-relaxed mb-4">
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
                  hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner
                  Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Kontaktformular</h3>
                <p className="leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                  der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
                <p className="leading-relaxed">
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                  auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                  (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                  insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p className="leading-relaxed mb-4">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
                  hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                  uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                  der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                </p>
                <p className="leading-relaxed">
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
                  auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                  (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
                  insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </section>

              {/* Mitgliederverwaltung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Mitgliederverwaltung und Vertragsabwicklung</h2>
                <p className="leading-relaxed mb-4">
                  Wir verarbeiten Ihre personenbezogenen Daten zur Begründung, Durchführung und Beendigung von
                  Mitgliedschaftsverträgen. Dies umfasst insbesondere:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Name, Adresse, Geburtsdatum</li>
                  <li>Kontaktdaten (E-Mail, Telefon)</li>
                  <li>Bankverbindung für Lastschriftverfahren</li>
                  <li>Gewählte Mitgliedschaft und Tarifoptionen</li>
                  <li>Vertragsbeginn und -laufzeit</li>
                  <li>Zahlungsinformationen</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                </p>
                <p className="leading-relaxed">
                  Ihre Daten werden für die Dauer der Mitgliedschaft sowie darüber hinaus für die Dauer gesetzlicher
                  Aufbewahrungsfristen (insbesondere steuerrechtliche Aufbewahrungsfristen von 7 Jahren) gespeichert.
                </p>
              </section>

              {/* Zutrittskontrolle */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Zutrittskontrolle</h2>
                <p className="leading-relaxed mb-4">
                  Zum Zweck der Zutrittskontrolle und Sicherheit verwenden wir elektronische Zugangssysteme. Dabei werden
                  folgende Daten gespeichert:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Mitgliedsnummer</li>
                  <li>Zeitpunkt des Zutritts</li>
                </ul>
                <p className="leading-relaxed">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Sicherheit unserer
                  Einrichtungen und dem Schutz unserer Mitglieder). Die Daten werden nach 60 Tagen automatisch gelöscht.
                </p>
              </section>

              {/* SSL/TLS-Verschlüsselung */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                  Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
                  „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              {/* Österreichische Datenschutzbehörde */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Zuständige Aufsichtsbehörde</h2>
                <p className="leading-relaxed mb-4">
                  Die zuständige Aufsichtsbehörde in Datenschutzfragen ist:
                </p>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="font-semibold text-white">Österreichische Datenschutzbehörde</p>
                  <p>Barichgasse 40-42</p>
                  <p>1030 Wien</p>
                  <p className="mt-2">
                    Telefon:{" "}
                    <a href="tel:+4315211525" className="text-[var(--primary)] hover:underline">
                      +43 1 52152-0
                    </a>
                  </p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:dsb@dsb.gv.at" className="text-[var(--primary)] hover:underline">
                      dsb@dsb.gv.at
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://www.dsb.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--primary)] hover:underline"
                    >
                      www.dsb.gv.at
                    </a>
                  </p>
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
