"use client";

import {
    DragDropProvider,
    DragOverlay,
    useDraggable,
    useDroppable,
} from "@dnd-kit/react";

import {
    ArrowRight,
    BrainCircuit,
    Check,
    GripVertical,
    Plus,
    Send,
    Trash2,
    X,
} from "lucide-react";

import {
    FormEvent,
    useMemo,
    useState,
} from "react";

type Topic = {
    id: string;
    name: string;
};

type Category = {
    id: string;
    name: string;
    topics: Topic[];
};

const categories: Category[] = [
    {
        id: "programmierung",
        name: "Programmierung",
        topics: [
            { id: "variablen", name: "Variablen & Datentypen" },
            { id: "bedingungen", name: "Bedingungen" },
            { id: "schleifen", name: "Schleifen" },
            { id: "funktionen", name: "Funktionen & Methoden" },
            { id: "arrays", name: "Arrays & Listen" },
            { id: "rekursion", name: "Rekursion" },
            { id: "debugging", name: "Debugging" },
        ],
    },
    {
        id: "oop",
        name: "Objektorientierung",
        topics: [
            { id: "klassen", name: "Klassen & Objekte" },
            { id: "konstruktoren", name: "Konstruktoren" },
            { id: "kapselung", name: "Kapselung" },
            { id: "vererbung", name: "Vererbung" },
            { id: "polymorphie", name: "Polymorphie" },
            { id: "interfaces", name: "Interfaces" },
        ],
    },
    {
        id: "algorithmen",
        name: "Algorithmen",
        topics: [
            { id: "big-o", name: "Big O & Laufzeiten" },
            { id: "sortieren", name: "Sortieralgorithmen" },
            { id: "binaere-suche", name: "Binäre Suche" },
            { id: "stack-queue", name: "Stack & Queue" },
            { id: "baeume", name: "Bäume" },
            { id: "graphen", name: "Graphen" },
        ],
    },
    {
        id: "datenbanken",
        name: "Datenbanken",
        topics: [
            { id: "sql", name: "SQL Grundlagen" },
            { id: "joins", name: "JOINs" },
            { id: "er-modell", name: "ER-Modell" },
            { id: "normalisierung", name: "Normalisierung" },
            { id: "subqueries", name: "Subqueries" },
        ],
    },
    {
        id: "web",
        name: "Webentwicklung",
        topics: [
            { id: "html", name: "HTML" },
            { id: "css", name: "CSS" },
            { id: "javascript", name: "JavaScript" },
            { id: "typescript", name: "TypeScript" },
            { id: "react", name: "React" },
            { id: "http", name: "HTTP & REST" },
        ],
    },
    {
        id: "netzwerke",
        name: "Netzwerke",
        topics: [
            { id: "tcp-ip", name: "TCP / IP" },
            { id: "dns", name: "DNS" },
            { id: "subnetting", name: "Subnetting" },
            { id: "osi", name: "OSI-Modell" },
            { id: "client-server", name: "Client-Server" },
        ],
    },
];

const allTopics = categories.flatMap((category) => category.topics);

const BRAIN_ID = "learning-brain";

