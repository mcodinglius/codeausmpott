export type LandingPreviewRequest = {
    businessName: string;
    industry: string;
    goal: string;
    keywords: string[];
    style: "clean" | "premium" | "playful" | "tech" | "minimal";
    colors: string;
    cta: string;
    sections: string[];
};

export type LandingPreviewResponse = {
    conceptTitle: string;
    eyebrow: string;
    heroHeadline: string;
    heroSubheadline: string;
    ctaLabel: string;
    benefits: Array<{
        title: string;
        description: string;
    }>;
    sectionPlan: string[];
    imagePrompt: string;
    previewImageUrl?: string | null;
};
