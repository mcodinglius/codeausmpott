import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  Network,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";


const topics = [
  {
    title: "Programmierung",
    description:
        "Variablen, Schleifen, Funktionen, Rekursion und grundlegende Programmierkonzepte.",
    icon: Code2,
    tags: ["Java", "Python", "C"],
  },
  {
    title: "Objektorientierung",
    description:
        "Klassen, Objekte, Vererbung, Interfaces und objektorientiertes Denken.",
    icon: Braces,
    tags: ["OOP", "Java", "UML"],
  },
  {
    title: "Algorithmen",
    description:
        "Sortierung, Suche, Datenstrukturen, Rekursion und Laufzeitanalyse.",
    icon: GitBranch,
    tags: ["Big O", "Bäume", "Graphen"],
  },
  {
    title: "Datenbanken",
    description:
        "SQL, ER-Modelle, Normalisierung und relationale Datenbanken verständlich erklärt.",
    icon: Database,
    tags: ["SQL", "ER-Modell", "JOIN"],
  },
  {
    title: "Webentwicklung",
    description:
        "HTML, CSS, JavaScript und die Grundlagen moderner Webanwendungen.",
    icon: Globe2,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Netzwerke",
    description:
        "TCP/IP, DNS, HTTP und die Kommunikation zwischen Computersystemen.",
    icon: Network,
    tags: ["TCP/IP", "HTTP", "DNS"],
  },
];

const steps = [
  {
    number: "01",
    title: "Thema auswählen",
    description:
        "Wähle den Bereich aus, bei dem du Unterstützung brauchst.",
  },
  {
    number: "02",
    title: "Lerninhalte bestimmen",
    description:
        "Stelle genau die Themen zusammen, die du verstehen möchtest.",
  },
  {
    number: "03",
    title: "Problem beschreiben",
    description:
        "Erzähl mir kurz, was dir schwerfällt oder worauf du dich vorbereitest.",
  },
  {
    number: "04",
    title: "Anfrage senden",
    description:
        "Sende deine Anfrage ab und wir besprechen die nächsten Schritte.",
  },
];

