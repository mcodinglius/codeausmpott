import Link from "next/link";
import {
    ArrowLeft,
    AtSign,
    Building2,
    FileText,
    MapPin,
    Scale,
    Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
    title: "Impressum | CodeWithMiguel",
    description: "Impressum und Anbieterkennzeichnung von CodeWithMiguel.",
};

export default function ImpressumPage() {
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
    <div className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-24 top-40 size-72 rounded-full bg-[var(--color-accent-pink)]/10 blur-3xl" />

    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
    <div className="mb-10">
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm">
    <Scale className="size-4 text-[var(--color-accent-pink)]" />
        Rechtliches
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Impressum
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-soft)]">
        Anbieterkennzeichnung und Kontaktinformationen zu CodeWithMiguel.
    </p>
    </div>

    <div className="impressum-shell rounded-[2rem] p-[2px]">
    <div className="rounded-[calc(2rem-2px)] bg-[var(--color-surface-strong)] p-6 sm:p-8 lg:p-10">
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
    <aside className="rounded-2xl bg-[var(--color-base-dark)] p-6 text-white sm:p-7">
    <div className="mb-8">
    <div className="mb-4 grid size-12 place-items-center rounded-xl border border-white/10 bg-white/5">
    <FileText className="size-6 text-[#fb773c]" />
        </div>

        <h2 className="text-2xl font-bold">CodeWithMiguel</h2>

        <p className="mt-3 text-sm leading-6 text-white/60">
        Freiberufliche Dienstleistungen im Bereich
    Softwareentwicklung, Webprojekte und Informatik-Nachhilfe.
    </p>
    </div>

    <div className="space-y-4 text-sm">
    <div className="flex gap-3">
    <Building2 className="mt-0.5 size-4 shrink-0 text-[#eb3678]" />
    <div>
        <div className="font-medium">Anbieter</div>
        <div className="mt-1 text-white/60">
        [Vollständiger Vor- und Nachname]
        </div>
        </div>
        </div>

        <div className="flex gap-3">
    <MapPin className="mt-0.5 size-4 shrink-0 text-[#fb773c]" />
    <div>
        <div className="font-medium">Anschrift</div>
        <div className="mt-1 text-white/60">
        [Straße und Hausnummer]
        <br />
        [PLZ Ort]
        <br />
        Deutschland
        </div>
        </div>
        </div>

        <div className="flex gap-3">
    <AtSign className="mt-0.5 size-4 shrink-0 text-[#eb3678]" />
    <div>
        <div className="font-medium">E-Mail</div>
        <div className="mt-1 text-white/60">
        [deine@email.de]
        </div>
        </div>
        </div>
        </div>
        </aside>

        <div className="space-y-10">
    <section>
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-pink)]">
        Angaben gemäß § 5 DDG
    </div>

    <h2 className="text-2xl font-bold tracking-tight">
        Anbieter
        </h2>

        <div className="mt-5 leading-7 text-[var(--color-text-soft)]">
    <p className="font-medium text-[var(--color-text)]">
        [Vollständiger Vor- und Nachname]
        </p>
        <p>
        [Straße und Hausnummer]
        <br />
        [PLZ Ort]
        <br />
        Deutschland
        </p>
        </div>
        </section>

        <section className="border-t border-[var(--color-border)] pt-8">
    <h2 className="text-xl font-bold">Kontakt</h2>

        <div className="mt-4 space-y-2 text-[var(--color-text-soft)]">
        <p>
            E-Mail:{" "}
    <a
        href="mailto:DEINE_EMAIL"
    className="font-medium text-[var(--color-text)] underline decoration-[var(--color-accent-orange)] underline-offset-4"
        >
        [deine@email.de]
        </a>
        </p>

        <p>
        Telefon:{" "}
    <span className="text-[var(--color-text)]">
        [optional: Telefonnummer]
    </span>
    </p>
    </div>
    </section>

    <section className="border-t border-[var(--color-border)] pt-8">
    <h2 className="text-xl font-bold">
        Steuerliche Identifikationsnummern
    </h2>

    <div className="mt-4 space-y-3 leading-7 text-[var(--color-text-soft)]">
        <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a
    Umsatzsteuergesetz:
        <br />
        <span className="font-medium text-[var(--color-text)]">
            [DE123456789]
            </span>
            </p>

            <p>
            Wirtschafts-Identifikationsnummer:
    <br />
    <span className="font-medium text-[var(--color-text)]">
        [optional: DE...]
    </span>
    </p>
    </div>

    <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">
        Nur die Nummern angeben, die dir tatsächlich erteilt wurden.
        Die persönliche Steuer-ID bzw. normale Steuernummer gehört
    nicht in dieses öffentliche Impressum.
    </p>
    </section>

    <section className="border-t border-[var(--color-border)] pt-8">
    <h2 className="text-xl font-bold">
        Verbraucherstreitbeilegung
        </h2>

        <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
        Ich bin nicht bereit oder verpflichtet, an
    Streitbeilegungsverfahren vor einer
    Verbraucherschlichtungsstelle teilzunehmen.
    </p>
    </section>

    <section className="border-t border-[var(--color-border)] pt-8">
    <h2 className="text-xl font-bold">
        Inhaltlich verantwortlich
    </h2>

    <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
        Sofern auf dieser Website journalistisch-redaktionelle
    Inhalte angeboten werden:
        </p>

        <p className="mt-3">
        [Vollständiger Vor- und Nachname]
        <br />
        [Straße und Hausnummer]
        <br />
        [PLZ Ort]
        </p>
        </section>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
    <p className="text-sm leading-6 text-[var(--color-text-soft)]">
        Letzte Aktualisierung: September 2026
    </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>

    <style>{`
        .impressum-shell {
          background: linear-gradient(
            135deg,
            #180161,
            #eb3678 45%,
            #fb773c 75%,
            #180161
          );
          box-shadow:
            0 24px 70px rgba(24, 1, 97, 0.10),
            0 10px 30px rgba(235, 54, 120, 0.08);
        }
      `}</style>
    </main>
);
}
