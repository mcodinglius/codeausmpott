import { Resend } from "resend";
import { z } from "zod";

const requestSchema = z.object({
    name: z.string().trim().min(2).max(100),

    email: z
        .string()
        .trim()
        .email()
        .max(200),

    context: z
        .string()
        .trim()
        .min(1)
        .max(100),

    description: z
        .string()
        .trim()
        .min(10)
        .max(5000),

    goal: z
        .string()
        .trim()
        .max(1000),

    topics: z
        .array(z.string().trim().min(1).max(100))
        .min(1)
        .max(30),
});

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const result = requestSchema.safeParse(body);

        if (!result.success) {
            return Response.json(
                {
                    error: "Ungültige Anfrage",
                },
                {
                    status: 400,
                },
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.RESEND_FROM_EMAIL;
        const to = process.env.REQUEST_TO_EMAIL;

        if (!apiKey || !from || !to) {
            console.error(
                "Resend Umgebungsvariablen fehlen.",
            );

            return Response.json(
                {
                    error: "Server nicht vollständig konfiguriert",
                },
                {
                    status: 500,
                },
            );
        }

        const resend = new Resend(apiKey);

        const data = result.data;

        const topics = data.topics
            .map(
                (topic) =>
                    `<li style="margin-bottom:6px">${escapeHtml(topic)}</li>`,
            )
            .join("");

        const { error } = await resend.emails.send({
            from,
            to,
            subject: `Neue Lernanfrage von ${data.name}`,

            html: `
        <div
          style="
            font-family: Helvetica, Arial, sans-serif;
            max-width: 620px;
            margin: 0 auto;
            color: #021526;
          "
        >
          <h1 style="color:#180161;">
            Neue Informatik-Lernanfrage
          </h1>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(data.name)}
          </p>

          <p>
            <strong>E-Mail:</strong>
            ${escapeHtml(data.email)}
          </p>

          <p>
            <strong>Kontext:</strong>
            ${escapeHtml(data.context)}
          </p>

          <h2>🧠 Themen im Lern-Gehirn</h2>

          <ul>
            ${topics}
          </ul>

          <h2>Aktuelles Problem</h2>

          <p style="white-space:pre-wrap;">
            ${escapeHtml(data.description)}
          </p>

          <h2>Ziel</h2>

          <p>
            ${
                data.goal
                    ? escapeHtml(data.goal)
                    : "Keine Angabe"
            }
          </p>
        </div>
      `,
        });

        if (error) {
            console.error(error);

            return Response.json(
                {
                    error: "E-Mail konnte nicht gesendet werden.",
                },
                {
                    status: 500,
                },
            );
        }

        return Response.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                error: "Interner Serverfehler",
            },
            {
                status: 500,
            },
        );
    }
}