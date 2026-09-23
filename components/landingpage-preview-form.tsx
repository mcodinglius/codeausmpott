"use client";

import { useState } from "react";
import type {
    LandingPreviewRequest,
    LandingPreviewResponse,
} from "@/types/landing-preview";
import { GeneratedLandingPreview } from "@/app/landing-page-vorschau/page";
import {AiImagePreview} from "@/components/ai-image-preview";

const fieldControlClass =
    "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-soft)] outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10";

const fieldLabelClass =
    "mb-2 block text-sm font-medium text-[var(--color-text)]";


const defaultState: LandingPreviewRequest = {
    businessName: "",
    industry: "",
    goal: "",
    keywords: [],
    style: "clean",
    colors: "",
    cta: "",
    sections: ["Hero", "Leistungen", "Vorteile", "Kontakt"],
};

export function LandingPreviewForm() {
    const [form, setForm] = useState(defaultState);
    const [keywordsInput, setKeywordsInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<LandingPreviewResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const payload: LandingPreviewRequest = {
            ...form,
            keywords: keywordsInput
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean),
        };

        setForm(payload);

        try {
            const res = await fetch("/api/landingpage-preview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const message = await res.text();
                throw new Error(message || "Vorschau konnte nicht erstellt werden.");
            }

            const data = (await res.json()) as LandingPreviewResponse;
            setResult(data);
        } catch (err) {
            console.error(err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Vorschau konnte nicht erstellt werden."
            );
        } finally {
            setLoading(false);
        }
    }

    function toggleSection(section: string) {
        setForm((prev) => ({
            ...prev,
            sections: prev.sections.includes(section)
                ? prev.sections.filter((item) => item !== section)
                : [...prev.sections, section],
        }));
    }

    const sectionOptions = [
        "Hero",
        "Leistungen",
        "Vorteile",
        "Testimonials",
        "Über uns",
        "FAQ",
        "Kontakt",
    ];

    return (
        <div className="grid gap-6 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-8">
            <form
                onSubmit={handleSubmit}
                className="h-fit rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm sm:p-6 lg:sticky lg:top-6"
            >
                <div className="space-y-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                            Projekt konfigurieren
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
                            Deine Idee
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                            Wenige Angaben reichen für eine erste Designrichtung.
                        </p>
                    </div>

                    <Field label="Unternehmensname">
                        <Input
                            value={form.businessName}
                            onChange={(value) =>
                                setForm((prev) => ({ ...prev, businessName: value }))
                            }
                            placeholder="z. B. Physio am Rhein"
                        />
                    </Field>

                    <Field label="Branche">
                        <Input
                            value={form.industry}
                            onChange={(value) =>
                                setForm((prev) => ({ ...prev, industry: value }))
                            }
                            placeholder="z. B. Physiotherapie"
                        />
                    </Field>

                    <Field label="Ziel der Seite">
                        <Input
                            value={form.goal}
                            onChange={(value) =>
                                setForm((prev) => ({ ...prev, goal: value }))
                            }
                            placeholder="z. B. Mehr Terminbuchungen"
                        />
                    </Field>

                    <Field label="Stichpunkte / Keywords">
            <textarea
                value={keywordsInput}
                onChange={(e) => setKeywordsInput(e.target.value)}
                className={`${fieldControlClass} min-h-28 resize-y`}
                placeholder="persönliche Betreuung, online buchbar, modern, schnelle Termine"
            />
                    </Field>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        <Field label="Designstil">
                            <select
                                value={form.style}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        style: e.target.value as LandingPreviewRequest["style"],
                                    }))
                                }
                                className={fieldControlClass}
                            >
                                <option value="clean">Clean</option>
                                <option value="premium">Premium</option>
                                <option value="playful">Playful</option>
                                <option value="tech">Tech</option>
                                <option value="minimal">Minimal</option>
                            </select>
                        </Field>

                        <Field label="Farben">
                            <Input
                                value={form.colors}
                                onChange={(value) =>
                                    setForm((prev) => ({ ...prev, colors: value }))
                                }
                                placeholder="Blau, Weiß"
                            />
                        </Field>
                    </div>

                    <Field label="Call-to-Action">
                        <Input
                            value={form.cta}
                            onChange={(value) =>
                                setForm((prev) => ({ ...prev, cta: value }))
                            }
                            placeholder="Kostenloses Erstgespräch"
                        />
                    </Field>

                    <Field label="Sektionen">
                        <div className="flex flex-wrap gap-2">
                            {sectionOptions.map((section) => {
                                const active = form.sections.includes(section);

                                return (
                                    <button
                                        type="button"
                                        key={section}
                                        onClick={() => toggleSection(section)}
                                        className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                                            active
                                                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                                                : "border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
                                        }`}
                                    >
                                        {section}
                                    </button>
                                );
                            })}
                        </div>
                    </Field>

                    {error && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
                    >
                        {loading ? "Vorschau wird gebaut ..." : "Vorschau erstellen"}
                    </button>

                    <p className="text-center text-[11px] leading-5 text-[var(--color-text-soft)]">
                        Die Vorschau zeigt eine mögliche Designrichtung und ist noch kein
                        finales Webdesign.
                    </p>
                </div>
            </form>

            <section className="min-w-0">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-pink)]">
                            Live Preview
                        </p>

                        <h2 className="mt-1 text-2xl font-semibold text-[var(--color-text)]">
                            So könnte dein Projekt aussehen.
                        </h2>
                    </div>

                    {result && (
                        <span className="w-fit rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-soft)]">
              Konzeptvorschau
            </span>
                    )}
                </div>

                {!result ? (
                    <div className="grid min-h-[420px] place-items-center rounded-[1.75rem] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center sm:min-h-[560px] sm:p-8">
                        <div className="max-w-sm">
                            <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[var(--color-primary)] text-xl text-white">
                                ✦
                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                                Noch keine Vorschau
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">
                                Fülle links ein paar Eckdaten aus. Danach erscheinen hier die
                                KI-Designidee und deine echte Landingpage-Ansicht.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {result.previewImageUrl && (
                            <div>
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-pink)]">
                                            KI-Design
                                        </p>
                                        <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                                            Visuelle Designrichtung
                                        </h3>
                                    </div>

                                    <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-[11px] font-semibold text-[var(--color-primary)]">
                    AI Preview
                  </span>
                                </div>

                                <AiImagePreview
                                    src={result.previewImageUrl}
                                    businessName={form.businessName}
                                />
                            </div>
                        )}

                        <div>
                            <div className="mb-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-pink)]">
                                    Live Umsetzung
                                </p>
                                <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                                    Responsive HTML-Vorschau
                                </h3>
                            </div>

                            <div className="min-w-0 overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] shadow-sm">
                                <GeneratedLandingPreview form={form} result={result} />
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

function Field({
                   label,
                   children,
               }: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block">
      <span className={fieldLabelClass}>
        {label}
      </span>

            {children}
        </label>
    );
}

function Input({
                   value,
                   onChange,
                   placeholder,
               }: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}) {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={fieldControlClass}
            placeholder={placeholder}
        />
    );
}
