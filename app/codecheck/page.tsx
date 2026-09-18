import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {CodeCheck} from "@/components/code-check";

export default function CodeCheckPage() {
    return (
        <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
            <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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

                        <div>
                            <div className="font-bold tracking-tight text-[var(--color-text)]">CodeWithMiguel</div>
                            <div className="text-xs text-[var(--color-text-soft)]">
                                Informatik & Webprojekte
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

            <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm">
                        <span className="size-2 animate-pulse rounded-full bg-[var(--color-accent-pink)]" />
                        CodeCheck
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Wo hängt&apos;s gerade?
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-soft)] sm:text-lg">
                        Wähl aus, was dich gerade blockiert. Der CodeCheck sortiert dein
                        Problem grob ein und bringt dich direkt zum passenden nächsten
                        Schritt.
                    </p>
                </div>

                <CodeCheck />
            </section>
        </main>
    );
}
