import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CourseRoomBooking } from "@/components/course-room/course-room-booking";

export const metadata = {
    title: "Kurse & Nachhilfe | CodeWithMiguel",
    description:
        "Kleine Informatik-Kurse mit maximal 10 Plätzen – praxisnah, verständlich und persönlich.",
};

export default function KursePage() {
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
                                Kleine Kurse. Echte Fragen. Max. 10 Plätze.
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
                <div className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-36 size-80 rounded-full bg-[var(--color-accent-pink)]/10 blur-3xl" />

                <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm">
                            <span className="size-2 rounded-full bg-[var(--color-accent-orange)]" />
                            Kleingruppen · maximal 10 Plätze
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Such dir deinen
                            <span className="course-gradient block">Platz im Coding-Raum.</span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg">
                            Keine riesige Klasse und kein stumpfes Durchklicken. Wir arbeiten
                            in einer kleinen Gruppe, stellen Fragen, lösen Aufgaben und bauen
                            Dinge wirklich selbst.
                        </p>
                    </div>

                    <CourseRoomBooking />
                </div>
            </section>

            <style>{`
        .course-gradient {
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
      `}</style>
        </main>
    );
}
