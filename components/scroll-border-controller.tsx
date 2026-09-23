"use client";

import { useEffect } from "react";

export function ScrollBorderController() {
    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");

        let ticking = false;

        function updateBorders() {
            ticking = false;

            if (!media.matches) {
                return;
            }

            const cards =
                document.querySelectorAll<HTMLElement>(
                    "[data-scroll-border]",
                );

            const viewportHeight = window.innerHeight;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();

                const center =
                    rect.top + rect.height / 2;

                /*
                 * Unten im Viewport = 0
                 * Oben im Viewport = 1
                 */
                const start = viewportHeight * 0.9;
                const end = viewportHeight * 0.1;

                let progress =
                    (start - center) /
                    (start - end);

                progress = Math.max(
                    0,
                    Math.min(1, progress),
                );

                /*
                 * Etwas mehr als eine komplette Runde
                 * wirkt beim Scrollen schöner.
                 */
                const angle =
                    progress * 420;

                card.style.setProperty(
                    "--border-angle",
                    `${angle}deg`,
                );
            });
        }

        function handleScroll() {
            if (ticking) return;

            ticking = true;

            requestAnimationFrame(
                updateBorders,
            );
        }

        updateBorders();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true },
        );

        window.addEventListener(
            "resize",
            updateBorders,
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll,
            );

            window.removeEventListener(
                "resize",
                updateBorders,
            );
        };
    }, []);

    return null;
}