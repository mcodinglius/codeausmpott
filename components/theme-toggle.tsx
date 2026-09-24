"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [dark, setDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const shouldUseDark = savedTheme ? savedTheme === "dark" : true;

        setDark(shouldUseDark);

        document.documentElement.classList.toggle(
            "dark",
            shouldUseDark
        );

        setMounted(true);
    }, []);

    function toggleTheme() {
        const nextDark = !dark;

        setDark(nextDark);

        document.documentElement.classList.toggle(
            "dark",
            nextDark
        );

        localStorage.setItem(
            "theme",
            nextDark ? "dark" : "light"
        );
    }

    if (!mounted) {
        return (
            <div className="size-10 rounded-xl border border-[var(--color-border)]" />
        );
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={
                dark
                    ? "Lightmode aktivieren"
                    : "Darkmode aktivieren"
            }
            className="
        flex size-10 items-center justify-center
        rounded-xl
        border border-[var(--color-border)]
        bg-[var(--color-surface-strong)]
        text-[var(--color-text)]
        transition
        hover:border-[var(--color-primary)]
        hover:text-[var(--color-primary)]
      "
        >
            {dark ? (
                <Sun className="size-4" />
            ) : (
                <Moon className="size-4" />
            )}
        </button>
    );
}