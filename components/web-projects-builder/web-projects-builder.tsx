"use client";

import {
    DragDropProvider,
    DragOverlay,
    useDraggable,
    useDroppable,
} from "@dnd-kit/react";
import {
    BrainCircuit,
    Check,
    GripVertical,
    Plus,
    Send,
    Trash2,
    X,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type Topic = {
    id: string;
    name: string;
};

type Category = {
    id: string;
    name: string;
    topics: Topic[];
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const categories: Category[] = [
    {
        id: "styling",
        name: "CSS & UI",
        topics: [
            { id: "custom-css", name: "Custom CSS" },
            { id: "responsive", name: "Responsive / Mobile" },
            { id: "tailwind", name: "Tailwind CSS" },
            { id: "layout", name: "Flexbox / Grid / Layout" },
            { id: "animationen", name: "Animationen" },
            { id: "design-fixes", name: "Design & UI Fixes" },
        ],
    },
    {
        id: "typescript",
        name: "JS & TypeScript",
        topics: [
            { id: "javascript", name: "JavaScript" },
            { id: "custom-ts", name: "Custom TypeScript" },
            { id: "react", name: "React" },
            { id: "nextjs", name: "Next.js" },
            { id: "forms", name: "Formulare & State" },
            { id: "build-errors", name: "Build- & Type-Fehler" },
        ],
    },
    {
        id: "domain-hosting",
        name: "Domain & Hosting",
        topics: [
            { id: "domain", name: "Domain verbinden" },
            { id: "dns", name: "DNS konfigurieren" },
            { id: "vercel", name: "Vercel Deployment" },
            { id: "ssl", name: "SSL / HTTPS" },
            { id: "env", name: "Environment Variables" },
            { id: "deployment", name: "Deployment-Probleme" },
        ],
    },
    {
        id: "shop-builder",
        name: "Shop & Builder",
        topics: [
            { id: "shopify", name: "Shopify" },
            { id: "woocommerce", name: "WooCommerce" },
            { id: "shop-builder", name: "Shop Builder" },
            { id: "webflow", name: "Webflow" },
            { id: "framer", name: "Framer" },
            { id: "page-builder", name: "Page Builder anpassen" },
        ],
    },
    {
        id: "backend",
        name: "APIs & Backend",
        topics: [
            { id: "api", name: "REST / API Integration" },
            { id: "auth", name: "Login & Auth" },
            { id: "mail", name: "Formulare & E-Mail" },
            { id: "database", name: "Datenbank / Supabase" },
            { id: "webhooks", name: "Webhooks" },
            { id: "server", name: "Server / API Routes" },
        ],
    },
    {
        id: "bugs",
        name: "Bugs & Optimierung",
        topics: [
            { id: "debugging", name: "Bugfixing / Debugging" },
            { id: "performance", name: "Performance" },
            { id: "seo", name: "SEO & Metadata" },
            { id: "browser", name: "Browser-Probleme" },
            { id: "git", name: "Git / GitHub" },
            { id: "unknown", name: "Ich weiß nicht, wo der Fehler liegt" },
        ],
    },
];

const allTopics = categories.flatMap((category) => category.topics);
const PROJECT_BRAIN_ID = "web-project-brain";

export function WebProjectRequestBuilder() {
    const [categoryId, setCategoryId] = useState(categories[0].id);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [message, setMessage] = useState("");

    const category =
        categories.find((item) => item.id === categoryId) ?? categories[0];

    const selectedTopics = useMemo(
        () =>
            selectedIds
                .map((id) => allTopics.find((topic) => topic.id === id))
                .filter((topic): topic is Topic => Boolean(topic)),
        [selectedIds],
    );

    function addTopic(id: string) {
        if (!allTopics.some((topic) => topic.id === id)) return;

        setSelectedIds((current) =>
            current.includes(id) ? current : [...current, id],
        );
        setStatus("idle");
        setMessage("");
    }

    function removeTopic(id: string) {
        setSelectedIds((current) => current.filter((topicId) => topicId !== id));
        setStatus("idle");
        setMessage("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (selectedTopics.length === 0) {
            setStatus("error");
            setMessage("Zieh zuerst mindestens ein Problem in dein Projekt-Gehirn.");
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") ?? "").trim(),
            email: String(formData.get("email") ?? "").trim(),
            context: `Webprojekt · ${String(formData.get("context") ?? "").trim()}`,
            description: String(formData.get("description") ?? "").trim(),
            goal: String(formData.get("goal") ?? "").trim(),
            topics: selectedTopics.map((topic) => topic.name),
        };

        setStatus("sending");
        setMessage("");

        try {
            const response = await fetch("/api/webprojekt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || !result?.success || !result?.id) {
                throw new Error(
                    result?.error ??
                        "Die Projektanfrage wurde nicht als E-Mail bestätigt.",
                );
            }

            setSelectedIds([]);
            form.reset();
            setStatus("success");
            setMessage("Deine Projektanfrage wurde erfolgreich gesendet.");
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Die Projektanfrage konnte nicht gesendet werden.",
            );
        }
    }

    return (
        <DragDropProvider
            onDragEnd={(event) => {
                if (event.canceled) return;

                const source = event.operation.source;
                const target = event.operation.target;

                if (!source || !target) return;
                if (String(target.id) !== PROJECT_BRAIN_ID) return;

                const sourceId = String(source.id);

                if (sourceId.startsWith("web-topic:")) {
                    addTopic(sourceId.replace("web-topic:", ""));
                }
            }}
        >
            <form onSubmit={handleSubmit} className="space-y-14">
                {/* 01 Probleme */}
                <section>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                        01 · Problem auswählen
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                        Wo hängt dein Webprojekt?
                    </h2>

                    <p className="mt-3 max-w-3xl leading-7 text-[var(--color-text-soft)]">
                        Wähle einen Bereich und zieh alles, wobei du Unterstützung brauchst,
                        in dein Projekt-Gehirn. Du musst die technische Ursache noch nicht
                        kennen — genau dabei kann ich helfen.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                        {categories.map((item) => {
                            const active = item.id === categoryId;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    aria-pressed={active}
                                    onClick={() => setCategoryId(item.id)}
                                    className={
                                        active
                                            ? "rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-white transition"
                                            : "rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2.5 text-sm font-medium text-[var(--color-text-soft)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                                    }
                                >
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Drag & Drop */}
                <section className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)]">
                    <div className="min-w-0">
                        <div className="mb-4 flex items-end justify-between gap-4">
                            <div>
                                <h3 className="font-semibold text-[var(--color-text)]">
                                    {category.name}
                                </h3>
                                <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                                    Ziehen oder mit + hinzufügen
                                </p>
                            </div>

                            <span className="shrink-0 text-xs text-[var(--color-text-soft)]">
                {category.topics.length} Probleme
              </span>
                        </div>

                        <div className="grid gap-3">
                            {category.topics.map((topic) => (
                                <DraggableTopic
                                    key={topic.id}
                                    topic={topic}
                                    selected={selectedIds.includes(topic.id)}
                                    onAdd={() => addTopic(topic.id)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
                        <ProjectBrainDropZone
                            topics={selectedTopics}
                            onRemove={removeTopic}
                            onClear={() => {
                                setSelectedIds([]);
                                setStatus("idle");
                                setMessage("");
                            }}
                        />
                    </div>
                </section>

                {/* 02 Projekt */}
                <section className="space-y-8 border-t border-[var(--color-border)] pt-10">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-orange)]">
                            02 · Dein Projekt
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                            Zeig mir, wo du gerade festhängst.
                        </h2>
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-medium">
                            Um welche Art Projekt geht es?
                        </label>

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {["Bestehende Website", "Neues Projekt", "Shop", "Landingpage / Portfolio"].map(
                                (context) => (
                                    <label
                                        key={context}
                                        className="gradient-border cursor-pointer rounded-xl p-4 transition has-[:checked]:shadow-lg"
                                    >
                                        <input
                                            required
                                            type="radio"
                                            name="context"
                                            value={context}
                                            className="mr-3 accent-[#EB3678]"
                                        />
                                        <span className="text-sm font-medium">{context}</span>
                                    </label>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-medium"
                            >
                                Was funktioniert aktuell nicht?
                            </label>

                            <textarea
                                required
                                id="description"
                                name="description"
                                rows={7}
                                minLength={10}
                                placeholder="Zum Beispiel: Meine Domain zeigt noch auf den alten Anbieter, auf Mobile bricht das Layout auseinander oder mein TypeScript-Code wirft beim Build einen Fehler..."
                                className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-4 leading-7 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-soft)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(24,1,97,0.08)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="goal" className="mb-2 block text-sm font-medium">
                                Was soll am Ende funktionieren?
                            </label>

                            <textarea
                                id="goal"
                                name="goal"
                                rows={7}
                                placeholder="z. B. Domain sauber verbinden, Checkout zum Laufen bringen, eigenes CSS umsetzen oder den Fehler gemeinsam finden und verstehen"
                                className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-4 leading-7 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-soft)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(24,1,97,0.08)]"
                            />
                        </div>
                    </div>
                </section>

                {/* 03 Kontakt */}
                <section className="space-y-6 border-t border-[var(--color-border)] pt-10">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                            03 · Kontakt
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                            Schick mir dein Problem.
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                Dein Name
                            </label>
                            <input
                                required
                                id="name"
                                name="name"
                                minLength={2}
                                autoComplete="name"
                                className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(24,1,97,0.08)]"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                E-Mail
                            </label>
                            <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 text-[var(--color-text)] outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[rgba(24,1,97,0.08)]"
                            />
                        </div>
                    </div>

                    <div className="gradient-border rounded-2xl p-6">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-semibold text-[var(--color-text)]">
                                    {selectedTopics.length}{" "}
                                    {selectedTopics.length === 1 ? "Problem" : "Probleme"} im Projekt-Gehirn
                                </p>
                                <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                                    Diese Punkte werden zusammen mit deiner Beschreibung übermittelt.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={selectedTopics.length === 0 || status === "sending"}
                                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-orange)] px-6 font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-pink)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-40"
                            >
                                {status === "sending" ? (
                                    "Wird gesendet..."
                                ) : (
                                    <>
                                        Projektanfrage senden
                                        <Send className="size-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {message && (
                        <div
                            role="status"
                            aria-live="polite"
                            className={
                                status === "success"
                                    ? "flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm"
                                    : "rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm"
                            }
                        >
                            {status === "success" && (
                                <Check className="size-5 shrink-0 text-emerald-500" />
                            )}
                            {message}
                        </div>
                    )}
                </section>
            </form>

            <DragOverlay dropAnimation={null}>
                {(source) => {
                    if (!source) return null;

                    const topicId = String(source.id).replace("web-topic:", "");
                    const topic = allTopics.find((item) => item.id === topicId);

                    if (!topic) return null;

                    return (
                        <div className="rounded-xl border border-white/10 bg-[var(--color-primary)] px-4 py-3 text-sm font-medium text-white shadow-2xl">
                            {topic.name}
                        </div>
                    );
                }}
            </DragOverlay>
        </DragDropProvider>
    );
}

