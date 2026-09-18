import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const requestSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name ist zu kurz")
        .max(100),

    email: z
        .string()
        .trim()
        .email("Ungültige E-Mail-Adresse")
        .max(200),

    context: z
        .string()
        .trim()
        .min(1, "Kontext fehlt")
        .max(100),

    description: z
        .string()
        .trim()
        .min(10, "Beschreibung ist zu kurz")
        .max(5000),

    goal: z
        .string()
        .trim()
        .max(1000)
        .optional()
        .default(""),

    topics: z
        .array(z.string().trim().min(1).max(100))
        .min(1, "Mindestens ein Thema auswählen")
        .max(30),

    // Honeypot gegen primitive Bots
    website: z
        .string()
        .max(0)
        .optional()
        .default(""),
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

        const parsed = requestSchema.safeParse(body);

        if (!parsed.success) {
            return Response.json(
                {
                    success: false,
                    error: "Ungültige Anfrage",
                    issues: parsed.error.flatten(),
                },
                {
                    status: 400,
                },
            );
        }

        const data = parsed.data;

        // Bot-Honeypot.
        // Nach außen trotzdem Erfolg melden.
        if (data.website) {
            return Response.json({
                success: true,
            });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const recipient = process.env.REQUEST_TO_EMAIL;
        const sender =
            process.env.RESEND_FROM_EMAIL ??
            "Informatik Nachhilfe <onboarding@resend.dev>";

        if (!apiKey || !recipient) {
            console.error(
                "RESEND_API_KEY oder REQUEST_TO_EMAIL fehlt.",
            );

            return Response.json(
                {
                    success: false,
                    error: "Server ist nicht vollständig konfiguriert.",
                },
                {
                    status: 500,
                },
            );
        }

        const resend = new Resend(apiKey);

        const topicHtml = data.topics
            .map(
                (topic) => `
          <li
            style="
              margin: 0 0 8px;
              padding: 10px 14px;
              border-radius: 10px;
              background: #f7f4ff;
            "
          >
            ${escapeHtml(topic)}
          </li>
        `,
            )
            .join("");

        const { data: resendData, error } =
            await resend.emails.send({
                from: sender,

                to: [recipient],

                subject: `🧠 Neue Lernanfrage von ${data.name}`,

                html: `
          <!doctype html>
          <html lang="de">
            <body
              style="
                margin: 0;
                padding: 30px;
                background: #f8f8fb;
                font-family: Helvetica, Arial, sans-serif;
                color: #021526;
              "
            >
              <div
                style="
                  max-width: 640px;
                  margin: 0 auto;
                  background: #ffffff;
                  border-radius: 20px;
                  overflow: hidden;
                  border: 1px solid #e7e7ee;
                "
              >
                <div
                  style="
                    background: #021526;
                    color: #ffffff;
                    padding: 32px;
                  "
                >
                  <div
                    style="
                      color: #FB773C;
                      font-size: 13px;
                      margin-bottom: 12px;
                    "
                  >
                    // neue Lernanfrage
                  </div>

                  <h1
                    style="
                      margin: 0;
                      font-size: 28px;
                    "
                  >
                    🧠 ${escapeHtml(data.name)}
                    möchte Informatik lernen.
                  </h1>
                </div>

                <div style="padding: 32px;">
                  <h2
                    style="
                      margin-top: 0;
                      color: #180161;
                    "
                  >
                    Themen im Lern-Gehirn
                  </h2>

                  <ul
                    style="
                      list-style: none;
                      padding: 0;
                      margin: 20px 0 32px;
                    "
                  >
                    ${topicHtml}
                  </ul>

                  <h2 style="color: #180161;">
                    Kontaktdaten
                  </h2>

                  <p>
                    <strong>Name:</strong><br>
                    ${escapeHtml(data.name)}
                  </p>

                  <p>
                    <strong>E-Mail:</strong><br>
                    ${escapeHtml(data.email)}
                  </p>

                  <p>
                    <strong>Kontext:</strong><br>
                    ${escapeHtml(data.context)}
                  </p>

                  <hr
                    style="
                      border: 0;
                      border-top: 1px solid #e7e7ee;
                      margin: 32px 0;
                    "
                  >

                  <h2 style="color: #180161;">
                    Was fällt aktuell schwer?
                  </h2>

                  <p
                    style="
                      line-height: 1.7;
                      white-space: pre-wrap;
                    "
                  >${escapeHtml(data.description)}</p>

                  <h2 style="color: #180161;">
                    Ziel
                  </h2>

                  <p style="line-height: 1.7;">
                    ${
                    data.goal
                        ? escapeHtml(data.goal)
                        : "Keine Angabe"
                }
                  </p>
                </div>

                <div
                  style="
                    padding: 20px 32px;
                    background: #f8f8fb;
                    color: #5c6470;
                    font-size: 13px;
                  "
                >
                  Gesendet über deine Informatik-Nachhilfe-Webapp.
                </div>
              </div>
            </body>
          </html>
        `,
            });

        if (error) {
            console.error("Resend Error:", error);

            return Response.json(
                {
                    success: false,
                    error: "E-Mail konnte nicht versendet werden.",
                },
                {
                    status: 500,
                },
            );
        }

        return Response.json({
            success: true,
            id: resendData?.id,
        });
    } catch (error) {
        console.error("API Error:", error);

        return Response.json(
            {
                success: false,
                error: "Interner Serverfehler.",
            },
            {
                status: 500,
            },
        );
    }
}