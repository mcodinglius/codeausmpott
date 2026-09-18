"use client";

import Link from "next/link";
import {
    ArrowRight,
    BrainCircuit,
    Bug,
    Check,
    CircleHelp,
    Code2,
    Globe2,
    GraduationCap,
    LayoutTemplate,
    LoaderCircle,
    RefreshCw,
    ScanLine,
    ShoppingCart,
    Sparkles,
    Wrench,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type CheckMode =
    | "learning"
    | "bug"
    | "layout"
    | "domain"
    | "shop"
    | "unknown";

type CheckOption = {
    id: CheckMode;
    title: string;
    description: string;
    icon: typeof BrainCircuit;
    resultTitle: string;
    resultText: string;
    destination: "/anfrage" | "/web-projects";
    destinationLabel: string;
    tags: string[];
};

const OPTIONS: CheckOption[] = [
    {
        id: "learning",
        title: "Ich verstehe etwas nicht",
        description: "Theorie, Aufgabe oder Code ergibt für mich noch keinen Sinn.",
        icon: BrainCircuit,
        resultTitle: "Das klingt nach einem Lernthema.",
        resultText:
            "Wir sollten das Thema gemeinsam zerlegen, verstehen und anschließend praktisch üben.",
        destination: "/anfrage",
        destinationLabel: "Lern-Gehirn öffnen",
        tags: ["Erklärung", "Übung", "Informatik"],
    },
    {
        id: "bug",
        title: "Mein Code funktioniert nicht",
        description: "Fehler, Exception, komisches Verhalten oder Build-Problem.",
        icon: Bug,
        resultTitle: "Das klingt nach Debugging.",
        resultText:
            "Wir grenzen den Fehler ein, finden die Ursache und bauen eine verständliche Lösung.",
        destination: "/web-projects",
        destinationLabel: "Webprojekt prüfen",
        tags: ["Debugging", "TypeScript", "React / Next.js"],
    },
    {
        id: "layout",
        title: "Mein Layout macht Probleme",
        description: "Responsive, CSS, Abstände, Grid, Mobile oder Animationen.",
        icon: LayoutTemplate,
        resultTitle: "Das sieht nach Frontend & UI aus.",
        resultText:
            "Wir schauen uns Struktur, CSS und Responsiveness an und bringen das Layout sauber zusammen.",
        destination: "/web-projects",
        destinationLabel: "Frontend-Problem senden",
        tags: ["CSS", "Responsive", "UI"],
    },
    {
        id: "domain",
        title: "Domain / Deployment",
        description: "DNS, Vercel, HTTPS, Environment Variables oder Hosting.",
        icon: Globe2,
        resultTitle: "Das klingt nach Deployment & Infrastruktur.",
        resultText:
            "Wir prüfen Domain, DNS, Deployment und Konfiguration Schritt für Schritt.",
        destination: "/web-projects",
        destinationLabel: "Deployment prüfen",
        tags: ["Domain", "DNS", "Vercel"],
    },
    {
        id: "shop",
        title: "Shop / Website Builder",
        description: "Shopify, WooCommerce, Webflow, Framer oder Page Builder.",
        icon: ShoppingCart,
        resultTitle: "Das klingt nach einem Webprojekt.",
        resultText:
            "Wir schauen, was der Builder kann, wo Custom Code nötig ist und wie du sauber weiterkommst.",
        destination: "/web-projects",
        destinationLabel: "Projekt beschreiben",
        tags: ["Shop", "Builder", "Custom Code"],
    },
    {
        id: "unknown",
        title: "Keine Ahnung, wo der Fehler ist",
        description: "Irgendwas ist kaputt – aber du weißt noch nicht warum.",
        icon: CircleHelp,
        resultTitle: "Perfekt für einen CodeCheck.",
        resultText:
            "Du musst die Ursache nicht kennen. Beschreib einfach, was passiert und was eigentlich passieren soll.",
        destination: "/web-projects",
        destinationLabel: "Problem beschreiben",
        tags: ["Analyse", "Fehlersuche", "Lösung"],
    },
];

const SCAN_LABELS = [
    "CSS",
    "TypeScript",
    "React",
    "Next.js",
    "DNS",
    "API",
    "Vercel",
    "Shop",
    "Responsive",
    "Debugging",
];

export function CodeCheck() {
    const [selected, setSelected] = useState<CheckOption | null>(null);
    const [stage, setStage] = useState<"pick" | "scan" | "result">("pick");
    const [scanStep, setScanStep] = useState(0);

    const visibleScanLabels = useMemo(
        () => SCAN_LABELS.slice(0, Math.max(1, scanStep)),
        [scanStep],
    );

    useEffect(() => {
        if (stage !== "scan") return;

        setScanStep(0);

        const stepTimer = window.setInterval(() => {
            setScanStep((current) => Math.min(current + 1, SCAN_LABELS.length));
        }, 110);

        const finishTimer = window.setTimeout(() => {
            window.clearInterval(stepTimer);
            setStage("result");
        }, 1550);

        return () => {
            window.clearInterval(stepTimer);
            window.clearTimeout(finishTimer);
        };
    }, [stage]);

    function startCheck(option: CheckOption) {
        setSelected(option);
        setStage("scan");
    }

    function reset() {
        setSelected(null);
        setScanStep(0);
        setStage("pick");
    }

    return (
        <div className="mx-auto max-w-6xl">
        <div className="codecheck-shell overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-[0_30px_80px_rgba(24,1,97,0.10)]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden border-b border-[var(--color-border)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
        <div className="codecheck-orb mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center rounded-full">
        <div className="relative flex size-[82%] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#07142a] shadow-2xl">
        <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:26px_26px]" />

            {stage === "pick" && (
                <div className="relative z-10 flex flex-col items-center text-center text-white">
                <div className="mb-5 grid size-24 place-items-center rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">
                <Code2 className="size-11" />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-[0.32em] text-white/50">
        Ready
        </div>
        <div className="mt-2 text-3xl font-bold">CodeCheck</div>
        <div className="mt-3 max-w-[230px] text-sm leading-6 text-white/60">
        Wähl rechts aus, was dich gerade blockiert.
    </div>
    </div>
)}

    {stage === "scan" && (
        <>
            <div className="codecheck-scanline absolute left-[7%] right-[7%] z-20 h-[3px] rounded-full" />

        <div className="relative z-10 flex flex-col items-center text-center text-white">
        <ScanLine className="mb-5 size-16 animate-pulse" />
        <div className="text-xs uppercase tracking-[0.28em] text-white/50">
            Analysiere
            </div>
            <div className="mt-2 text-2xl font-bold">
        {selected?.title}
        </div>

        <div className="mt-6 flex min-h-16 max-w-[280px] flex-wrap justify-center gap-2">
        {visibleScanLabels.slice(-5).map((label) => (
                <span
                    key={label}
            className="codecheck-pop rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/70"
                >
                {label}
                </span>
    ))}
        </div>

        <LoaderCircle className="mt-5 size-5 animate-spin text-[var(--color-accent-orange)]" />
        </div>
        </>
    )}

    {stage === "result" && selected && (
        <div className="codecheck-result relative z-10 flex max-w-[310px] flex-col items-center px-6 text-center text-white">
        <div className="mb-5 grid size-20 place-items-center rounded-full bg-white/10">
        <Check className="size-9 text-[var(--color-accent-orange)]" />
            </div>

            <div className="text-xs uppercase tracking-[0.26em] text-white/50">
        Check abgeschlossen
    </div>

    <div className="mt-3 text-2xl font-bold">
        Richtung erkannt
    </div>

    <div className="mt-5 flex flex-wrap justify-center gap-2">
        {selected.tags.map((tag) => (
                <span
                    key={tag}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/75"
                >
                {tag}
                </span>
    ))}
        </div>
        </div>
    )}
    </div>
    </div>

    <div className="pointer-events-none absolute -left-16 top-10 size-40 rounded-full bg-[var(--color-accent-pink)]/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-16 right-4 size-48 rounded-full bg-[var(--color-accent-orange)]/10 blur-3xl" />
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
        {stage === "pick" && (
            <div className="codecheck-fade">
            <div className="mb-7">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-pink)]">
            <Sparkles className="size-4" />
                Problem auswählen
    </div>

    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Was bremst dich gerade?
        </h2>

        <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
            Du musst nicht wissen, wie das Problem technisch heißt.
        Wähl einfach aus, was am ehesten passt.
    </p>
    </div>

    <div className="grid gap-3 sm:grid-cols-2">
        {OPTIONS.map((option) => {
                const Icon = option.icon;

                return (
                    <button
                        key={option.id}
                type="button"
                onClick={() => startCheck(option)}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-pink)]/40 hover:shadow-lg"
                >
                <div className="mb-4 flex items-start justify-between gap-4">
                <div className="grid size-11 place-items-center rounded-xl bg-[var(--color-bg)] shadow-sm">
                <Icon className="size-5 text-[var(--color-primary)]" />
                    </div>

                    <ArrowRight className="size-5 text-[var(--color-text-soft)] transition group-hover:translate-x-1 group-hover:text-[var(--color-accent-orange)]" />
                    </div>

                    <div className="font-semibold">{option.title}</div>
                    <div className="mt-1.5 text-sm leading-5 text-[var(--color-text-soft)]">
                    {option.description}
                    </div>
                    </button>
            );
            })}
        </div>
        </div>
)}

    {stage === "scan" && selected && (
        <div className="codecheck-fade flex min-h-[480px] flex-col justify-center">
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-soft)]">
        <LoaderCircle className="size-3.5 animate-spin" />
            CodeCheck läuft
    </div>

    <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
        Ich sortiere das kurz ein.
    </h2>

    <p className="mt-4 max-w-xl leading-7 text-[var(--color-text-soft)]">
        Keine Sorge: Das hier soll keine Fake-KI-Diagnose sein. Der
        Check bringt dein Problem nur in die passende Richtung, damit
        du nicht erst wissen musst, ob CSS, DNS oder TypeScript schuld
        ist.
        </p>

        <div className="mt-8 grid gap-3">
        {["Problemtyp erkennen", "Bereich eingrenzen", "Nächsten Schritt vorbereiten"].map(
        (label, index) => {
            const done = scanStep >= (index + 1) * 3;

            return (
                <div
                    key={label}
            className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
            <div
                className={`grid size-8 place-items-center rounded-full ${
                done
                    ? "bg-[var(--color-accent-orange)] text-white"
                    : "bg-[var(--color-bg)] text-[var(--color-text-soft)]"
            }`}
        >
            {done ? (
                <Check className="size-4" />
            ) : (
                <span className="text-xs font-bold">{index + 1}</span>
            )}
            </div>
            <span className="font-medium">{label}</span>
                </div>
        );
        },
    )}
        </div>
        </div>
    )}

    {stage === "result" && selected && (
        <div className="codecheck-result flex min-h-[480px] flex-col justify-center">
        <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[var(--color-surface)]">
            {selected.destination === "/anfrage" ? (
                    <GraduationCap className="size-6 text-[var(--color-primary)]" />
                ) : (
                    <Wrench className="size-6 text-[var(--color-accent-pink)]" />
                )}
            </div>

            <div className="text-sm font-semibold text-[var(--color-accent-pink)]">
        Ergebnis
        </div>

        <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
        {selected.resultTitle}
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-soft)]">
        {selected.resultText}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
        {selected.tags.map((tag) => (
                <span
                    key={tag}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm"
                >
                {tag}
                </span>
    ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
    <Link
        href={selected.destination}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
            {selected.destinationLabel}
            <ArrowRight className="size-4" />
        </Link>

        <button
        type="button"
        onClick={reset}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 py-3.5 font-semibold transition hover:bg-[var(--color-surface)]"
        >
        <RefreshCw className="size-4" />
            Nochmal prüfen
    </button>
    </div>
    </div>
    )}
    </div>
    </div>
    </div>

    <div className="mt-6 text-center text-xs text-[var(--color-text-soft)]">
        CodeCheck ersetzt keine technische Analyse – er hilft dir nur, den
    richtigen Einstieg zu finden.
    </div>

    <style jsx global>{`
        .codecheck-shell {
          isolation: isolate;
        }

        .codecheck-orb {
          position: relative;
          padding: 3px;
          background: conic-gradient(
            from 0deg,
            #180161,
            #eb3678,
            #fb773c,
            #180161
          );
          animation: codecheck-ring 7s linear infinite;
          box-shadow:
            0 0 35px rgba(235, 54, 120, 0.14),
            0 0 70px rgba(251, 119, 60, 0.08);
        }

        .codecheck-orb::before {
          content: "";
          position: absolute;
          inset: -8%;
          border-radius: 9999px;
          background: conic-gradient(
            from 180deg,
            transparent,
            rgba(235, 54, 120, 0.16),
            transparent,
            rgba(251, 119, 60, 0.14),
            transparent
          );
          filter: blur(24px);
          z-index: -1;
        }

        .codecheck-scanline {
          top: 11%;
          background: linear-gradient(
            90deg,
            transparent,
            #eb3678,
            #fb773c,
            transparent
          );
          box-shadow:
            0 0 12px rgba(235, 54, 120, 0.9),
            0 0 32px rgba(251, 119, 60, 0.55);
          animation: codecheck-scan 1.25s ease-in-out infinite alternate;
        }

        .codecheck-pop {
          animation: codecheck-pop 0.28s ease-out both;
        }

        .codecheck-fade {
          animation: codecheck-fade 0.34s ease-out both;
        }

        .codecheck-result {
          animation: codecheck-result 0.5s cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes codecheck-ring {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes codecheck-scan {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(280px);
          }
        }

        @keyframes codecheck-pop {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.94);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes codecheck-fade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes codecheck-result {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 640px) {
          @keyframes codecheck-scan {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(220px);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .codecheck-orb,
          .codecheck-scanline,
          .codecheck-pop,
          .codecheck-fade,
          .codecheck-result {
            animation: none !important;
          }
        }
      `}</style>
    </div>
);
}