function DraggableTopic({
                            topic,
                            selected,
                            onAdd,
                        }: {
    topic: Topic;
    selected: boolean;
    onAdd: () => void;
}) {
    const { ref, handleRef, isDragging } = useDraggable({
        id: `web-topic:${topic.id}`,
        type: "web-topic",
        disabled: selected,
    });

    return (
        <div
            ref={ref}
            className={`gradient-border flex items-center gap-3 rounded-xl p-3 ${
    isDragging ? "opacity-30" : ""
} ${selected ? "opacity-50" : ""}`}
        >
            <button
                ref={handleRef}
                type="button"
                disabled={selected}
                aria-label={`${topic.name} ziehen`}
                className="flex size-10 shrink-0 touch-none cursor-grab items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-text-soft)] transition hover:text-[var(--color-primary)] active:cursor-grabbing disabled:cursor-default"
            >
                <GripVertical className="size-4" />
            </button>

            <span className="min-w-0 flex-1 text-sm font-medium text-[var(--color-text)]">
        {topic.name}
      </span>

            <button
                type="button"
                disabled={selected}
                onClick={onAdd}
                aria-label={`${topic.name} hinzufügen`}
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white transition hover:bg-[var(--color-accent-pink)] disabled:bg-[var(--color-surface)] disabled:text-[var(--color-text-soft)]"
            >
                {selected ? <Check className="size-4" /> : <Plus className="size-4" />}
            </button>
        </div>
    );
}