export function LearningRequestBuilder() {
    const [categoryId, setCategoryId] = useState(categories[0].id);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");

    const category =
        categories.find((item) => item.id === categoryId) ??
        categories[0];

    const selectedTopics = useMemo(
        () =>
            selectedIds
                .map((id) => allTopics.find((topic) => topic.id === id))
                .filter((topic): topic is Topic => Boolean(topic)),
        [selectedIds],
    );

    function addTopic(id: string) {
        if (!allTopics.some((topic) => topic.id === id)) {
            return;
        }

        setSelectedIds((current) =>
            current.includes(id) ? current : [...current, id],
        );
    }

    function removeTopic(id: string) {
        setSelectedIds((current) =>
            current.filter((topicId) => topicId !== id),
        );
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (selectedTopics.length === 0) {
            return;
        }

        setStatus("sending");

        const formData = new FormData(event.currentTarget);

        const payload = {
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            context: String(formData.get("context") ?? ""),
            description: String(formData.get("description") ?? ""),
            goal: String(formData.get("goal") ?? ""),
            topics: selectedTopics.map((topic) => topic.name),
        };

        try {
            const response = await fetch("/api/anfrage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            setStatus("success");
            setSelectedIds([]);
            event.currentTarget.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <DragDropProvider
            onDragEnd={(event) => {
                if (event.canceled) return;

                const sourceId = String(event.operation.source?.id ?? "");
                const targetId = String(event.operation.target?.id ?? "");

                if (
                    targetId === BRAIN_ID &&
                    sourceId.startsWith("topic:")
                ) {
                    addTopic(sourceId.replace("topic:", ""));
                }
            }}
        >
            <form onSubmit={handleSubmit} className="space-y-12">
                {/* Kategorien */}
                <section>
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                            01 · Wissen auswählen
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                            Was möchtest du lernen?
                        </h2>

                        <p className="mt-3 text-[var(--color-text-soft)]">
                            Zieh die Themen, die dich interessieren, direkt in
                            dein Gehirn.
                        </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const active = category.id === categoryId;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setCategoryId(category.id)}
                                    className={`
                    rounded-xl px-4 py-2.5
                    text-sm font-medium
                    transition

                    ${
                                        active
                                            ? "bg-[var(--color-primary)] text-white"
                                            : `
                          border border-[var(--color-border)]
                          bg-[var(--color-surface-strong)]
                          text-[var(--color-text-soft)]
                          hover:border-[var(--color-primary)]
                          hover:text-[var(--color-primary)]
                        `
                                    }
                  `}
                                >
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* Drag & Drop */}
                <section className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                    {/* Themen */}
                    <div>
                        <div className="mb-4 flex items-end justify-between">
                            <div>
                                <h3 className="font-semibold">
                                    {category.name}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                                    Ziehen oder mit + hinzufügen
                                </p>
                            </div>

                            <span className="text-xs text-[var(--color-text-soft)]">
                {category.topics.length} Themen
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

                    {/* Gehirn */}
                    <div className="xl:sticky xl:top-24 xl:self-start">
                        <BrainDropZone
                            topics={selectedTopics}
                            onRemove={removeTopic}
                            onClear={() => setSelectedIds([])}
                        />
                    </div>
                </section>

                {/* Weitere Angaben */}
                <section className="space-y-8 border-t border-[var(--color-border)] pt-10">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-orange)]">
                            02 · Deine Situation
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Erzähl mir etwas über dich.
                        </h2>
                    </div>

                    <div>
                        <label className="mb-3 block text-sm font-medium">
                            Wofür brauchst du Hilfe?
                        </label>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                "Schule",
                                "Ausbildung",
                                "Studium",
                                "Eigenes Interesse",
                            ].map((context) => (
                                <label
                                    key={context}
                                    className="
                    cursor-pointer rounded-xl
                    border border-[var(--color-border)]
                    bg-[var(--color-surface-strong)]
                    p-4
                    transition

                    hover:border-[var(--color-primary)]

                    has-[:checked]:border-[var(--color-primary)]
                    has-[:checked]:bg-[var(--color-surface)]
                  "
                                >
                                    <input
                                        required
                                        type="radio"
                                        name="context"
                                        value={context}
                                        className="mr-3 accent-[#EB3678]"
                                    />

                                    {context}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="mb-2 block text-sm font-medium"
                        >
                            Was fällt dir aktuell schwer?
                        </label>

                        <textarea
                            required
                            id="description"
                            name="description"
                            rows={5}
                            placeholder="Zum Beispiel: Wir behandeln gerade Vererbung in Java und ich verstehe den Unterschied zwischen abstrakten Klassen und Interfaces nicht..."
                            className="
                w-full resize-none rounded-xl
                border border-[var(--color-border)]
                bg-[var(--color-surface-strong)]
                p-4
                text-[var(--color-text)]
                outline-none
                transition

                placeholder:text-[var(--color-text-soft)]

                focus:border-[var(--color-primary)]
              "
                        />
                    </div>

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
                            placeholder="z. B. Klausur bestehen oder Java endlich wirklich verstehen"
                            className="
                h-12 w-full rounded-xl
                border border-[var(--color-border)]
                bg-[var(--color-surface-strong)]
                px-4
                text-[var(--color-text)]
                outline-none

                placeholder:text-[var(--color-text-soft)]

                focus:border-[var(--color-primary)]
              "
                        />
                    </div>
                </section>

                {/* Kontakt */}
                <section className="space-y-6 border-t border-[var(--color-border)] pt-10">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                            03 · Kontakt
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold">
                            Fast geschafft.
                        </h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium"
                            >
                                Dein Name
                            </label>

                            <input
                                required
                                id="name"
                                name="name"
                                className="
                  h-12 w-full rounded-xl
                  border border-[var(--color-border)]
                  bg-[var(--color-surface-strong)]
                  px-4
                  text-[var(--color-text)]
                  outline-none
                  focus:border-[var(--color-primary)]
                "
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
                                required
                                id="email"
                                name="email"
                                type="email"
                                className="
                  h-12 w-full rounded-xl
                  border border-[var(--color-border)]
                  bg-[var(--color-surface-strong)]
                  px-4
                  text-[var(--color-text)]
                  outline-none
                  focus:border-[var(--color-primary)]
                "
                            />
                        </div>
                    </div>

                    <div className="gradient-border rounded-2xl p-6">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-semibold">
                                    {selectedTopics.length}{" "}
                                    {selectedTopics.length === 1
                                        ? "Thema"
                                        : "Themen"}{" "}
                                    im Gehirn
                                </p>

                                <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                                    Diese Inhalte werden mit deiner Anfrage
                                    übermittelt.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={
                                    selectedTopics.length === 0 ||
                                    status === "sending"
                                }
                                className="
                  inline-flex h-12 items-center justify-center
                  gap-2 rounded-xl
                  bg-[var(--color-accent-orange)]
                  px-6
                  font-medium text-white
                  transition

                  hover:bg-[var(--color-accent-pink)]

                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                            >
                                {status === "sending" ? (
                                    "Wird gesendet..."
                                ) : (
                                    <>
                                        Anfrage senden
                                        <Send className="size-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {status === "success" && (
                        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm">
                            <Check className="size-5 text-emerald-500" />
                            Deine Anfrage wurde erfolgreich gesendet.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm">
                            Beim Senden ist etwas schiefgelaufen. Bitte
                            versuche es erneut.
                        </div>
                    )}
                </section>
            </form>

            <DragOverlay>
                {(source) => {
                    if (!source) return null;

                    const id = String(source.id).replace("topic:", "");

                    const topic = allTopics.find(
                        (topic) => topic.id === id,
                    );

                    if (!topic) return null;

                    return (
                        <div className="rounded-xl bg-[var(--color-primary)] px-4 py-3 text-sm font-medium text-white shadow-2xl">
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
    const {
        ref,
        handleRef,
        isDragging,
    } = useDraggable({
        id: `topic:${topic.id}`,
        type: "topic",
        disabled: selected,
    });

    return (
        <div
            ref={ref}
            className={`
        gradient-border
        flex items-center gap-3
        rounded-xl p-3

        ${
                isDragging
                    ? "opacity-30"
                    : "opacity-100"
            }

        ${
                selected
                    ? "opacity-50"
                    : ""
            }
      `}
        >
            <button
                ref={handleRef}
                type="button"
                disabled={selected}
                aria-label={`${topic.name} ziehen`}
                className="
          flex size-9 shrink-0 touch-none
          cursor-grab items-center justify-center
          rounded-lg
          bg-[var(--color-surface)]
          text-[var(--color-text-soft)]

          active:cursor-grabbing
        "
            >
                <GripVertical className="size-4" />
            </button>

            <span className="flex-1 text-sm font-medium">
        {topic.name}
      </span>

            <button
                type="button"
                disabled={selected}
                onClick={onAdd}
                className="
          flex size-9 shrink-0
          items-center justify-center
          rounded-lg
          bg-[var(--color-primary)]
          text-white
          transition

          hover:bg-[var(--color-accent-pink)]

          disabled:bg-[var(--color-surface)]
          disabled:text-[var(--color-text-soft)]
        "
            >
                {selected ? (
                    <Check className="size-4" />
                ) : (
                    <Plus className="size-4" />
                )}
            </button>
        </div>
    );
}

function BrainDropZone({
                           topics,
                           onRemove,
                           onClear,
                       }: {
    topics: Topic[];
    onRemove: (id: string) => void;
    onClear: () => void;
}) {
    const { ref, isDropTarget } = useDroppable({
        id: BRAIN_ID,
        accept: "topic",
    });

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold">
                        Dein Lern-Gehirn
                    </h3>

                    <p className="mt-1 text-sm text-[var(--color-text-soft)]">
                        {topics.length === 0
                            ? "Noch ziemlich leer hier."
                            : `${topics.length} Lerninhalte gesammelt`}
                    </p>
                </div>

                {topics.length > 0 && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-soft)] transition hover:text-[var(--color-accent-pink)]"
                    >
                        <Trash2 className="size-3.5" />
                        leeren
                    </button>
                )}
            </div>

            <div
                ref={ref}
                style={{
                    borderRadius:
                        "47% 53% 46% 54% / 51% 47% 53% 49%",
                }}
                className={`
          gradient-border
          relative
          flex min-h-[390px]
          items-center justify-center
          overflow-hidden
          p-10
          transition-all
          duration-300

          ${
                    isDropTarget
                        ? "scale-[1.025] ring-4 ring-[rgba(235,54,120,0.20)]"
                        : ""
                }
        `}
            >
                {/* großes Brain-Wasserzeichen */}
                <BrainCircuit
                    className={`
            pointer-events-none
            absolute
            left-1/2 top-1/2
            size-[270px]
            -translate-x-1/2
            -translate-y-1/2
            transition

            ${
                        isDropTarget
                            ? "text-[var(--color-accent-pink)] opacity-20"
                            : "text-[var(--color-primary)] opacity-[0.07]"
                    }
          `}
                    strokeWidth={1}
                />

                <div className="relative z-10 w-full">
                    {topics.length === 0 ? (
                        <div className="mx-auto max-w-xs text-center">
                            <div
                                className={`
                  mx-auto flex size-20
                  items-center justify-center
                  rounded-full

                  ${
                                    isDropTarget
                                        ? "bg-[rgba(235,54,120,0.15)] text-[var(--color-accent-pink)]"
                                        : "bg-[var(--color-surface)] text-[var(--color-primary)]"
                                }
                `}
                            >
                                <BrainCircuit className="size-10" />
                            </div>

                            <p className="mt-5 font-semibold">
                                Zieh dein Wissen hier rein.
                            </p>

                            <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                Alles, was du lernen möchtest, landet
                                hier und wird Teil deiner Anfrage.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {topics.map((topic) => (
                                <div
                                    key={topic.id}
                                    className="
                    flex items-center gap-2
                    rounded-full
                    border border-[var(--color-accent-pink)]/30
                    bg-[var(--color-surface-strong)]
                    px-3.5 py-2
                    text-sm font-medium
                    shadow-sm
                  "
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