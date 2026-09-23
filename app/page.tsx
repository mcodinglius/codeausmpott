import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  MessageSquare,
  Network,
  ScanLine,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {LandingPreviewForm} from "@/components/landingpage-preview-form";

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
      <main className="min-h-screen bg-(--color-bg) text-(--color-text)">
        {/* Navigation */}
        <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur">
          {/* obere Zeile */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
            <Link
                href="/"
                className="flex shrink-0 items-center gap-3 font-semibold"
            >
              <div className="flex size-10 items-center justify-center overflow-hidden rounded-lg sm:size-12">
                <Image
                    src="/favicon.ico"
                    alt="CodeWithMiguel Logo"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <div className="ml-auto flex items-center gap-3">
              <ThemeToggle />

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-3 md:flex">
                <Link
                    href="/anfrage"
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent-orange)] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
                >
                  Informatik-Nachhilfe
                </Link>

                <Link
                    href="/kurse"
                    className="group inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm font-medium text-[var(--color-text)] transition hover:-translate-y-0.5"
                >
                  Kurse

                  <span className="rounded-full bg-[var(--color-accent-orange)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent-orange)]">
            Neu
          </span>
                </Link>

                <Link
                    href="#webprojekt-generator"
                    className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition hover:-translate-y-0.5"
                >
                  Webprojekt-Vorschau
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="grid grid-cols-2 gap-2 px-4 pb-3 sm:px-6 md:hidden">
            <Link
                href="/anfrage"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--color-accent-orange)] px-3 py-2.5 text-center text-xs font-semibold text-white sm:text-sm"
            >
              Informatik-Nachhilfe
            </Link>

            <Link
                href="/kurse"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--color-accent-pink)]/30 bg-[var(--color-accent-pink)]/5 px-3 py-2.5 text-center text-xs font-semibold text-[var(--color-text)] sm:text-sm"
            >
              Kurse

              <span className="rounded-full bg-[var(--color-accent-orange)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent-orange)]">
        Neu
      </span>
            </Link>

            <Link
                href="#webprojekt-generator"
                className="col-span-2 inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-text)]"
            >
              Webprojekt-Vorschau
            </Link>
          </div>
        </header>

        {/* CodeCheck direkt unter dem Header */}
        <Link
            href="/codecheck"
            className="group mx-auto mt-3 block max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="codecheck-teaser relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-6">
            {/* Scan Animation */}
            <div className="codecheck-teaser-scan pointer-events-none absolute inset-y-0 w-24 opacity-40" />

            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              {/* Icon */}
              <div className="codecheck-teaser-icon grid size-11 shrink-0 place-items-center rounded-xl text-white shadow-lg sm:size-12">
                <ScanLine className="size-5 sm:size-6" />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)] sm:text-base">
            Keine Ahnung, wo der Fehler steckt?
          </span>

                  <span className="rounded-full bg-[var(--color-accent-pink)]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[var(--color-accent-pink)] sm:text-[10px]">
            CodeCheck
          </span>
                </div>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--color-text-soft)] sm:text-sm">
                  Finde in wenigen Sekunden heraus, ob dein Problem eher bei Code,
                  Layout, Deployment oder einem Lernthema liegt.
                </p>
              </div>

              {/* Pfeil */}
              <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-surface)] transition group-hover:translate-x-1 group-hover:bg-[var(--color-accent-orange)] group-hover:text-white">
                <ArrowRight className="size-4" />
              </div>
            </div>
          </div>
        </Link>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(235,54,120,0.12),transparent_35%)]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(251,119,60,0.10),transparent_30%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div>
              <div className="section-badge mb-4">
                <span className="size-2 rounded-full bg-[var(--color-accent-orange)]" />
                Informatik lernen. Software entwickeln.
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                Echtes Wissen statt
                <span className="block text-[var(--color-primary)]">
                  Baukasten-Denken.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg sm:leading-8">
                Du lernst nicht nur, wie etwas funktioniert, sondern warum. Wir entwickeln selbst, arbeiten mit echter Versionsverwaltung und wenden das Gelernte direkt in Code und Projekten an.
              </p>

              <div className="mt-6 grid gap-2 text-sm text-[var(--color-text-soft)] sm:grid-cols-3">
                {[
                  ["01", "Selbst entwickeln"],
                  ["02", "Git wirklich nutzen"],
                  ["03", "Wissen anwenden"],
                ].map(([number, label]) => (
                    <div
                        key={label}
                        className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-3"
                    >
                      <span className="font-mono text-xs text-[var(--color-accent-pink)]">{number}</span>
                      <span className="font-medium text-[var(--color-text)]">{label}</span>
                    </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/anfrage"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-medium text-white transition hover:bg-[var(--color-base-dark)]"
                >
                  Lernanfrage erstellen
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                    href="#ueber-mich"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)]"
                >
                  Wie ich unterrichte
                </Link>
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
                  <span className="ml-3 text-xs text-zinc-500">developer.ts</span>
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
                    &quot;echtes Verständnis&quot;
                  </span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-[#9ad0ff]">goal</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[var(--color-accent-orange)]">
                    &quot;selbst entwickeln&quot;
                  </span>
                    <span className="text-white">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-[#9ad0ff]">approach</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-white">[</span>
                  </div>

                  <div className="pl-12 text-[#d9b8ff]">
                    &quot;Wissen aufbauen&quot;,
                  </div>
                  <div className="pl-12 text-[#d9b8ff]">
                    &quot;Git & Versionsverwaltung nutzen&quot;,
                  </div>
                  <div className="pl-12 text-[#d9b8ff]">
                    &quot;Gelerntes praktisch anwenden&quot;
                  </div>

                  <div className="pl-6 text-white">]</div>
                  <div className="text-white">{"};"}</div>

                  <div className="mt-7 text-zinc-500">
                    {"// Nicht klicken. Verstehen."}
                  </div>

                  <div className="mt-1">
                    <span className="text-[var(--color-accent-pink)]">return</span>{" "}
                    <span className="text-[#9ad0ff]">knowledge</span>
                    <span className="text-white">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Themen */}
        <section id="themen" className="bg-[var(--color-surface)] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                Themenbereiche
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Was möchtest du wirklich verstehen?
              </h2>

              <p className="mt-4 text-lg leading-8 text-[var(--color-text-soft)]">
                Wähle einen Bereich aus. Wir arbeiten an den Grundlagen, schreiben selbst Code und übertragen das Wissen auf echte Aufgaben.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                          data-scroll-border
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
        <section id="ueber-mich" className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl bg-(--color-primary) text-white">
                <GraduationCap className="size-5" />
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Ich kenne den Unterschied zwischen auswendig lernen und verstehen.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-8 text-[var(--color-text-soft)]">
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
                Mir geht es nicht darum, dir eine fertige Lösung hinzustellen. Du sollst verstehen, selbst entwickeln, sauber versionieren und das Gelernte auf neue Probleme übertragen können.
              </p>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section id="ablauf" className="bg-[var(--color-base-dark)] py-14 sm:py-16 lg:py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
                <BookOpen className="size-4 text-[var(--color-accent-orange)]" />
                Dein Weg zur Nachhilfe
              </div>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                In wenigen Schritten zu deiner Lernanfrage.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <Link
              href="/codekultur"
              data-scroll-border
              className="card-shell group relative block overflow-hidden rounded-[2rem]"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Text */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold">
                  <Brain className="size-4 text-[var(--color-accent-pink)]" />
                  Entwickeln statt zusammenklicken
                </div>

                <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Gutes Entwickeln beginnt mit
                  <span className="block bg-gradient-to-r from-[#180161] via-[#eb3678] to-[#fb773c] bg-clip-text text-transparent">
            echtem Verständnis.
          </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-soft)]">
                  Kein Baukasten ersetzt Grundlagen. Deshalb gehören sauberer Code, Git, nachvollziehbare Entscheidungen und eigenständiges Problemlösen für mich zusammen.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Grundlagen",
                    "Git",
                    "Clean Code",
                    "Problemlösen",
                  ].map((item) => (
                      <span
                          key={item}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium"
                      >
              {item}
            </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold">
                  Meine Sicht auf echtes Entwickeln

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Visual */}
              <div className="relative min-h-[280px] overflow-hidden bg-[#021526] p-8 lg:min-h-full">
                <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-[#eb3678]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 left-10 size-52 rounded-full bg-[#fb773c]/20 blur-3xl" />

                <div className="relative flex h-full flex-col justify-center">
                  <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                    developer.ts
                  </div>

                  <div className="space-y-3 font-mono text-sm leading-7 sm:text-base">
                    <div>
                      <span className="text-[#eb3678]">const</span>{" "}
                      <span className="text-white">developer</span>{" "}
                      <span className="text-white/40">=</span>{" "}
                      <span className="text-[#fb773c]">{"{"}</span>
                    </div>

                    <div className="pl-5 text-white/70">
                      skill: <span className="text-white">true</span>,
                    </div>

                    <div className="pl-5 text-white/70">
                      communication:{" "}
                      <span className="text-white">true</span>,
                    </div>

                    <div className="pl-5 text-white/70">
                      responsibility:{" "}
                      <span className="text-white">true</span>,
                    </div>

                    <div className="pl-5 text-white/70">
                      ego:{" "}
                      <span className="text-white/40">
                undefined
              </span>,
                    </div>

                    <div className="text-[#fb773c]">
                      {"};"}
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                      <Code2 className="size-5 text-[#fb773c]" />
                    </div>

                    <div className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                      <MessageSquare className="size-5 text-[#eb3678]" />
                    </div>

                    <div className="flex items-center text-sm text-white/50">
                      Understand it. Build it. Version it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>


        {/* Webprojekt Generator */}
        <section
            id="webprojekt-generator"
            className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-16 lg:py-20"
        >
          <div className="pointer-events-none absolute -right-40 top-0 size-96 rounded-full bg-[rgba(235,54,120,0.08)] blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 size-96 rounded-full bg-[rgba(251,119,60,0.08)] blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text)]">
                  <Globe2 className="size-4 text-[var(--color-accent-pink)]" />
                  Webprojekt-Vorschau
                </div>

                <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
                  Aus ein paar Stichpunkten wird
                  <span className="block text-[var(--color-primary)]">
                    eine erste Designrichtung.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg sm:leading-8">
                  Beschreibe dein Unternehmen, dein Ziel und den gewünschten Stil.
                  Der Generator erstellt daraus eine erste visuelle Vorstellung für
                  dein mögliches Webprojekt.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  ["01", "Idee beschreiben"],
                  ["02", "Vorschau erzeugen"],
                  ["03", "Individuell entwickeln"],
                ].map(([number, label]) => (
                    <div
                        key={label}
                        className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-4"
                    >
                      <div className="font-mono text-xs text-[var(--color-accent-pink)]">
                        {number}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                        {label}
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-3 shadow-[0_24px_80px_rgba(2,21,38,0.08)] sm:p-5 lg:mt-10 lg:p-6">
              <LandingPreviewForm />
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Die KI liefert die Richtung. Die Website wird richtig entwickelt.
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-soft)]">
                  Die Vorschau ist kein fertiger Baukasten-Export. Struktur,
                  Responsive Design, Komponenten, Code und Versionsverwaltung
                  entstehen bei der Umsetzung individuell für dein Projekt.
                </p>
              </div>

              <Link
                  href="/web-projects"
                  className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--color-base-dark)]"
              >
                Webprojekt besprechen
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] px-5 py-12 text-center text-white sm:px-12">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(251,119,60,0.30)] blur-3xl" />
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[rgba(235,54,120,0.25)] blur-3xl" />

              <div className="relative">
                <p className="text-sm text-white/70">
                  {"// Bereit anzufangen?"}
                </p>

                <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Lern nicht nur für die nächste Aufgabe.
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
                  Baue Wissen auf, das du beim nächsten Projekt selbst wieder einsetzen kannst.
                </p>

                <Link
                    href="/anfrage"
                    className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-6 text-sm font-medium text-white transition hover:bg-[var(--color-accent-pink)]"
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