function ProjectBrainDropZone({
                                  topics,
                                  onRemove,
                                  onClear,
                              }: {
    topics: Topic[];
    onRemove: (id: string) => void;
    onClear: () => void;
}) {
    const { ref, isDropTarget } = useDroppable({
        id: PROJECT_BRAIN_ID,
        accept: "web-topic",
    });

    return (
        <div>
            <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                    <h3 className="font-semibold text-[var(--color-text)]">
                        Dein Projekt-Gehirn
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                        {topics.length === 0
                            ? "Was macht gerade Probleme?"
                            : `${topics.length} ${topics.length === 1 ? "Punkt" : "Punkte"} gesammelt`}
                    </p>
                </div>

                {topics.length > 0 && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="flex shrink-0 items-center gap-1.5 text-xs text-[var(--color-text-soft)] transition hover:text-[var(--color-accent-pink)]"
                    >
                        <Trash2 className="size-3.5" />
                        leeren
                    </button>
                )}
            </div>

            <div
                ref={ref}
                style={{
                    borderRadius: "47% 53% 46% 54% / 51% 47% 53% 49%",
                }}
                className={`gradient-border relative flex min-h-[420px] items-center justify-center overflow-hidden p-8 transition-all duration-300 sm:p-10 ${
    isDropTarget
        ? "scale-[1.02] shadow-[0_0_60px_rgba(235,54,120,0.18)] ring-4 ring-[rgba(235,54,120,0.18)]"
        : ""
}`}
            >
                <div
                    className={`pointer-events-none absolute inset-10 rounded-[inherit] blur-3xl transition-opacity duration-300 ${
    isDropTarget
        ? "bg-[rgba(235,54,120,0.16)] opacity-100"
        : "opacity-0"
}`}
                />

                <BrainCircuit
                    className={`pointer-events-none absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
    isDropTarget
        ? "scale-110 text-[var(--color-accent-pink)] opacity-20"
        : "text-[var(--color-primary)] opacity-[0.08]"
}`}
                    strokeWidth={1}
                />

                <div className="relative z-10 w-full">
                    {topics.length === 0 ? (
                        <div className="mx-auto max-w-xs text-center">
                            <div
                                className={`mx-auto flex size-20 items-center justify-center rounded-full transition ${
    isDropTarget
        ? "scale-110 bg-[rgba(235,54,120,0.15)] text-[var(--color-accent-pink)]"
        : "bg-[var(--color-surface)] text-[var(--color-primary)]"
}`}
                            >
                                <BrainCircuit className="size-10" />
                            </div>

                            <p className="mt-5 font-semibold text-[var(--color-text)]">
                                Zieh dein Problem hier rein.
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                CSS, Domain, Shop, TypeScript oder einfach „irgendwas funktioniert
                                nicht“ — wir grenzen es gemeinsam ein.
                            </p>
                        </div>
                    ) : (
                        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2.5">
                            {topics.map((topic) => (
                                <div
                                    key={topic.id}
                                    className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3.5 py-2 text-sm font-medium text-[var(--color-text)] shadow-sm"
                                >
                                    <span>{topic.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => onRemove(topic.id)}
                                        aria-label={`${topic.name} entfernen`}
                                        className="text-[var(--color-text-soft)] transition hover:text-[var(--color-accent-pink)]"
                                    >
                                        <X className="size-3.5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {isDropTarget && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-8 text-center text-sm font-semibold text-[var(--color-accent-pink)]">
                        Hier loslassen
                    </div>
                )}
            </div>
        </div>
    );
}
