import Link from "next/link";
import {
    ArrowLeft,
    Database,
    EyeOff,
    FileLock2,
    Mail,
    Server,
    ShieldCheck,
    Terminal,
    UserRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
    title: "Datenschutz | CodeWithMiguel",
    description: "Datenschutzerklärung von CodeWithMiguel.",
};

const sections = [
    {
        icon: UserRound,
        title: "1. Verantwortlicher",
        content: (
            <>
                <p>
                    Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>

                <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                    <p className="font-semibold text-[var(--color-text)]">
                        [Vollständiger Vor- und Nachname]
                    </p>
                    <p className="mt-2">
                        [Straße und Hausnummer]
                        <br />
                        [PLZ Ort]
                        <br />
                        Deutschland
                    </p>
                    <p className="mt-3">
                        E-Mail:{" "}
                        <a
                            href="mailto:DEINE_EMAIL"
                            className="font-medium text-[var(--color-text)] underline decoration-[var(--color-accent-orange)] underline-offset-4"
                        >
                            [deine@email.de]
                        </a>
                    </p>
                </div>
            </>
        ),
    },
    {
        icon: Server,
        title: "2. Hosting über Vercel",
        content: (
            <>
                <p>
                    Diese Website wird über den Hosting-Dienst Vercel bereitgestellt.
                    Anbieter ist Vercel Inc., USA.
                </p>

                <p className="mt-4">
                    Beim Aufruf der Website können technisch erforderliche
                    Verbindungsdaten verarbeitet werden. Dazu können insbesondere
                    IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite bzw.
                    Datei, Browserinformationen, Betriebssystem sowie technische
                    Protokolldaten gehören.
                </p>

                <p className="mt-4">
                    Die Verarbeitung erfolgt, soweit erforderlich, auf Grundlage von
                    Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der
                    sicheren, stabilen und effizienten Bereitstellung dieser Website
                    sowie in der Abwehr von Missbrauch und technischen Angriffen.
                </p>

                <p className="mt-4">
                    Soweit dabei personenbezogene Daten außerhalb des Europäischen
                    Wirtschaftsraums verarbeitet werden, erfolgt die Übermittlung unter
                    Beachtung der Voraussetzungen der Art. 44 ff. DSGVO und der vom
                    jeweiligen Anbieter bereitgestellten Transfermechanismen.
                </p>

                {/* TODO: Prüfe in deinem Vercel-Account die konkrete Log-Aufbewahrung deines Tarifs. */}
                <p className="mt-4">
                    Technische Protokolldaten werden nur so lange gespeichert, wie dies
                    für Betrieb, Sicherheit und Fehleranalyse erforderlich ist oder
                    gesetzliche Pflichten eine längere Aufbewahrung verlangen.
                </p>
            </>
        ),
    },
    {
        icon: Mail,
        title: "3. Lern- und Webprojekt-Anfragen",
        content: (
            <>
                <p>
                    Wenn du über das Anfrageformular Kontakt aufnimmst, verarbeite ich
                    die von dir eingegebenen Informationen, um deine Anfrage zu prüfen
                    und zu beantworten.
                </p>

                <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                    <div className="text-sm font-semibold text-[var(--color-text)]">
                        Dabei können insbesondere verarbeitet werden:
                    </div>

                    <ul className="mt-3 space-y-2 text-sm">
                        <li>• Name</li>
                        <li>• E-Mail-Adresse</li>
                        <li>• gewählter Kontext, z. B. Schule, Ausbildung oder Webprojekt</li>
                        <li>• ausgewählte Lern- bzw. Projektthemen</li>
                        <li>• Beschreibung des Problems</li>
                        <li>• dein gewünschtes Ziel</li>
                    </ul>
                </div>

                <p className="mt-4">
                    Erfolgt die Anfrage zur Anbahnung oder Durchführung eines Vertrags,
                    ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO. Bei sonstigen
                    Anfragen kann die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO
                    beruhen; das berechtigte Interesse liegt in der Bearbeitung und
                    Beantwortung deiner Anfrage.
                </p>

                <p className="mt-4">
                    Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
                    wurde und keine gesetzlichen Aufbewahrungspflichten oder sonstigen
                    berechtigten Gründe für eine weitere Speicherung bestehen.
                </p>

                <p className="mt-4">
                    Das im Formular enthaltene, für normale Besucher nicht relevante
                    Feld zur Spam-Erkennung dient ausschließlich dazu, automatisierte
                    Formularübermittlungen zu erkennen und zu reduzieren.
                </p>
            </>
        ),
    },
    {
        icon: Database,
        title: "4. E-Mail-Versand über Resend",
        content: (
            <>
                <p>
                    Für den technischen Versand der über die Website übermittelten
                    Anfragen nutze ich Resend. Anbieter ist Plus Five Five, Inc.,
                    San Francisco, USA.
                </p>

                <p className="mt-4">
                    Hierbei werden die zur Zustellung erforderlichen Daten verarbeitet.
                    Dazu können insbesondere Name, E-Mail-Adresse, Inhalt der Anfrage,
                    Betreff sowie technische Versandinformationen gehören.
                </p>

                <p className="mt-4">
                    Die Verarbeitung erfolgt entsprechend dem Zweck der jeweiligen
                    Anfrage auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6
                    Abs. 1 lit. f DSGVO.
                </p>

                <p className="mt-4">
                    Resend veröffentlicht ein Data Processing Addendum und Regelungen für
                    internationale Datentransfers. Soweit Daten in den USA verarbeitet
                    werden, gelten die hierfür jeweils anwendbaren Voraussetzungen der
                    Art. 44 ff. DSGVO.
                </p>
            </>
        ),
    },
    {
        icon: EyeOff,
        title: "5. Lokale Einstellungen und Cookies",
        content: (
            <>
                <p>
                    Diese Website verwendet eine lokale Browser-Speicherung, um deine
                    gewählte Darstellung – insbesondere Hell- oder Dunkelmodus – auf
                    deinem Gerät zu speichern.
                </p>

                <p className="mt-4">
                    Diese Einstellung dient ausschließlich dazu, die von dir gewählte
                    Darstellung wiederherzustellen. Sie wird nicht für Werbung,
                    Profilbildung oder Tracking verwendet.
                </p>

                {/* Entfernen oder anpassen, sobald du Analytics, Pixel, eingebettete Drittanbieter usw. einsetzt. */}
                <p className="mt-4">
                    Derzeit werden auf dieser Website keine eigenen Analyse- oder
                    Marketingtools eingesetzt.
                </p>
            </>
        ),
    },
    {
        icon: ShieldCheck,
        title: "6. SSL-/TLS-Verschlüsselung",
        content: (
            <>
                <p>
                    Diese Website wird verschlüsselt über HTTPS übertragen. Dadurch
                    sollen Daten, die zwischen deinem Browser und dem Server übertragen
                    werden, vor dem unbefugten Mitlesen durch Dritte geschützt werden.
                </p>
            </>
        ),
    },
    {
        icon: FileLock2,
        title: "7. Deine Rechte",
        content: (
            <>
                <p>
                    Soweit die gesetzlichen Voraussetzungen vorliegen, hast du nach der
                    DSGVO insbesondere das Recht auf Auskunft über die zu deiner Person
                    verarbeiteten Daten, Berichtigung unrichtiger Daten, Löschung,
                    Einschränkung der Verarbeitung und Datenübertragbarkeit.
                </p>

                <p className="mt-4">
                    Soweit eine Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht,
                    kannst du aus Gründen, die sich aus deiner besonderen Situation
                    ergeben, Widerspruch gegen die Verarbeitung einlegen.
                </p>

                <p className="mt-4">
                    Beruht eine Verarbeitung auf deiner Einwilligung, kannst du diese
                    jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit
                    der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.
                </p>

                <p className="mt-4">
                    Darüber hinaus hast du das Recht, dich bei einer zuständigen
                    Datenschutzaufsichtsbehörde zu beschweren, wenn du der Ansicht bist,
                    dass die Verarbeitung deiner personenbezogenen Daten gegen
                    Datenschutzrecht verstößt.
                </p>
            </>
        ),
    },
    {
        icon: ShieldCheck,
        title: "8. Keine automatisierte Entscheidungsfindung",
        content: (
            <>
                <p>
                    Eine ausschließlich automatisierte Entscheidungsfindung einschließlich
                    Profiling im Sinne von Art. 22 DSGVO findet auf dieser Website derzeit
                    nicht statt.
                </p>
            </>
        ),
    },
];

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
            <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-xl bg-[var(--color-base-dark)] text-white">
                            <Terminal className="size-5" />
                        </div>

                        <div>
                            <div className="font-bold tracking-tight">CodeWithMiguel</div>
                            <div className="text-xs text-[var(--color-text-soft)]">
                                Informatik & Webprojekte
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <Link
                            href="/"
                            className="hidden items-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm font-medium transition hover:bg-[var(--color-surface)] sm:flex"
                        >
                            <ArrowLeft className="size-4" />
                            Zurück
                        </Link>
                    </div>
                </div>
            </header>

            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-[var(--color-accent-pink)]/10 blur-3xl" />

                <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="mb-12">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm">
                            <FileLock2 className="size-4 text-[var(--color-accent-pink)]" />
                            Deine Daten
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Datenschutz.
                            <span className="privacy-gradient block">
                Klar statt Kleingedruckt.
              </span>
                        </h1>

                        <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg">
                            Hier erfährst du, welche personenbezogenen Daten beim Besuch
                            dieser Website und bei einer Anfrage verarbeitet werden, warum
                            das geschieht und welche Rechte du hast.
                        </p>
                    </div>

                    <div className="mb-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
                        <div className="flex gap-4">
                            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--color-base-dark)] text-white">
                                <ShieldCheck className="size-5" />
                            </div>

                            <div>
                                <h2 className="font-semibold">Kurz gesagt</h2>
                                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                    Die Website benötigt technische Daten für den Betrieb.
                                    Persönliche Angaben entstehen vor allem dann, wenn du selbst
                                    eine Lern- oder Webprojekt-Anfrage absendest. Diese Daten
                                    werden zur Bearbeitung deiner Anfrage verwendet.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {sections.map(({ icon: Icon, title, content }) => (
                            <section
                                key={title}
                                className="card-shell rounded-[1.75rem] p-6 sm:p-8"
                                data-scroll-border
                            >
                                <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
                                    <div className="grid size-12 place-items-center rounded-2xl bg-[var(--color-surface)]">
                                        <Icon className="size-5 text-[var(--color-primary)]" />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                                            {title}
                                        </h2>

                                        <div className="mt-4 leading-7 text-[var(--color-text-soft)]">
                                            {content}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    <section className="privacy-footer-card relative mt-8 overflow-hidden rounded-[2rem] p-7 text-white sm:p-9">
                        <div className="relative z-10">
                            <div className="text-sm font-semibold text-white/60">
                                Fragen zum Datenschutz?
                            </div>

                            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                Schreib mir direkt.
                            </h2>

                            <p className="mt-3 max-w-xl leading-7 text-white/65">
                                Für Auskunft, Berichtigung, Löschung oder andere
                                Datenschutzanfragen kannst du dich jederzeit per E-Mail an mich
                                wenden.
                            </p>

                            <a
                                href="mailto:DEINE_EMAIL"
                                className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-[#021526] transition hover:-translate-y-0.5"
                            >
                                [deine@email.de]
                            </a>
                        </div>
                    </section>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-soft)]">
                        <span>Stand: September 2026</span>

                        <Link
                            href="/impressum"
                            className="font-medium text-[var(--color-text)] underline decoration-[var(--color-accent-orange)] underline-offset-4"
                        >
                            Zum Impressum
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        .privacy-gradient {
          background: linear-gradient(
            90deg,
            #180161 0%,
            #eb3678 48%,
            #fb773c 78%,
            #180161 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .privacy-footer-card {
          background:
            radial-gradient(
              circle at 0% 0%,
              rgba(235, 54, 120, 0.22),
              transparent 42%
            ),
            radial-gradient(
              circle at 100% 100%,
              rgba(251, 119, 60, 0.18),
              transparent 42%
            ),
            #021526;
        }

        .privacy-footer-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            #180161,
            #eb3678,
            #fb773c,
            #180161
          );
          mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>
        </main>
    );
}
