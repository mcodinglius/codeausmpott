import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
    ArrowLeft,
    Check,
    Code2,
    Dumbbell,
    Heart,
    Terminal,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LearningRequestBuilder } from "@/components/learning-builder/learning-request-builder";

export default function AnfragePage() {
    return (
        <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
            {/* Navigation */}
            <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-3 font-semibold">
                        <div className="flex size-11 items-center justify-center overflow-hidden rounded-lg sm:size-14">
                            <Image
                                src="/codewithMiguelLogo.png"
                                alt="CodeWithMiguel Logo"
                                width={48}
                                height={48}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <span className="text-[var(--color-text)]">CodeWithMiguel</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm text-[var(--color-text-soft)] transition hover:text-[var(--color-primary)]"
                        >
                            <ArrowLeft className="size-4" />
                            <span className="hidden sm:inline">Zurück</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden border-b border-[var(--color-border)]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(235,54,120,0.10),transparent_30%)]" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(251,119,60,0.08),transparent_28%)]" />

                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                    <div className="max-w-3xl">
                        <div className="section-badge">
                            <span className="size-2 rounded-full bg-[var(--color-accent-orange)]" />
                            Deine Lernanfrage
                        </div>

                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                            Wobei kann ich dir
                            <span className="text-[var(--color-primary)]"> helfen?</span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
                            Erzähl mir kurz, wo du gerade stehst und was du verstehen
                            möchtest. Du musst dein Problem nicht perfekt beschreiben — wir
                            finden gemeinsam heraus, wo wir anfangen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Builder */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <LearningRequestBuilder />
            </section>

            {/* Persönlicher Block */}
            <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="gradient-border gradient-border-dark overflow-hidden rounded-3xl text-white shadow-2xl shadow-[rgba(2,21,38,0.12)]">
                            {/* Intro */}
                            <div className="relative overflow-hidden border-b border-white/10 p-7 sm:p-9">
                                <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-[rgba(235,54,120,0.22)] blur-3xl" />

                                <div className="relative">
                                    <p className="text-sm text-[var(--color-accent-orange)]">
                                        {"// warum ich das mache"}
                                    </p>

                                    <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                                        Ich war selbst schlecht in Informatik.
                                    </h2>

                                    <p className="mt-5 leading-7 text-white/65">
                                        In der Schule hat mir Informatik lange keinen Spaß gemacht.
                                        Mir fehlte der Reiz daran und ich habe nicht verstanden,
                                        warum ich mich für bestimmte Konzepte interessieren sollte.
                                    </p>

                                    <p className="mt-4 leading-7 text-white/65">
                                        Heute bin ich Softwareentwickler und code extrem gerne.
                                        Informatik ist für mich nicht mehr irgendein Schulfach,
                                        sondern etwas, mit dem man Ideen umsetzen, Probleme lösen
                                        und eigene Dinge erschaffen kann.
                                    </p>
                                </div>
                            </div>

                            {/* Eigenschaften */}
                            <div className="grid border-b border-white/10 sm:grid-cols-3">
                                <InfoTile
                                    icon={
                                        <Code2 className="size-5 text-[var(--color-accent-pink)]" />
                                    }
                                    background="bg-[rgba(235,54,120,0.12)]"
                                    label="Softwareentwickler"
                                />

                                <InfoTile
                                    icon={
                                        <Dumbbell className="size-5 text-[var(--color-accent-orange)]" />
                                    }
                                    background="bg-[rgba(251,119,60,0.12)]"
                                    label="Sportler"
                                    border
                                />

                                <InfoTile
                                    icon={
                                        <Heart className="size-5 text-[var(--color-accent-pink)]" />
                                    }
                                    background="bg-[rgba(235,54,120,0.12)]"
                                    label="Coding aus Leidenschaft"
                                    border
                                />
                            </div>

                            {/* Philosophie */}
                            <div className="p-7 sm:p-9">
                                <p className="text-lg font-medium leading-7">
                                    Nachhilfe bedeutet für mich mehr als bessere Noten.
                                </p>

                                <p className="mt-3 leading-7 text-white/60">
                                    Wie im Sport bringt es wenig, etwas nur einmal richtig zu
                                    machen. Man muss verstehen, üben, Fehler machen und merken,
                                    dass man besser wird.
                                </p>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                    <Benefit color="pink">
                                        Informatik wirklich verstehen statt Lösungen auswendig
                                        lernen.
                                    </Benefit>

                                    <Benefit color="orange">
                                        Konzepte mit echten Beispielen und praktischem Code
                                        verbinden.
                                    </Benefit>

                                    <Benefit color="pink">
                                        Selbstständig Probleme lösen und dabei Sicherheit gewinnen.
                                    </Benefit>

                                    <Benefit color="orange">
                                        Erleben, dass Informatik tatsächlich Spaß machen kann.
                                    </Benefit>
                                </div>

                                <div className="relative mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                                    <div className="absolute left-0 top-0 h-full w-1 bg-[var(--color-accent-orange)]" />

                                    <p className="text-lg font-medium leading-7">
                                        „Ich möchte nicht nur deine Note verbessern.“
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        Ich möchte, dass du irgendwann selbst merkst:
                                        <span className="font-medium text-white">
                      {" "}
                                            Hey, Informatik kann echt Spaß machen.
                    </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Side info card */}
                        <div className="flex">
                            <div className="gradient-border flex w-full flex-col justify-between rounded-3xl p-7 sm:p-9">
                                <div>
                                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                                        <Terminal className="size-5" />
                                    </div>

                                    <p className="mt-7 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                                        Kein perfektes Vorwissen nötig
                                    </p>

                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                                        Du weißt nicht genau, was du brauchst?
                                    </h3>

                                    <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
                                        Kein Problem. Zieh einfach die Themen ins Gehirn, die dir
                                        bekannt vorkommen, und beschreibe anschließend kurz deine
                                        Situation.
                                    </p>

                                    <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
                                        Wir finden gemeinsam heraus, wo die eigentliche Schwierigkeit
                                        liegt und womit wir anfangen.
                                    </p>
                                </div>

                                <div className="mt-10 rounded-2xl bg-[var(--color-surface-strong)] p-5">
                                    <p className="text-sm font-medium text-[var(--color-text)]">
                                        Dein Lern-Gehirn muss nicht perfekt sein.
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                        Es ist nur der Startpunkt für unsere gemeinsame Arbeit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-[var(--color-border)]">
                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[var(--color-text-soft)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <div className="flex items-center gap-2 text-[var(--color-text)]">
                        <Terminal className="size-4 text-[var(--color-primary)]" />
                        Informatik Nachhilfe
                    </div>

                    <div className="flex gap-6">
                        <Link
                            href="/impressum"
                            className="transition hover:text-[var(--color-primary)]"
                        >
                            Impressum
                        </Link>

                        <Link
                            href="/datenschutz"
                            className="transition hover:text-[var(--color-primary)]"
                        >
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function Benefit({
                     children,
                     color,
                 }: {
    children: ReactNode;
    color: "pink" | "orange";
}) {
    const pink = color === "pink";

    return (
        <div className="flex gap-3">
            <div
                className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${
                    pink
                        ? "bg-[rgba(235,54,120,0.15)]"
                        : "bg-[rgba(251,119,60,0.15)]"
                }`}
            >
                <Check
                    className={`size-3.5 ${
                        pink
                            ? "text-[var(--color-accent-pink)]"
                            : "text-[var(--color-accent-orange)]"
                    }`}
                />
            </div>

            <p className="text-sm leading-6 text-white/65">{children}</p>
        </div>
    );
}

function InfoTile({
                      icon,
                      background,
                      label,
                      border = false,
                  }: {
    icon: ReactNode;
    background: string;
    label: string;
    border?: boolean;
}) {
    return (
        <div className={`p-6 ${border ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
            <div className={`flex size-10 items-center justify-center rounded-xl ${background}`}>
                {icon}
            </div>

            <p className="mt-4 text-sm font-medium">{label}</p>
        </div>
    );
}
