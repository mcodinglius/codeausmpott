import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Code2,
    Dumbbell,
    Heart,
    Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const topics = [
    "Programmierung",
    "Java",
    "Python",
    "Objektorientierung",
    "Algorithmen",
    "Datenstrukturen",
    "Datenbanken / SQL",
    "Webentwicklung",
    "Netzwerke",
    "Git",
    "Sonstiges",
];

export default function AnfragePage() {
    return (
        <main className="min-h-screen bg-white text-zinc-950">
            {/* Navigation */}
            <header className="border-b border-[var(--color-border)]/80">
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

                        <span>CodeWithMiguel</span>
                    </Link>

                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-[var(--color-text-soft)] transition hover:text-zinc-950"
                    >
                        <ArrowLeft className="size-4" />
                        Zurück
                    </Link>
                </div>
            </header>

            {/* Page */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Anfrage */}
                    <div>
                        <div className="mb-10">
                            <p className="mb-3 font-mono text-sm text-zinc-500">
                                {"// deine Lernanfrage"}
                            </p>

                            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                                Wobei kann ich dir helfen?
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-text-soft)]">
                                Erzähl mir kurz, wo du gerade stehst und was du verstehen
                                möchtest. Du musst dein Problem nicht perfekt beschreiben.
                            </p>
                        </div>

                        <form className="space-y-8">
                            {/* Name + Mail */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Dein Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Max Mustermann"
                                        className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        E-Mail
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="max@beispiel.de"
                                        className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                                    />
                                </div>
                            </div>

                            {/* Kontext */}
                            <div>
                                <label className="mb-3 block text-sm font-medium">
                                    In welchem Kontext brauchst du Hilfe?
                                </label>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Schule",
                                        "Ausbildung",
                                        "Studium",
                                        "Eigenes Interesse",
                                    ].map((item) => (
                                        <label
                                            key={item}
                                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--color-border)] p-4 transition hover:border-zinc-300 hover:bg-[var(--color-surface)]"
                                        >
                                            <input
                                                type="radio"
                                                name="context"
                                                value={item}
                                                className="size-4 accent-zinc-950"
                                            />

                                            <span className="text-sm font-medium">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Themen */}
                            <div>
                                <label className="mb-3 block text-sm font-medium">
                                    Welche Themen interessieren dich?
                                </label>

                                <div className="flex flex-wrap gap-2">
                                    {topics.map((topic) => (
                                        <label
                                            key={topic}
                                            className="cursor-pointer rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-text-soft)] transition hover:border-zinc-400 hover:text-zinc-950 has-[:checked]:border-zinc-950 has-[:checked]:bg-zinc-950 has-[:checked]:text-white"
                                        >
                                            <input
                                                type="checkbox"
                                                name="topics"
                                                value={topic}
                                                className="sr-only"
                                            />

                                            {topic}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Beschreibung */}
                            <div>
                                <label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Erzähl mir kurz, wobei du Unterstützung brauchst
                                </label>

                                <textarea
                                    id="description"
                                    name="description"
                                    rows={6}
                                    placeholder="Zum Beispiel: Wir behandeln gerade Objektorientierung in Java. Klassen und Objekte verstehe ich, aber bei Vererbung und Interfaces verliere ich den Überblick..."
                                    className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-white p-4 leading-7 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                                />
                            </div>

                            {/* Ziel */}
                            <div>
                                <label
                                    htmlFor="goal"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Was möchtest du erreichen?
                                </label>

                                <input
                                    id="goal"
                                    name="goal"
                                    type="text"
                                    placeholder="z. B. Klausur bestehen, Java verstehen oder einfach besser programmieren können"
                                    className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 sm:w-auto"
                            >
                                Anfrage senden
                                <ArrowRight className="size-4" />
                            </button>

                            <p className="text-sm text-zinc-500">
                                Noch passiert beim Absenden nichts — Backend und E-Mail bauen wir
                                anschließend ein.
                            </p>
                        </form>
                    </div>

                    {/* About / persönlicher Block */}
                    <aside className="lg:sticky lg:top-8 lg:self-start">
                        <div className="overflow-hidden rounded-3xl bg-zinc-950 text-white">
                            <div className="border-b border-white/10 p-7 sm:p-9">
                                <p className="font-mono text-sm text-zinc-500">
                                    {"// warum Informatik?"}
                                </p>

                                <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                                    Ich war selbst schlecht in Informatik.
                                </h2>

                                <p className="mt-5 leading-7 text-zinc-400">
                                    In der Schule hat mir Informatik lange keinen Spaß gemacht.
                                    Mir fehlte der Reiz daran und ich habe nicht verstanden, warum
                                    ich mich für bestimmte Konzepte interessieren sollte.
                                </p>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    Heute bin ich Softwareentwickler und code extrem gerne. Ich
                                    beschäftige mich auch außerhalb meines Berufs mit
                                    Technologien, Projekten und neuen Ideen.
                                </p>
                            </div>

                            {/* Eigenschaften */}
                            <div className="grid border-b border-white/10 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                                <div className="border-white/10 p-6 sm:border-r lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r">
                                    <Code2 className="size-5 text-zinc-400" />
                                    <p className="mt-4 text-sm font-medium">
                                        Softwareentwickler
                                    </p>
                                </div>

                                <div className="border-white/10 p-6 sm:border-r lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r">
                                    <Dumbbell className="size-5 text-zinc-400" />
                                    <p className="mt-4 text-sm font-medium">Sportler</p>
                                </div>

                                <div className="p-6">
                                    <Heart className="size-5 text-zinc-400" />
                                    <p className="mt-4 text-sm font-medium">
                                        Coding aus Leidenschaft
                                    </p>
                                </div>
                            </div>

                            {/* Philosophie */}
                            <div className="p-7 sm:p-9">
                                <p className="leading-7 text-zinc-300">
                                    Genau deshalb geht es mir bei Nachhilfe um mehr als nur die
                                    nächste Klausur.
                                </p>

                                <div className="mt-7 space-y-4">
                                    <div className="flex gap-3">
                                        <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                                            <Check className="size-3.5" />
                                        </div>

                                        <p className="text-sm leading-6 text-zinc-400">
                                            Informatik wirklich verstehen statt Lösungen auswendig
                                            lernen.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                                            <Check className="size-3.5" />
                                        </div>

                                        <p className="text-sm leading-6 text-zinc-400">
                                            Konzepte mit echten Beispielen und praktischen Projekten
                                            verbinden.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                                            <Check className="size-3.5" />
                                        </div>

                                        <p className="text-sm leading-6 text-zinc-400">
                                            Fortschritte sehen und lernen, Probleme selbstständig zu
                                            lösen.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                    <p className="text-lg font-medium leading-7">
                                        „Mein Ziel ist nicht nur, deine Noten zu verbessern.“
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                                        Ich möchte, dass du verstehst, warum Informatik spannend ist
                                        – und irgendwann selbst Spaß daran hast, Probleme mit Code
                                        zu lösen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* kleine Info darunter */}
                        <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                            <p className="text-sm font-medium">Du bist dir nicht sicher?</p>

                            <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                Kein Problem. Beschreibe einfach kurz deine Situation. Gemeinsam
                                finden wir heraus, wo wir anfangen.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}