import { NextResponse } from "next/server";
import {LandingPreviewRequest, LandingPreviewResponse} from "@/types/landing-preview";
import {buildImagePrompt} from "@/lib/landing-preview-prompt";


function normalize(items: string[] = []) {
    return items.map((item) => item.trim()).filter(Boolean);
}

export async function POST(req: Request) {
    const body = (await req.json()) as LandingPreviewRequest;

    const payload: LandingPreviewRequest = {
        ...body,
        businessName: body.businessName?.trim() || "Dein Unternehmen",
        industry: body.industry?.trim() || "Dienstleistung",
        goal: body.goal?.trim() || "Mehr qualifizierte Anfragen gewinnen",
        colors: body.colors?.trim() || "modern und reduziert",
        cta: body.cta?.trim() || "Projekt anfragen",
        keywords: normalize(body.keywords),
        sections: normalize(body.sections),
        style: body.style || "clean",
    };

    const keywords = payload.keywords.length
        ? payload.keywords
        : ["Individuell", "Modern", "Responsive"];

    const response: LandingPreviewResponse = {
        conceptTitle: `${payload.businessName} – Landingpage-Konzept`,
        eyebrow: `${payload.industry} · individuelle Website`,
        heroHeadline: `${payload.goal}. Ohne Baukasten-Look.`,
        heroSubheadline: `${payload.businessName} bekommt eine klar strukturierte, moderne Landingpage mit Fokus auf ${keywords
            .slice(0, 3)
            .join(", ")}.`,
        ctaLabel: payload.cta,
        benefits: [
            {
                title: "Klarer erster Eindruck",
                description: "Besucher verstehen sofort, was angeboten wird und warum es relevant ist.",
            },
            {
                title: "Individuelles Design",
                description: "Die Gestaltung orientiert sich am Unternehmen statt an einem fertigen Template.",
            },
            {
                title: "Mobile zuerst gedacht",
                description: "Struktur, Typografie und CTAs funktionieren auch auf kleinen Displays sauber.",
            },
        ],
        sectionPlan:
            payload.sections.length > 0
                ? payload.sections
                : ["Hero", "Leistungen", "Vorteile", "Über uns", "FAQ", "Kontakt"],
        imagePrompt: buildImagePrompt(payload),
        previewImageUrl: null,
    };

    return NextResponse.json(response);
}
