import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe2,
  GraduationCap,
  ScanLine,
  Terminal,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LandingPreviewForm } from "@/components/landingpage-preview-form";
import { TrackedLink } from "@/components/tracked-link";

export default function Home() {
  return (
      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Header */}
        <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                  src="/favicon.ico"
                  alt="CodeWithMiguel Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
              />
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              <Link
                  href="/kurse"
                  className="hidden rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--color-primary)] sm:inline-flex"
              >
                Kurse
              </Link>

              <TrackedLink
                  href="/anfrage"
                  eventName="CTA Click"
                  eventData={{ cta: "learning_request", location: "header" }}
                  className="inline-flex rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-base-dark)]"
              >
                Nachhilfe anfragen
              </TrackedLink>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(235,54,120,0.12),transparent_35%)]" />

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                Informatik lernen. Software entwickeln.
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Informatik wirklich verstehen.
                <span className="block text-[var(--color-primary)]">
                Nicht nur Lösungen nachbauen.
              </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg sm:leading-8">
                Unterstützung bei Programmierung, Algorithmen, Datenbanken und
                Webentwicklung – mit dem Ziel, Aufgaben selbstständig lösen zu können.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                    href="/anfrage"
                    eventName="CTA Click"
                    eventData={{ cta: "learning_request", location: "hero" }}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-medium text-white transition hover:bg-[var(--color-base-dark)]"
                >
                  Lernanfrage erstellen
                  <ArrowRight className="size-4" />
                </TrackedLink>

                <TrackedLink
                    href="/codecheck"
                    eventName="CTA Click"
                    eventData={{ cta: "codecheck", location: "hero" }}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 text-sm font-medium transition hover:border-[var(--color-primary)]"
                >
                  <ScanLine className="size-4" />
                  CodeCheck starten
                </TrackedLink>
              </div>
            </div>
          </div>
        </section>

        {/* Angebot */}
        <section className="bg-[var(--color-surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Wobei ich dir helfen kann.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <TrackedLink
                  href="/anfrage"
                  eventName="CTA Click"
                  eventData={{ cta: "learning_request", location: "services" }}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 transition hover:-translate-y-1"
              >
                <GraduationCap className="size-6 text-[var(--color-primary)]" />
                <h3 className="mt-5 text-lg font-semibold">Informatik-Nachhilfe</h3>
                <p className="mt-2 leading-7 text-[var(--color-text-soft)]">
                  Programmierung, OOP, Algorithmen, Datenbanken, Webentwicklung und
                  Netzwerke verständlich lernen.
                </p>
              </TrackedLink>

              <TrackedLink
                  href="/codecheck"
                  eventName="CTA Click"
                  eventData={{ cta: "codecheck", location: "services" }}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 transition hover:-translate-y-1"
              >
                <Code2 className="size-6 text-[var(--color-accent-pink)]" />
                <h3 className="mt-5 text-lg font-semibold">CodeCheck</h3>
                <p className="mt-2 leading-7 text-[var(--color-text-soft)]">
                  Probleme in Code, Layout oder Deployment schneller einordnen.
                </p>
              </TrackedLink>

              <TrackedLink
                  href="#webprojekt"
                  eventName="CTA Click"
                  eventData={{ cta: "webproject_preview", location: "services" }}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 transition hover:-translate-y-1"
              >
                <Globe2 className="size-6 text-[var(--color-accent-orange)]" />
                <h3 className="mt-5 text-lg font-semibold">Webprojekte</h3>
                <p className="mt-2 leading-7 text-[var(--color-text-soft)]">
                  Eine erste Designrichtung erstellen und individuell weiterentwickeln.
                </p>
              </TrackedLink>
            </div>
          </div>
        </section>

        {/* Webprojekt */}
        <section
            id="webprojekt"
            className="border-b border-[var(--color-border)] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                Webprojekt-Vorschau
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Aus deiner Idee wird eine erste Designrichtung.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-soft)]">
                Beschreibe kurz dein Unternehmen, dein Ziel und den gewünschten Stil.
              </p>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-3 shadow-[0_24px_80px_rgba(2,21,38,0.08)] sm:p-5 lg:p-6">
              <LandingPreviewForm />
            </div>

            <TrackedLink
                href="/web-projects"
                eventName="CTA Click"
                eventData={{ cta: "webproject_contact", location: "webproject_preview" }}
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--color-base-dark)]"
            >
              Webprojekt besprechen
              <ArrowRight className="size-4" />
            </TrackedLink>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[var(--color-primary)] px-6 py-12 text-center text-white sm:px-12">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Du möchtest ein Thema endlich wirklich verstehen?
              </h2>

              <TrackedLink
                  href="/anfrage"
                  eventName="CTA Click"
                  eventData={{ cta: "learning_request", location: "bottom" }}
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-6 text-sm font-medium text-white transition hover:bg-[var(--color-accent-pink)]"
              >
                Lernanfrage starten
                <ArrowRight className="size-4" />
              </TrackedLink>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--color-border)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[var(--color-text-soft)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-2">
              <Terminal className="size-4 text-[var(--color-primary)]" />
              
            </div>

            <div className="flex gap-6">
              <Link href="/impressum" className="hover:text-[var(--color-primary)]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[var(--color-primary)]">
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </main>
  );
}
