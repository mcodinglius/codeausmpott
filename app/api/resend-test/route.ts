export const runtime = "nodejs";

export async function GET() {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return Response.json(
                {
                    success: false,
                    error: "RESEND_API_KEY fehlt",
                },
                {
                    status: 500,
                },
            );
        }

        const response = await fetch(
            "https://api.resend.com/emails",
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    from: "onboarding@resend.dev",
                    to: ["delivered@resend.dev"],
                    subject: "Resend Test",
                    html: "<strong>Resend funktioniert 🎉</strong>",
                }),
            },
        );

        const body = await response.text();

        return Response.json({
            success: response.ok,
            status: response.status,
            body,
        });
    } catch (error) {
        console.error("FETCH ERROR:", error);

        return Response.json(
            {
                success: false,

                error:
                    error instanceof Error
                        ? error.message
                        : String(error),

                cause:
                    error instanceof Error &&
                    "cause" in error
                        ? String(error.cause)
                        : null,
            },
            {
                status: 500,
            },
        );
    }
    
    
    
}


export async function POST() {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return Response.json(
                {
                    success: false,
                    error: "RESEND_API_KEY fehlt",
                },
                {
                    status: 500,
                },
            );
        }

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "onboarding@resend.dev",
                to: ["delivered@resend.dev"],
                subject: "Resend Test",
                html: "<strong>Resend funktioniert 🎉</strong>",
            }),
        });

        const body = await response.text();

        return Response.json({
            success: response.ok,
            status: response.status,
            body,
        });
    } catch (error) {
        console.error("FETCH ERROR:", error);

        return Response.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : String(error),
                cause:
                    error instanceof Error && "cause" in error
                        ? String(error.cause)
                        : null,
            },
            {
                status: 500,
            },
        );
    }
}