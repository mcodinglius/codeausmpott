type AiImagePreviewProps = {
    src: string | null | undefined;
    businessName?: string;
};

export function AiImagePreview({
                                   src,
                                   businessName = "Webprojekt",
                               }: AiImagePreviewProps) {
    if (!src) return null;

    return (
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-yellow-400" />
                <span className="size-2.5 rounded-full bg-green-400" />

                <span className="ml-2 text-xs text-[var(--color-text-soft)]">
          KI-Designvorschau
        </span>
            </div>

            <img
                src={src}
                alt={`KI-generierte Landingpage-Vorschau für ${businessName}`}
                className="h-auto w-full object-contain"
            />

            <p className="border-t border-[var(--color-border)] px-4 py-3 text-xs leading-5 text-[var(--color-text-soft)]">
                Konzeptvorschau – Design, Inhalte und Details werden bei der tatsächlichen
                Umsetzung individuell entwickelt.
            </p>
        </div>
    );
}