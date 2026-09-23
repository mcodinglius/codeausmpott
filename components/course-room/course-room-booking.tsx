"use client";

import {
    ArrowRight,
    Check,
    Code2,
    Cpu,
    Globe2,
    LoaderCircle,
    LockKeyhole,
    Monitor,
    MousePointer2,
    Send,
    Sparkles,
    Users,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Course = {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    level: string;
    icon: typeof Code2;
    topics: string[];
    bookedSeats: number;
};

const MAX_SEATS = 10;

/*
 * WICHTIG:
 * bookedSeats sind hier absichtlich 0.
 * Ersetze diese Werte später durch echte Daten aus Supabase / deiner API.
 * Keine erfundenen Buchungen anzeigen.
 */
const COURSES: Course[] = [
    {
        id: "python",
        title: "Python Basics & Problemlösen",
        shortTitle: "Python",
        description:
            "Von Variablen und Schleifen bis zu eigenen kleinen Programmen – mit Fokus darauf, Probleme selbstständig in Code zu übersetzen.",
        level: "Einsteiger",
        icon: Cpu,
        topics: ["Grundlagen", "Schleifen & Funktionen", "Problemlösen"],
        bookedSeats: 0,
    },
    {
        id: "web",
        title: "Webentwicklung: HTML, CSS & JavaScript",
        shortTitle: "Web Dev",
        description:
            "Wir bauen eine echte kleine Website und verstehen dabei Layout, Responsive Design und erste Interaktionen.",
        level: "Einsteiger – Mittel",
        icon: Globe2,
        topics: ["HTML", "CSS / Responsive", "JavaScript"],
        bookedSeats: 0,
    },
    {
        id: "oop",
        title: "OOP, Clean Code & gute Strukturen",
        shortTitle: "OOP",
        description:
            "Klassen, Objekte und saubere Strukturen verstehen – nicht nur für die nächste Klausur, sondern für Code, der langfristig Sinn ergibt.",
        level: "Mittel",
        icon: Code2,
        topics: ["OOP", "Clean Code", "SOLID Basics"],
        bookedSeats: 0,
    },
];

export function CourseRoomBooking() {
    const [courseId, setCourseId] = useState(COURSES[0].id);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
        "idle",
    );
    const [message, setMessage] = useState("");

    const course = useMemo(
        () => COURSES.find((item) => item.id === courseId) ?? COURSES[0],
        [courseId],
    );

    const freeSeats = MAX_SEATS - course.bookedSeats;

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();

        setStatus("sending");
        setMessage("");

        try {
            const response = await fetch("/api/anfrage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    context: `Kursbuchung · ${course.title}`,
                    description: `Anmeldung für den Kurs "${course.title}".`,
                    goal: "Teilnahme an der nächsten verfügbaren Kurseinheit.",
                    topics: course.topics,
                    website: String(formData.get("website") ?? ""),
                }),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(
                    result?.error ?? "Die Anmeldung konnte nicht gesendet werden.",
                );
            }

            form.reset();
            setStatus("success");
            setMessage(
                "Deine Anmeldung ist angekommen. Ich melde mich mit Termin und finaler Platzbestätigung.",
            );
        } catch (error) {
            setStatus("error");
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Die Anmeldung konnte nicht gesendet werden.",
            );
        }
    }

    return (
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
                <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-pink)]">
                        <Sparkles className="size-4" />
                        01 · Kurs auswählen
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Welcher Raum passt zu dir?
                    </h2>
                </div>

                <div className="space-y-3">
                    {COURSES.map((item) => {
                        const Icon = item.icon;
                        const selected = item.id === courseId;
                        const remaining = MAX_SEATS - item.bookedSeats;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                    setCourseId(item.id);
                                    setStatus("idle");
                                    setMessage("");
                                }}
                                className={`group w-full rounded-2xl border p-5 text-left transition duration-300 ${
                                    selected
                                        ? "border-[var(--color-accent-pink)]/50 bg-[var(--color-surface-strong)] shadow-lg"
                                        : "border-[var(--color-border)] bg-[var(--color-surface)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-strong)]"
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`grid size-12 shrink-0 place-items-center rounded-xl ${
                                            selected
                                                ? "course-icon-active text-white"
                                                : "bg-[var(--color-bg)] text-[var(--color-primary)]"
                                        }`}
                                    >
                                        <Icon className="size-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h3 className="font-semibold">{item.title}</h3>

                                            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-text-soft)]">
                        {remaining} / {MAX_SEATS} frei
                      </span>
                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                            {item.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {item.topics.map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="rounded-full bg-[var(--color-bg)] px-2.5 py-1 text-xs"
                                                >
                          {topic}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="course-room overflow-hidden rounded-[2rem] p-[2px]">
                <div className="h-full rounded-[calc(2rem-2px)] bg-[#021526] p-5 text-white sm:p-7 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                                Raum 01
                            </div>
                            <h2 className="mt-2 text-2xl font-bold">{course.shortTitle}</h2>
                            <p className="mt-1 text-sm text-white/50">{course.level}</p>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs">
                            <Users className="size-4 text-[#fb773c]" />
                            <span>{freeSeats} Plätze frei</span>
                        </div>
                    </div>

                    <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-6">
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                                <Monitor className="size-4" />
                                Live-Raumübersicht
                            </div>

                            <div className="flex items-center gap-2 text-xs text-white/45">
                                <span className="size-2 rounded-full bg-[#fb773c]" />
                                verfügbar
                            </div>
                        </div>

                        <div className="relative mx-auto max-w-lg">
                            <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                                <div className="mx-auto mb-2 grid size-10 place-items-center rounded-xl bg-white/5">
                                    <Code2 className="size-5 text-[#eb3678]" />
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                                    Miguel · Session
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                                {Array.from({ length: MAX_SEATS }).map((_, index) => {
                                    const occupied = index < course.bookedSeats;

                                    return (
                                        <div
                                            key={index}
                                            className={`course-seat relative flex aspect-[0.9] flex-col items-center justify-center rounded-2xl border ${
                                                occupied
                                                    ? "border-white/10 bg-white/10 text-white/35"
                                                    : "border-white/10 bg-white/[0.045] text-white"
                                            }`}
                                        >
                                            {occupied ? (
                                                <>
                                                    <LockKeyhole className="size-5" />
                                                    <span className="mt-2 text-[10px] uppercase tracking-wider">
                            belegt
                          </span>
                                                </>
                                            ) : (
                                                <>
                                                    <MousePointer2 className="size-5 text-[#fb773c]" />
                                                    <span className="mt-2 text-[10px] uppercase tracking-wider text-white/55">
                            frei
                          </span>
                                                </>
                                            )}

                                            <span className="absolute right-2 top-2 text-[9px] text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-3xl bg-white/[0.045] p-5 sm:p-6">
                        <div className="mb-5">
                            <div className="text-sm font-semibold">
                                Platz für „{course.title}“ anfragen
                            </div>
                            <p className="mt-1 text-xs leading-5 text-white/45">
                                Die Platzanzeige sollte später mit echten Buchungsdaten
                                synchronisiert werden. Nach deiner Anfrage bestätige ich den
                                Platz und Termin persönlich.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                            />

                            <div className="grid gap-3 sm:grid-cols-2">
                                <input
                                    required
                                    name="name"
                                    placeholder="Dein Name"
                                    className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#eb3678]/60"
                                />

                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Deine E-Mail"
                                    className="h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#eb3678]/60"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending" || freeSeats <= 0}
                                className="course-cta flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {status === "sending" ? (
                                    <>
                                        <LoaderCircle className="size-4 animate-spin" />
                                        Anmeldung wird gesendet
                                    </>
                                ) : freeSeats <= 0 ? (
                                    "Aktuell ausgebucht"
                                ) : (
                                    <>
                                        Platz anfragen
                                        <Send className="size-4" />
                                    </>
                                )}
                            </button>

                            {message && (
                                <div
                                    className={`flex gap-2 rounded-xl border px-4 py-3 text-sm ${
                                        status === "success"
                                            ? "border-[#fb773c]/25 bg-[#fb773c]/10 text-white"
                                            : "border-[#eb3678]/25 bg-[#eb3678]/10 text-white"
                                    }`}
                                >
                                    {status === "success" && (
                                        <Check className="mt-0.5 size-4 shrink-0" />
                                    )}
                                    {message}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-4 text-xs text-white/35">
                        <span>Max. {MAX_SEATS} Teilnehmende</span>
                        <span className="flex items-center gap-1">
              Kleine Gruppe
              <ArrowRight className="size-3" />
              mehr Zeit für Fragen
            </span>
                    </div>
                </div>

                <style jsx>{`
          .course-room {
            background: linear-gradient(
              135deg,
              #180161,
              #eb3678 42%,
              #fb773c 72%,
              #180161
            );
            box-shadow:
              0 30px 90px rgba(24, 1, 97, 0.16),
              0 12px 40px rgba(235, 54, 120, 0.08);
          }

          .course-icon-active,
          .course-cta {
            background: linear-gradient(
              135deg,
              #180161,
              #eb3678 56%,
              #fb773c
            );
          }

          .course-seat:not(:has(.lucide-lock-keyhole)) {
            animation: seat-glow 2.8s ease-in-out infinite;
          }

          .course-seat:nth-child(2n) {
            animation-delay: 0.35s;
          }

          .course-seat:nth-child(3n) {
            animation-delay: 0.7s;
          }

          @keyframes seat-glow {
            0%,
            100% {
              box-shadow: inset 0 0 0 0 rgba(251, 119, 60, 0);
              transform: translateY(0);
            }

            50% {
              box-shadow: inset 0 0 22px rgba(251, 119, 60, 0.055);
              transform: translateY(-2px);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .course-seat {
              animation: none !important;
            }
          }
        `}</style>
            </div>
        </div>
    );
}
