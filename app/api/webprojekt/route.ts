// app/api/webprojekt/route.ts

export const runtime = "nodejs";

type WebProjectPayload = {
    name: string;
    email: string;
    context: string;
    description: string;
    goal?: string;
    topics: string[];
};

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY?.trim();
        const to = process.env.REQUEST_TO_EMAIL?.trim();
        const from = process.env.RESEND_FROM_EMAIL?.trim();

        if (!apiKey || !to || !from) {
            return Response.json(
                {
                    success: false,
                    error: "Mail-Konfiguration fehlt.",
                },
                { status: 500 },
            );
        }

        const body = (await request.json()) as WebProjectPayload;

        const {
            name,
            email,
            context,
            description,
            goal,
            topics,
        } = body;

        if (
            !name ||
            !email ||
            !context ||
            !description ||
            !Array.isArray(topics) ||
            topics.length === 0
        ) {
            return Response.json(
                {
                    success: false,
                    error: "Pflichtfelder fehlen.",
                },
                { status: 400 },
            );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeContext = escapeHtml(context);
        const safeDescription = escapeHtml(description);
        const safeGoal = escapeHtml(goal || "Keine Angabe");

        const topicHtml = topics
            .map(
                (topic) => `
          <li style="margin-bottom:6px;">
            ${escapeHtml(topic)}
          </li>
        `,
            )
            .join("");

        const response = await fetch(
            "https://api.resend.com/emails",
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    from: `CodeWithMiguel <${from}>`,
                    to: [to],

                    reply_to: email,

                    subject: `🌐 Neue Webprojekt-Anfrage von ${name}`,

                    html: `
            <!doctype html>
            <html lang="de">
              <body
                style="
                  margin:0;
                  padding:0;
                  background:#f6f7fb;
                  font-family:Arial,sans-serif;
                  color:#021526;
                "
              >
                <div style="padding:32px 16px;">
                  <div
                    style="
                      max-width:640px;
                      margin:0 auto;
                      background:#ffffff;
                      border-radius:20px;
                      overflow:hidden;
                    "
                  >
                    <div
                      style="
                        padding:28px;
                        background:#180161;
                        color:#ffffff;
                      "
                    >
                      <div
                        style="
                          font-size:12px;
                          text-transform:uppercase;
                          letter-spacing:2px;
                          opacity:.7;
                        "
                      >
                        CodeWithMiguel
                      </div>

                      <h1 style="margin:10px 0 0;">
                        Neue Webprojekt-Anfrage
                      </h1>
                    </div>

                    <div style="padding:28px;">
                      <p>
                        <strong>Name</strong><br />
                        ${safeName}
                      </p>

                      <p>
                        <strong>E-Mail</strong><br />
                        <a href="mailto:${safeEmail}">
                          ${safeEmail}
                        </a>
                      </p>

                      <p>
                        <strong>Projektart</strong><br />
                        ${safeContext}
                      </p>

                      <div style="margin-top:24px;">
                        <strong>Ausgewählte Themen</strong>

                        <ul style="padding-left:20px;">
                          ${topicHtml}
                        </ul>
                      </div>

                      <div style="margin-top:24px;">
                        <strong>Beschreibung</strong>

                        <div
                          style="
                            margin-top:8px;
                            padding:16px;
                            background:#f8f8fb;
                            border-radius:12px;
                            white-space:pre-wrap;
                            line-height:1.6;
                          "
                        >
                          ${safeDescription}
                        </div>
                      </div>

                      <div style="margin-top:24px;">
                        <strong>Ziel</strong>

                        <div
                          style="
                            margin-top:8px;
                            padding:16px;
                            background:#fff7f2;
                            border-radius:12px;
                            white-space:pre-wrap;
                            line-height:1.6;
                          "
                        >
                          ${safeGoal}
                        </div>
                      </div>

                      <div style="margin-top:28px;">
                        <a
                          href="mailto:${safeEmail}"
                          style="
                            display:block;
                            text-align:center;
                            padding:14px 20px;
                            background:#fb773c;
                            color:#ffffff;
                            text-decoration:none;
                            border-radius:12px;
                            font-weight:700;
                          "
                        >
                          ${safeName} antworten
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
                }),
            },
        );

        const result = await response.json().catch(() => null);

        console.log("WEBPROJECT RESEND RESPONSE", {
            status: response.status,
            ok: response.ok,
            result,
        });

        if (!response.ok) {
            return Response.json(
                {
                    success: false,
                    error:
                        result?.message ??
                        result?.error ??
                        "E-Mail konnte nicht versendet werden.",
                },
                {
                    status: response.status,
                },
            );
        }

        return Response.json({
            success: true,
            id: result?.id,
        });
    } catch (error) {
        console.error("WEBPROJECT MAIL ERROR:", error);

        return Response.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Unbekannter Fehler",
            },
            { status: 500 },
        );
    }
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}