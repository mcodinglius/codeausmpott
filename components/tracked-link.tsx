"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
    eventName: string;
    eventData?: Record<string, string | number | boolean>;
};

export function TrackedLink({
                                eventName,
                                eventData,
                                onClick,
                                ...props
                            }: TrackedLinkProps) {
    return (
        <Link
            {...props}
            onClick={(event) => {
                track(eventName, eventData);
                onClick?.(event);
            }}
        />
    );
}