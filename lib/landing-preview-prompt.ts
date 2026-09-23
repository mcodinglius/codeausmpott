import type { LandingPreviewRequest } from "@/types/landing-preview";

export function buildImagePrompt(input: LandingPreviewRequest) {
    const keywords = input.keywords.length
        ? input.keywords.join(", ")
        : "individuell, modern, responsive";

    const sections = input.sections.length
        ? input.sections.join(", ")
        : "Hero, Leistungen, Vorteile, Über uns, Kontakt";

    return [
        "Create a high-end professional landing page website mockup.",
        `Business name: ${input.businessName || "Dein Unternehmen"}.`,
        `Industry: ${input.industry || "Dienstleistung"}.`,
        `Primary goal: ${input.goal || "Mehr qualifizierte Anfragen gewinnen"}.`,
        `Visual style: ${input.style || "clean"}.`,
        `Preferred color direction: ${input.colors || "modern, reduced and professional"}.`,
        `Primary call to action: ${input.cta || "Projekt anfragen"}.`,
        `Important keywords and selling points: ${keywords}.`,
        `Page sections: ${sections}.`,
        "Design the page as a bespoke custom-developed website, not like a generic website-builder template.",
        "Use strong visual hierarchy, premium typography, generous but controlled spacing, clear CTA buttons and polished UI components.",
        "The layout should feel realistic, modern and conversion-focused, with a strong hero section, service or benefit cards and a final CTA section.",
        "The design must clearly be conceived for responsive implementation on desktop, tablet and mobile.",
        "Show the website as a clean full-page UI concept suitable for presenting to a real client.",
        "Avoid fake browser chrome, device mockups, watermarks and unnecessary decorative text.",
        "Use believable concise website copy and keep text readable where possible.",
    ].join(" ");
}