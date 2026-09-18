import Link from "next/link";
import {
    ArrowLeft,
    Braces,
    Bug,
    Globe2,
    Layers3,
    ShoppingBag,
    Terminal,
    Wrench,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import {WebProjectRequestBuilder} from "@/components/web-projects-builder/web-projects-builder";

const supportAreas = [
    {
        icon: <Braces className="size-5" />,
        title: "Custom Code",
        text: "CSS, JavaScript, TypeScript, React oder Next.js — auch wenn du nicht weißt, an welcher Stelle der Fehler steckt.",
    },
    {
        icon: <Globe2 className="size-5" />,
        title: "Domain & Deployment",
        text: "DNS, Domains, Vercel, HTTPS, Environment Variables oder ein Deployment, das einfach nicht online gehen will.",
    },
    {
        icon: <ShoppingBag className="size-5" />,
        title: "Shops & Builder",
        text: "Shopify, WooCommerce, Webflow, Framer oder andere Builder — wenn Standardlösungen nicht mehr ausreichen.",
    },
    {
        icon: <Bug className="size-5" />,
        title: "Debugging",
        text: "Fehler reproduzieren, Ursache eingrenzen und eine Lösung bauen, die du anschließend auch nachvollziehen kannst.",
    },
];

export default function WebprojektePage() {
    return (
        <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
            <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
                            <Terminal className="size-4" />
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

            <section className="relative overflow-hidden border-b border-[var(--color-border)]">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(235,54,120,0.12),transparent_30%)]" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(251,119,60,0.10),transparent_28%)]" />

                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="max-w-3xl">
                            <div className="section-badge">
                                <span className="size-2 rounded-full bg-[var(--color-accent-orange)]" />
                                Unterstützung bei Webprojekten
                            </div>

                            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                                Dein Webprojekt hängt?
                                <span className="text-[var(--color-primary)]"> Wir lösen es.</span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
                                Nicht nur Nachhilfe: Ich unterstütze dich auch direkt bei echten
                                Webprojekten — von Custom CSS und TypeScript über Domains bis zu
                                Shops, APIs und Deployments.
                            </p>

                            <p className="mt-4 max-w-2xl leading-7 text-[var(--color-text-soft)]">
                                Du musst die technische Ursache nicht kennen. Beschreib einfach,
                                was nicht funktioniert oder was du umsetzen möchtest. Wir finden
                                gemeinsam heraus, wo der Hebel sitzt.
                            </p>
                        </div>

                        <div className="gradient-border gradient-border-dark rounded-3xl p-7 text-white sm:p-9">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(235,54,120,0.14)] text-[var(--color-accent-pink)]">
                                <Wrench className="size-5" />
                            </div>

                            <p className="mt-7 text-sm text-[var(--color-accent-orange)]">
                                {"// kein Agentur-Blabla"}
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                                Problem zeigen. Ursache finden. Lösung bauen.
                            </h2>
                            <p className="mt-4 leading-7 text-white/65">
                                Ich helfe dir nicht nur dabei, dass es irgendwie wieder läuft.
                                Wenn du möchtest, erkläre ich dir auch, warum es vorher nicht
                                funktioniert hat und was wir geändert haben.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {supportAreas.map((item) => (
                            <div key={item.title} className="gradient-border rounded-2xl p-5">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)]">
                                    {item.icon}
                                </div>
                                <h2 className="mt-5 font-semibold text-[var(--color-text)]">
                                    {item.title}
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <WebProjectRequestBuilder />
            </section>

            <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="gradient-border rounded-3xl p-7 sm:p-9">
                            <Layers3 className="size-6 text-[var(--color-accent-pink)]" />
                            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                                Auch kleine Probleme sind willkommen.
                            </h2>
                            <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
                                Es muss kein komplettes Projekt sein. Ein kaputtes Layout, eine
                                nicht verbundene Domain, ein Checkout-Problem oder ein einzelner
                                TypeScript-Fehler können genauso der Startpunkt sein.
                            </p>
                        </div>

                        <div className="gradient-border rounded-3xl p-7 sm:p-9">
                            <Terminal className="size-6 text-[var(--color-accent-orange)]" />
                            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                                Gemeinsam statt Blackbox.
                            </h2>
                            <p className="mt-4 leading-7 text-[var(--color-text-soft)]">
                                Wenn du selbst entwickeln möchtest, arbeiten wir gemeinsam an
                                der Lösung. Wenn du einfach einen konkreten Fix brauchst, können
                                wir uns genauso darauf konzentrieren.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[var(--color-border)]">
                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[var(--color-text-soft)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <div className="flex items-center gap-2 text-[var(--color-text)]">
                        <Terminal className="size-4 text-[var(--color-primary)]" />
                        CodeWithMiguel
                    </div>

                    <div className="flex gap-6">
                        <Link href="/anfrage" className="transition hover:text-[var(--color-primary)]">
                            Informatik-Nachhilfe
                        </Link>
                        <Link href="/impressum" className="transition hover:text-[var(--color-primary)]">
                            Impressum
                        </Link>
                        <Link href="/datenschutz" className="transition hover:text-[var(--color-primary)]">
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