export default function Home() {
  return (
      <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {/* Navigation */}
        <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <div className="flex size-12 items-center justify-center overflow-hidden rounded-lg sm:size-16">
                  <Image
                    src="/codewithMiguelLogo.png"
                    alt="Informatik Nachhilfe Logo"
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>

              <div className="ml-auto flex items-center gap-3">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <nav className="hidden items-center gap-8 text-sm text-[var(--color-text-soft)] md:flex">
                <Link href="#themen" className="transition hover:text-[var(--color-primary)]">
                  Themen
                </Link>
                <Link href="#ablauf" className="transition hover:text-[var(--color-primary)]">
                  Ablauf
                </Link>
                <Link href="#ueber-mich" className="transition hover:text-[var(--color-primary)]">
                  Über mich
                </Link>
              </nav>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-end">
                <Link
                  href="/anfrage"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent-orange)] px-4 py-3 text-sm font-medium text-white sm:px-5"
                >
                  Informatik-Nachhilfe
                </Link>

                <Link
                  href="/web-projects"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm font-medium text-[var(--color-text)] sm:px-5"
                >
                  Hilfe beim Webprojekt
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(235,54,120,0.12),transparent_35%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(251,119,60,0.10),transparent_30%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
            <div>
              <div className="section-badge mb-6">
                <span className="size-2 rounded-full bg-[var(--color-accent-orange)]" />
                Individuelle Informatik-Nachhilfe
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">                Informatik verstehen.
                <span className="block text-[var(--color-primary)]">
                Spaß daran finden.
              </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
                Persönliche Informatik-Nachhilfe für Schüler, Auszubildende und
                Studierende. Nicht nur für bessere Noten — sondern damit du
                verstehst, wie spannend Informatik wirklich sein kann.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/anfrage"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 text-sm font-medium text-white transition hover:bg-[var(--color-base-dark)]"
                >
                  Lernanfrage erstellen
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                    href="#ueber-mich"
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white px-6 text-sm font-medium text-[var(--color-primary)] transition hover:border-[var(--color-primary)] hover:bg-[#faf8ff]"
                >
                  Mehr über mich
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--color-text-soft)]">
              <span className="flex items-center gap-2">
                <span className="text-[var(--color-accent-pink)]">✓</span>
                Online-Nachhilfe
              </span>
                <span className="flex items-center gap-2">
                <span className="text-[var(--color-accent-pink)]">✓</span>
                Individuelle Themen
              </span>
                <span className="flex items-center gap-2">
                <span className="text-[var(--color-accent-pink)]">✓</span>
                Praxisorientiert
              </span>
              </div>
            </div>

            {/* Code card */}
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-full bg-[rgba(24,1,97,0.10)] blur-3xl" />

              <div className="overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[var(--color-base-dark)] shadow-2xl shadow-[rgba(2,21,38,0.14)]">
                <div className="flex h-12 items-center gap-2 border-b border-white/10 px-5">
                  <div className="size-2.5 rounded-full bg-[#ff6b6b]" />
                  <div className="size-2.5 rounded-full bg-[#ffd93d]" />
                  <div className="size-2.5 rounded-full bg-[#6bcb77]" />
                  <span className="ml-3 text-xs text-zinc-500">learning.ts</span>
                </div>

                <div className="overflow-x-auto p-6 text-sm leading-7 sm:p-8">
                  <div>
                    <span className="text-[var(--color-accent-pink)]">const</span>{" "}
                    <span className="text-[#9ad0ff]">learning</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-[#9ad0ff]">topic</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[var(--color-accent-orange)]">
                    &quot;Informatik&quot;
                  </span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-[#9ad0ff]">goal</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[var(--color-accent-orange)]">
                    &quot;verstehen & Spaß finden&quot;
                  </span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-[#9ad0ff]">approach</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-white">[</span>
                  </div>

                  <div className="pl-12 text-[#d9b8ff]">
                    &quot;verständlich erklären&quot;,
                  </div>
                  <div className="pl-12 text-[#d9b8ff]">
                    &quot;gemeinsam üben&quot;,
                  </div>
                  <div className="pl-12 text-[#d9b8ff]">
                    &quot;Interesse für Informatik wecken&quot;
                  </div>

                  <div className="pl-6 text-white">]</div>
                  <div className="text-white">{"};"}</div>

                  <div className="mt-7 text-zinc-500">
                    {"// Lernen beginnt mit Motivation."}
                  </div>

                  <div className="mt-1">
                    <span className="text-[var(--color-accent-pink)]">return</span>{" "}
                    <span className="text-[#9ad0ff]">confidence</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Themen */}
        <section id="themen" className="bg-[var(--color-surface)] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                Themenbereiche
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Was möchtest du verstehen?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-soft)]">
                Wähle einen Bereich aus und stelle anschließend genau die Themen
                zusammen, bei denen du Unterstützung brauchst.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => {
                const Icon = topic.icon;

                return (
                    <div
                        key={topic.title}
                        className="animated-border-card group"
                    >
                      <Link
                          href="/anfrage"
                          key={topic.title}
                          className="card-shell group block rounded-2xl p-6"
                      >
                        <div
                            className="
      flex size-11 items-center justify-center
      rounded-xl
      bg-[rgba(24,1,97,0.08)]
      text-[var(--color-primary)]
      transition
      group-hover:bg-[var(--color-primary)]
      group-hover:text-white
    "
                        >
                          <Icon className="size-5" />
                        </div>

                        <h3 className="mt-6 text-lg font-semibold text-[var(--color-text)]">
                          {topic.title}
                        </h3>

                        <p className="mt-2 leading-7 text-[var(--color-text-soft)]">
                          {topic.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {topic.tags.map((tag) => (
                              <span
                                  key={tag}
                                  className="
          rounded-md
          bg-[rgba(235,54,120,0.08)]
          px-2.5 py-1
          text-xs font-medium
          text-[var(--color-accent-pink)]
        "
                              >
        {tag}
      </span>
                          ))}
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
                          Themen ansehen

                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Über mich */}
        <section id="ueber-mich" className="py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                <GraduationCap className="size-5" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl text-[var(--color-base-dark)]">
                Ich war selbst schlecht in Informatik.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[var(--color-text-soft)]">
              <p>
                In der Schule hat mir Informatik lange keinen Spaß gemacht, weil
                mir der Reiz daran gefehlt hat.
              </p>

              <p>
                Heute bin ich Softwareentwickler, code extrem gerne und
                beschäftige mich auch außerhalb der Arbeit mit neuen
                Technologien, Projekten und Ideen.
              </p>

              <p>
                Mir geht es nicht nur darum, deine Noten zu verbessern. Ich möchte
                dir zeigen, warum Informatik spannend ist — und dass du dabei
                wirklich Spaß haben kannst.
              </p>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="bg-[var(--color-base-dark)] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
                <BookOpen className="size-4 text-[var(--color-accent-orange)]" />
                Dein Weg zur Nachhilfe
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                In wenigen Schritten zu deiner Lernanfrage.
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                  <div
                      key={step.number}
                      className="rounded-2xl border border-white/10 bg-white/5 p-7"
                  >
                    <div className="text-sm font-medium text-[var(--color-accent-orange)]">
                      {step.number}
                    </div>

                    <h3 className="mt-8 font-semibold">{step.title}</h3>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      {step.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] px-6 py-16 text-center text-white sm:px-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(251,119,60,0.30)] blur-3xl" />
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[rgba(235,54,120,0.25)] blur-3xl" />

              <div className="relative">
                <p className="text-sm text-white/70">
                  {"// Bereit anzufangen?"}
                </p>

                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Stell deine individuelle Lernanfrage zusammen.
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
                  Wähle deine Themen aus und beschreibe kurz, wobei du
                  Unterstützung brauchst.
                </p>

                <Link
                    href="/anfrage"
                    className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-6 text-sm font-medium text-white transition hover:bg-[var(--color-accent-pink)]"
                >
                  Lernanfrage starten
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--color-border)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-[var(--color-text-soft)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="flex items-center gap-2 text-[var(--color-base-dark)]">
              <Terminal className="size-4 text-[var(--color-primary)]" />
              Informatik Nachhilfe
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