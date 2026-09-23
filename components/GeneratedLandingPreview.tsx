"use client";

import type {
    LandingPreviewRequest,
    LandingPreviewResponse,
} from "@/types/landing-preview";

type Props = {
    form: LandingPreviewRequest;
    result: LandingPreviewResponse;
};

export function GeneratedLandingPreview({ form, result }: Props) {
    switch (form.style) {
        case "premium":
            return <PremiumPreview form={form} result={result} />;
        case "playful":
            return <PlayfulPreview form={form} result={result} />;
        case "tech":
            return <TechPreview form={form} result={result} />;
        case "minimal":
            return <MinimalPreview form={form} result={result} />;
        case "clean":
        default:
            return <CleanPreview form={form} result={result} />;
    }
}

function CleanPreview({ form, result }: Props) {
    return (
        <div className="bg-[#f8fafc] text-[#0f172a]">
            <PreviewBrowserBar name={form.businessName} />

            <header className="flex items-center justify-between border-b border-[#e2e8f0] bg-white px-5 py-4 sm:px-8">
                <div className="font-semibold tracking-tight">
                    {form.businessName || "Dein Unternehmen"}
                </div>

                <button className="rounded-xl bg-[#0f172a] px-4 py-2 text-xs font-semibold text-white">
                    {result.ctaLabel}
                </button>
            </header>

            <section className="grid gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                        {result.eyebrow}
                    </p>

                    <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                        {result.heroHeadline}
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748b]">
                        {result.heroSubheadline}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <button className="rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white">
                            {result.ctaLabel}
                        </button>

                        <button className="rounded-xl border border-[#cbd5e1] bg-white px-5 py-3 text-sm font-semibold">
                            Mehr erfahren
                        </button>
                    </div>
                </div>

                <div className="rounded-3xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
                    <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,#dbeafe,#eff6ff_45%,#f8fafc)]" />

                    <div className="mt-4 grid gap-3">
                        {result.benefits.slice(0, 3).map((benefit, index) => (
                            <div
                                key={`${benefit.title}-${index}`}
                                className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3"
                            >
                                <div className="text-sm font-semibold">{benefit.title}</div>
                                <div className="mt-1 text-xs leading-5 text-[#64748b]">
                                    {benefit.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-[#e2e8f0] bg-white px-5 py-8 sm:px-8 lg:px-12">
                <div className="grid gap-5 md:grid-cols-3">
                    {result.benefits.slice(0, 3).map((benefit, index) => (
                        <div
                            key={`${benefit.title}-clean-${index}`}
                            className="border-l-2 border-[#2563eb] pl-4"
                        >
                            <div className="text-xs text-[#94a3b8]">0{index + 1}</div>

                            <div className="mt-1 font-semibold">{benefit.title}</div>

                            <p className="mt-2 text-sm leading-6 text-[#64748b]">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <SectionPlan
                sections={result.sectionPlan}
                className="border-t border-[#e2e8f0] bg-[#f8fafc]"
            />
        </div>
    );
}

function PremiumPreview({ form, result }: Props) {
    return (
        <div className="overflow-hidden bg-[#11100d] text-[#f5efe3]">
            <PreviewBrowserBar name={form.businessName} dark />

            <header className="flex items-center justify-between border-b border-[#2e2a24] px-5 py-5 sm:px-8 lg:px-12">
        <span className="font-serif text-lg italic">
          {form.businessName || "Maison Studio"}
        </span>

                <span className="text-[10px] uppercase tracking-[0.28em] text-[#b9a98b]">
          {form.industry || "Selected Service"}
        </span>
            </header>

            <section className="relative px-5 pb-12 pt-10 text-center sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
                <div className="absolute left-1/2 top-12 h-60 w-60 -translate-x-1/2 rounded-full bg-[#8f6f3f]/20 blur-3xl" />

                <div className="relative mx-auto max-w-4xl">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[#c6b18b]">
                        {result.eyebrow}
                    </p>

                    <h2 className="mt-5 font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                        {result.heroHeadline}
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#bdb6aa] sm:text-base">
                        {result.heroSubheadline}
                    </p>

                    <button className="mt-8 border border-[#8f7d5f] bg-[#d8c39b] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#11100d]">
                        {result.ctaLabel}
                    </button>
                </div>
            </section>

            <section className="grid border-y border-[#2e2a24] md:grid-cols-3">
                {result.benefits.slice(0, 3).map((benefit, index) => (
                    <div
                        key={`${benefit.title}-premium-${index}`}
                        className="border-[#2e2a24] px-6 py-8 md:border-r last:md:border-r-0 lg:px-8"
                    >
                        <div className="font-serif text-3xl text-[#7f6d52]">
                            0{index + 1}
                        </div>

                        <div className="mt-8 font-serif text-xl">{benefit.title}</div>

                        <p className="mt-3 text-sm leading-6 text-[#8f887e]">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </section>

            <section className="px-5 py-10 sm:px-8 lg:px-12">
                <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
                    <div className="text-xs uppercase tracking-[0.24em] text-[#8f7d5f]">
                        Seitenstruktur
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 font-serif text-lg text-[#d9d0c3]">
                        {result.sectionPlan.map((section, index) => (
                            <span key={`${section}-premium-${index}`}>{section}</span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function PlayfulPreview({ form, result }: Props) {
    return (
        <div className="overflow-hidden bg-[#fff8f1] text-[#332419]">
            <PreviewBrowserBar name={form.businessName} />

            <header className="relative px-5 py-5 sm:px-8">
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#ff8aa5]/35 blur-2xl" />
                <div className="absolute left-1/3 top-0 size-32 rounded-full bg-[#ffd166]/35 blur-2xl" />

                <div className="relative flex items-center justify-between">
                    <div className="rounded-full bg-[#332419] px-4 py-2 text-sm font-black text-white">
                        {form.businessName || "Deine Marke"}
                    </div>

                    <div className="-rotate-2 rounded-full bg-[#a7f3d0] px-3 py-2 text-xs font-bold">
                        {form.industry || "Deine Branche"}
                    </div>
                </div>
            </header>

            <section className="relative grid gap-7 px-5 pb-10 pt-7 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12 lg:pb-14">
                <div>
                    <div className="inline-block rotate-[-2deg] rounded-xl bg-[#ffd166] px-3 py-2 text-xs font-black uppercase tracking-wide">
                        {result.eyebrow}
                    </div>

                    <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl">
                        {result.heroHeadline}
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#745f50]">
                        {result.heroSubheadline}
                    </p>

                    <button className="mt-7 rotate-[1deg] rounded-2xl bg-[#ff5d8f] px-6 py-3 text-sm font-black text-white shadow-[5px_5px_0_#332419] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                        {result.ctaLabel}
                    </button>
                </div>

                <div className="relative min-h-[320px]">
                    <div className="absolute left-2 top-8 w-[78%] rotate-[-4deg] rounded-[2rem] border-2 border-[#332419] bg-[#a7f3d0] p-6 shadow-[8px_8px_0_#332419]">
                        <div className="text-xs font-bold uppercase">Highlight</div>

                        <div className="mt-10 text-2xl font-black">
                            {result.benefits[0]?.title || "Individuell"}
                        </div>

                        <p className="mt-2 text-sm leading-6 text-[#4f433a]">
                            {result.benefits[0]?.description ||
                                "Auf dein Projekt zugeschnitten."}
                        </p>
                    </div>

                    <div className="absolute bottom-2 right-2 w-[68%] rotate-[5deg] rounded-[2rem] border-2 border-[#332419] bg-[#ffd166] p-6 shadow-[8px_8px_0_#332419]">
                        <div className="text-xs font-bold uppercase">Plus</div>

                        <div className="mt-8 text-xl font-black">
                            {result.benefits[1]?.title || "Persönlich"}
                        </div>

                        <p className="mt-2 text-sm leading-6 text-[#4f433a]">
                            {result.benefits[1]?.description ||
                                "Direkt und verständlich."}
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid gap-3 px-5 pb-10 sm:grid-cols-3 sm:px-8 lg:px-12">
                {result.benefits.slice(0, 3).map((benefit, index) => (
                    <div
                        key={`${benefit.title}-playful-${index}`}
                        className={`rounded-2xl border-2 border-[#332419] p-5 ${
                            index === 0
                                ? "bg-[#ffd6e0]"
                                : index === 1
                                    ? "bg-[#d9f99d]"
                                    : "bg-[#bfdbfe]"
                        }`}
                    >
                        <div className="text-xs font-black">0{index + 1}</div>

                        <div className="mt-4 font-black">{benefit.title}</div>

                        <p className="mt-2 text-xs leading-5 text-[#5d4c42]">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </section>

            <SectionPlan
                sections={result.sectionPlan}
                className="border-t-2 border-[#332419] bg-[#fff0dc]"
            />
        </div>
    );
}

function TechPreview({ form, result }: Props) {
    return (
        <div className="bg-[#050914] font-mono text-[#d7e3ff]">
            <PreviewBrowserBar name={form.businessName} dark />

            <header className="flex items-center justify-between border-b border-[#172036] px-5 py-4 sm:px-8 lg:px-10">
                <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#45ffb0]" />

                    <span className="text-xs text-[#7e8aa8]">
            {form.businessName || "project.dev"}
          </span>
                </div>

                <span className="text-[10px] text-[#45ffb0]">ONLINE</span>
            </header>

            <section className="grid gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-14">
                <div>
                    <div className="text-xs text-[#45ffb0]">
                        {"// "}
                        {result.eyebrow}
                    </div>

                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                        {result.heroHeadline}
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8b98b5]">
                        {result.heroSubheadline}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <button className="border border-[#45ffb0] bg-[#45ffb0] px-5 py-3 text-xs font-bold text-[#050914]">
                            {result.ctaLabel}
                        </button>

                        <button className="border border-[#26324c] px-5 py-3 text-xs text-[#9fb0d3]">
                            VIEW_STACK
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#1c2944] bg-[#091020]">
                    <div className="border-b border-[#1c2944] px-4 py-3 text-[10px] text-[#596783]">
                        landing.config.ts
                    </div>

                    <div className="space-y-2 p-5 text-xs leading-6 sm:text-sm">
                        <div>
                            <span className="text-[#d071ff]">const</span>{" "}
                            <span className="text-[#74b9ff]">project</span> = {"{"}
                        </div>

                        <div className="pl-5 text-[#8090af]">
                            industry:{" "}
                            <span className="text-[#ffbc70]">
                "{form.industry || "web"}"
              </span>
                            ,
                        </div>

                        <div className="pl-5 text-[#8090af]">
                            style: <span className="text-[#ffbc70]">"{form.style}"</span>,
                        </div>

                        <div className="pl-5 text-[#8090af]">
                            responsive: <span className="text-[#45ffb0]">true</span>,
                        </div>

                        <div className="pl-5 text-[#8090af]">
                            conversion: <span className="text-[#45ffb0]">enabled</span>,
                        </div>

                        <div>{"}"}</div>
                    </div>
                </div>
            </section>

            <section className="grid border-t border-[#172036] sm:grid-cols-3">
                {result.benefits.slice(0, 3).map((benefit, index) => (
                    <div
                        key={`${benefit.title}-tech-${index}`}
                        className="border-b border-[#172036] px-5 py-6 sm:border-b-0 sm:border-r last:sm:border-r-0"
                    >
                        <div className="text-[10px] text-[#45ffb0]">
                            MODULE_0{index + 1}
                        </div>

                        <div className="mt-3 text-sm text-white">{benefit.title}</div>

                        <p className="mt-2 text-xs leading-5 text-[#8b98b5]">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </section>

            <SectionPlan
                sections={result.sectionPlan}
                className="border-t border-[#172036] bg-[#070d19]"
                dark
            />
        </div>
    );
}

function MinimalPreview({ form, result }: Props) {
    return (
        <div className="bg-[#fbfbf8] text-[#191919]">
            <PreviewBrowserBar name={form.businessName} />

            <header className="flex items-center justify-between border-b border-[#d8d8d1] px-5 py-5 sm:px-8 lg:px-12">
        <span className="text-sm font-medium">
          {form.businessName || "Studio"}
        </span>

                <span className="text-xs text-[#77776e]">
          {form.industry || "Service"}
        </span>
            </header>

            <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                <div className="max-w-5xl">
                    <div className="text-xs uppercase tracking-[0.16em] text-[#77776e]">
                        {result.eyebrow}
                    </div>

                    <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                        {result.heroHeadline}
                    </h2>

                    <div className="mt-10 grid gap-6 border-t border-[#d8d8d1] pt-6 md:grid-cols-[1fr_1fr]">
                        <p className="max-w-xl text-sm leading-7 text-[#66665f]">
                            {result.heroSubheadline}
                        </p>

                        <div className="md:text-right">
                            <button className="border-b border-black pb-1 text-sm font-medium">
                                {result.ctaLabel} →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-[#d8d8d1] px-5 sm:px-8 lg:px-12">
                {result.benefits.slice(0, 3).map((benefit, index) => (
                    <div
                        key={`${benefit.title}-minimal-${index}`}
                        className="grid gap-3 border-b border-[#d8d8d1] py-6 sm:grid-cols-[80px_1fr]"
                    >
                        <div className="text-xs text-[#929289]">0{index + 1}</div>

                        <div>
                            <div className="text-xl tracking-[-0.02em]">
                                {benefit.title}
                            </div>

                            <p className="mt-2 text-sm leading-6 text-[#77776e]">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <SectionPlan
                sections={result.sectionPlan}
                className="border-t border-[#d8d8d1] bg-[#f5f5f1]"
            />
        </div>
    );
}

function PreviewBrowserBar({
                               name,
                               dark = false,
                           }: {
    name?: string;
    dark?: boolean;
}) {
    const hostname =
        name?.trim().toLowerCase().replace(/[^a-z0-9äöüß]+/gi, "-") ||
        "dein-projekt";

    return (
        <div
            className={`flex h-10 items-center gap-2 border-b px-4 ${
                dark
                    ? "border-white/10 bg-[#0a0c10]"
                    : "border-black/10 bg-[#ececec]"
            }`}
        >
            <span className="size-2.5 rounded-full bg-[#ff6258]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#28c840]" />

            <div
                className={`ml-3 h-5 flex-1 rounded-md px-3 text-[10px] leading-5 ${
                    dark
                        ? "bg-white/5 text-white/35"
                        : "bg-white/75 text-black/40"
                }`}
            >
                {hostname}.de
            </div>
        </div>
    );
}

function SectionPlan({
                         sections,
                         className,
                         dark = false,
                     }: {
    sections: string[];
    className?: string;
    dark?: boolean;
}) {
    return (
        <section className={`px-5 py-8 sm:px-8 lg:px-12 ${className ?? ""}`}>
            <div className="flex flex-wrap gap-2">
                {sections.map((section, index) => (
                    <span
                        key={`${section}-section-${index}`}
                        className={`rounded-full border px-3 py-1.5 text-xs ${
                            dark
                                ? "border-white/10 bg-white/5 text-white/55"
                                : "border-black/10 bg-white/60 text-black/55"
                        }`}
                    >
            {section}
          </span>
                ))}
            </div>
        </section>
    );
}
