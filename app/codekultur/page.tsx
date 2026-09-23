import Link from "next/link";
import {
    ArrowRight,
    Brain,
    CheckCircle2,
    Code2,
    GitBranch,
    Handshake,
    MessageSquare,
    RefreshCw,
    ShieldCheck,
    Sparkles,
    Terminal,
    Users,
    XCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const principles = [
    {
        short: "S",
        title: "Single Responsibility",
        text: "Eine Komponente, Klasse oder Funktion sollte einen klaren Grund haben, sich zu ändern.",
    },
    {
        short: "O",
        title: "Open / Closed",
        text: "Guter Code lässt sich erweitern, ohne dass du ständig bestehendes Verhalten zerlegen musst.",
    },
    {
        short: "L",
        title: "Liskov Substitution",
        text: "Abstraktionen sollten austauschbar bleiben, ohne überraschende Seiteneffekte zu erzeugen.",
    },
    {
        short: "I",
        title: "Interface Segregation",
        text: "Kleine, klare Schnittstellen sind meist besser als große Verträge, die niemand vollständig braucht.",
    },
    {
        short: "D",
        title: "Dependency Inversion",
        text: "Kernlogik sollte nicht unnötig an konkrete Details gekoppelt sein.",
    },
];

const yesNo = [
    {
        good: true,
        title: "„Ja, das kann ich machen.“",
        text: "Wenn Umfang, Ziel und Konsequenzen klar sind.",
    },
    {
        good: false,
        title: "„Ja, irgendwie geht das schon.“",
        text: "Wenn du bereits weißt, dass daraus technische Schulden oder falsche Erwartungen entstehen.",
    },
    {
        good: true,
        title: "„Nein, so würde ich es nicht bauen.“",
        text: "Wenn du erklären kannst, warum – und eine bessere Alternative mitbringst.",
    },
    {
        good: false,
        title: "„Nein.“",
        text: "Ohne Kontext, Erklärung oder Bereitschaft, gemeinsam eine Lösung zu finden.",
    },
];

const collaboration = [
    {
        icon: MessageSquare,
        title: "Klar kommunizieren",
        text: "Probleme früh ansprechen. Erwartungen konkret machen. Entscheidungen verständlich begründen.",
    },
    {
        icon: Code2,
        title: "Lesbaren Code schreiben",
        text: "Code wird viel häufiger gelesen als geschrieben. Gute Namen und klare Strukturen sparen Teamzeit.",
    },
    {
        icon: Brain,
        title: "Mitdenken statt nur umsetzen",
        text: "Nicht jede Anforderung ist automatisch die beste Lösung. Gute Entwickler fragen nach dem Warum.",
    },
    {
        icon: Handshake,
        title: "Verantwortung teilen",
        text: "Ein Projekt funktioniert besser, wenn Wissen nicht in einzelnen Köpfen oder Dateien verschwindet.",
    },
];

export default function CodeKulturPage() {
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
                                Code. Klarheit. Zusammenarbeit.
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="/codecheck"
                            className="hidden rounded-xl border border-[var(--color-border)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--color-surface)] sm:inline-flex"
                        >
                            CodeCheck
                        </Link>
                    </div>
                </div>
            </header>

            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute left-[-10rem] top-20 size-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
                <div className="pointer-events-none absolute right-[-8rem] top-40 size-80 rounded-full bg-[var(--color-accent-pink)]/10 blur-3xl" />

                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
                    <div className="flex flex-col justify-center">
                        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm">
                            <Sparkles className="size-4 text-[var(--color-accent-pink)]" />
                            Code Culture
                        </div>

                        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            Code ist
                            <span className="codeculture-gradient block">Kommunikation.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-soft)]">
                            Gute Software entsteht nicht nur durch Syntax, Frameworks und Skill.
                            Sie entsteht, wenn Menschen klar denken, ehrlich kommunizieren und
                            Verantwortung für gemeinsame Entscheidungen übernehmen.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/webprojekte"
                                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Gemeinsam am Projekt arbeiten
                                <ArrowRight className="size-4" />
                            </Link>

                            <Link
                                href="#prinzipien"
                                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 py-3.5 font-semibold transition hover:bg-[var(--color-surface)]"
                            >
                                Warum das wichtig ist
                            </Link>
                        </div>
                    </div>

                    <div className="codeculture-card relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
                        <div className="relative z-10">
                            <div className="mb-10 flex items-center justify-between">
                                <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                                    collaboration.ts
                                </div>
                                <div className="flex gap-1.5">
                                    <span className="size-2.5 rounded-full bg-[var(--color-accent-pink)]" />
                                    <span className="size-2.5 rounded-full bg-[var(--color-accent-orange)]" />
                                    <span className="size-2.5 rounded-full bg-white/30" />
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm leading-7 sm:text-base">
                                <div>
                                    <span className="text-[#eb3678]">const</span>{" "}
                                    <span className="text-white">goodDeveloper</span>{" "}
                                    <span className="text-white/50">=</span>{" "}
                                    <span className="text-[#fb773c]">{"{"}</span>
                                </div>

                                <div className="pl-5 text-white/75">
                                    skill: <span className="text-white">true</span>,
                                </div>
                                <div className="pl-5 text-white/75">
                                    communication: <span className="text-white">true</span>,
                                </div>
                                <div className="pl-5 text-white/75">
                                    responsibility: <span className="text-white">true</span>,
                                </div>
                                <div className="pl-5 text-white/75">
                                    ego: <span className="text-white/50">undefined</span>,
                                </div>

                                <div className="text-[#fb773c]">{"};"}</div>

                                <div className="pt-3 text-white/35">
                                    {"// code is a team sport"}
                                </div>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <Users className="mb-3 size-5 text-[#eb3678]" />
                                    <div className="text-sm font-semibold text-white">Team</div>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <GitBranch className="mb-3 size-5 text-[#fb773c]" />
                                    <div className="text-sm font-semibold text-white">Code</div>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <MessageSquare className="mb-3 size-5 text-white" />
                                    <div className="text-sm font-semibold text-white">Klarheit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <div className="text-sm font-semibold text-[var(--color-accent-pink)]">
                            Ja sagen. Nein sagen.
                        </div>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                            Klarheit ist hilfreicher als Gefälligkeit.
                        </h2>
                        <p className="mt-5 leading-7 text-[var(--color-text-soft)]">
                            Zusammenarbeit wird schwierig, wenn jeder zu allem Ja sagt.
                            Genauso schwierig wird sie, wenn ein Nein ohne Erklärung kommt.
                            Professionell ist beides: zustimmen können und Grenzen klar
                            kommunizieren können.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {yesNo.map((item) => (
                            <div
                                key={item.title}
                                className="card-shell rounded-2xl p-6"
                                data-scroll-border
                            >
                                <div className="flex gap-4">
                                    <div
                                        className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                                            item.good
                                                ? "bg-[var(--color-accent-orange)]/10 text-[var(--color-accent-orange)]"
                                                : "bg-[var(--color-accent-pink)]/10 text-[var(--color-accent-pink)]"
                                        }`}
                                    >
                                        {item.good ? (
                                            <CheckCircle2 className="size-5" />
                                        ) : (
                                            <XCircle className="size-5" />
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <div className="text-sm font-semibold text-[var(--color-accent-pink)]">
                            Zusammenarbeit
                        </div>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                            Skill bringt dich ins Projekt.
                            <span className="block text-[var(--color-text-soft)]">
                Mentalität hält das Projekt gesund.
              </span>
                        </h2>

                        <p className="mt-6 max-w-xl leading-7 text-[var(--color-text-soft)]">
                            Ein technisch starker Entwickler kann ein Projekt trotzdem
                            schwierig machen. Gute Zusammenarbeit braucht Offenheit,
                            Verlässlichkeit, Lernbereitschaft und die Fähigkeit, Probleme
                            anzusprechen, bevor sie groß werden.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {collaboration.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="card-shell rounded-2xl p-6"
                                data-scroll-border
                            >
                                <div className="mb-5 grid size-11 place-items-center rounded-xl bg-[var(--color-surface)]">
                                    <Icon className="size-5 text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="prinzipien"
                className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"
            >
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="mb-12 max-w-3xl">
                        <div className="text-sm font-semibold text-[var(--color-accent-pink)]">
                            SOLID
                        </div>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                            Prinzipien sind kein Selbstzweck.
                        </h2>
                        <p className="mt-5 leading-7 text-[var(--color-text-soft)]">
                            SOLID bedeutet nicht, jedes kleine Projekt mit zehn Schichten
                            Abstraktion zu überziehen. Die Prinzipien helfen dabei,
                            Änderungen, Abhängigkeiten und Verantwortung bewusst zu
                            strukturieren.
                        </p>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-5">
                        {principles.map((principle) => (
                            <div
                                key={principle.short}
                                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--color-base-dark)] text-xl font-bold text-white transition group-hover:bg-[var(--color-primary)]">
                                    {principle.short}
                                </div>

                                <h3 className="font-semibold">{principle.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-[var(--color-text-soft)]">
                                    {principle.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="codeculture-manifesto relative overflow-hidden rounded-[2rem] p-8 text-white sm:p-10 lg:p-14">
                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
                        <div>
                            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/60">
                                <ShieldCheck className="size-4" />
                                Mein Anspruch
                            </div>

                            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                                Nicht einfach Features abhaken.
                                <span className="block text-white/55">
                  Sondern gemeinsam gute Entscheidungen treffen.
                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl leading-7 text-white/65">
                                Ich möchte verstehen, was das eigentliche Ziel ist. Ich sage,
                                wenn ich etwas anders sehe. Ich erkläre Entscheidungen. Und ich
                                möchte Code hinterlassen, den man morgen noch verstehen und
                                weiterentwickeln kann.
                            </p>
                        </div>

                        <div className="grid gap-3">
                            {[
                                "Klar vor clever",
                                "Verständlich vor beeindruckend",
                                "Probleme früh ansprechen",
                                "Feedback ohne Ego",
                                "Code für Menschen schreiben",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5"
                                >
                                    <CheckCircle2 className="size-5 shrink-0 text-[#fb773c]" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
                <div className="text-center">
                    <RefreshCw className="mx-auto size-7 text-[var(--color-accent-pink)]" />
                    <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                        Gute Software ist nie wirklich „fertig“.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--color-text-soft)]">
                        Anforderungen ändern sich. Teams verändern sich. Wissen wächst.
                        Deshalb sollte Code so gebaut sein, dass Veränderung möglich bleibt.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/webprojekte"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Webprojekt starten
                            <ArrowRight className="size-4" />
                        </Link>

                        <Link
                            href="/codecheck"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 py-3.5 font-semibold transition hover:bg-[var(--color-surface)]"
                        >
                            Erst CodeCheck machen
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        .codeculture-gradient {
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

        .codeculture-card {
          background:
            radial-gradient(circle at 20% 0%, rgba(235,54,120,.22), transparent 42%),
            radial-gradient(circle at 100% 100%, rgba(251,119,60,.18), transparent 40%),
            #021526;
          box-shadow:
            0 30px 80px rgba(2, 21, 38, .22),
            inset 0 0 0 1px rgba(255,255,255,.07);
        }

        .codeculture-card::after {
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

        .codeculture-manifesto {
          background:
            radial-gradient(circle at 0% 0%, rgba(235,54,120,.20), transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(251,119,60,.16), transparent 40%),
            #021526;
        }

        .codeculture-manifesto::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 9999px;
          right: -80px;
          top: -100px;
          border: 1px solid rgba(255,255,255,.08);
          box-shadow:
            0 0 0 40px rgba(255,255,255,.02),
            0 0 0 80px rgba(255,255,255,.015);
        }
      `}</style>
        </main>
    );
}
