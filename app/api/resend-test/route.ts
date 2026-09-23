export const runtime = "nodejs";

type AnfragePayload = {
    name: string;
    email: string;
    context: string;
    description: string;
    goal: string;
    topics: string[];
    website?: string;
};

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY?.trim();
        const to = process.env.REQUEST_TO_EMAIL?.trim();
        const from = process.env.RESEND_FROM_EMAIL?.trim();

        if (!apiKey) {
            return Response.json(
                {
                    success: false,
                    error: "RESEND_API_KEY fehlt",
                },
                { status: 500 },
            );
        }

        if (!to) {
            return Response.json(
                {
                    success: false,
                    error: "REQUEST_TO_EMAIL fehlt",
                },
                { status: 500 },
            );
        }

        if (!from) {
            return Response.json(
                {
                    success: false,
                    error: "RESEND_FROM_EMAIL fehlt",
                },
                { status: 500 },
            );
        }

        const body = (await request.json()) as AnfragePayload;

        const {
            name,
            email,
            context,
            description,
            goal,
            topics,
            website,
        } = body;

        /*
         * Honeypot gegen einfache Bots
         */
        if (website) {
            return Response.json({
                success: true,
            });
        }

        if (
            !name ||
            !email ||
            !context ||
            !description ||
            !Array.isArray(topics)
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
          <span
            style="
              display:inline-block;
              margin:4px 6px 4px 0;
              padding:7px 12px;
              border-radius:999px;
              background:#f5f2ff;
              color:#180161;
              font-size:13px;
              font-weight:600;
            "
          >
            ${escapeHtml(topic)}
          </span>
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

                    /*
                     * Wenn du in deiner Mail-App auf Antworten klickst,
                     * geht die Antwort direkt an den Schüler/Kunden.
                     */
                    reply_to: email,

                    subject: `🧠 Neue Anfrage von ${name}`,

                    html: `
<!doctype html>
<html lang="de">
  <body
    style="
      margin:0;
      padding:0;
      background:#f6f7fb;
      font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
      color:#021526;
    "
  >
    <div
      style="
        width:100%;
        padding:32px 16px;
        box-sizing:border-box;
      "
    >
      <div
        style="
          max-width:640px;
          margin:0 auto;
          background:#ffffff;
          border-radius:24px;
          overflow:hidden;
          box-shadow:0 18px 60px rgba(24,1,97,.08);
        "
      >
        <!-- Header -->
        <div
          style="
            padding:30px;
            background:
              linear-gradient(
                135deg,
                #180161,
                #eb3678 55%,
                #fb773c
              );
            color:#ffffff;
          "
        >
          <div
            style="
              font-size:12px;
              text-transform:uppercase;
              letter-spacing:2px;
              opacity:.75;
              margin-bottom:10px;
            "
          >
            CodeWithMiguel
          </div>

          <div
            style="
              font-size:28px;
              line-height:1.2;
              font-weight:700;
            "
          >
            Neue Anfrage 🚀
          </div>

          <div
            style="
              margin-top:10px;
              font-size:15px;
              line-height:1.6;
              opacity:.85;
            "
          >
            Jemand möchte mit dir an Informatik oder einem Projekt arbeiten.
          </div>
        </div>

        <!-- Content -->
        <div style="padding:30px;">
          <div
            style="
              padding:18px;
              background:#f8f8fb;
              border-radius:16px;
              margin-bottom:26px;
            "
          >
            <div
              style="
                font-size:12px;
                color:#777;
                margin-bottom:5px;
              "
            >
              Name
            </div>

            <div
              style="
                font-size:18px;
                font-weight:700;
              "
            >
              ${safeName}
            </div>

            <div
              style="
                margin-top:15px;
                font-size:12px;
                color:#777;
              "
            >
              E-Mail
            </div>

            <a
              href="mailto:${safeEmail}"
              style="
                display:inline-block;
                margin-top:5px;
                color:#eb3678;
                text-decoration:none;
                font-weight:600;
              "
            >
              ${safeEmail}
            </a>
          </div>

          <div style="margin-bottom:26px;">
            <div
              style="
                font-size:12px;
                text-transform:uppercase;
                letter-spacing:1.5px;
                color:#eb3678;
                font-weight:700;
                margin-bottom:8px;
              "
            >
              Kontext
            </div>

            <div
              style="
                font-size:18px;
                font-weight:700;
              "
            >
              ${safeContext}
            </div>
          </div>

          <div style="margin-bottom:26px;">
            <div
              style="
                font-size:12px;
                text-transform:uppercase;
                letter-spacing:1.5px;
                color:#eb3678;
                font-weight:700;
                margin-bottom:10px;
              "
            >
              Themen
            </div>

            <div>
              ${topicHtml}
            </div>
          </div>

          <div style="margin-bottom:26px;">
            <div
              style="
                font-size:12px;
                text-transform:uppercase;
                letter-spacing:1.5px;
                color:#180161;
                font-weight:700;
                margin-bottom:10px;
              "
            >
              Was ist das Problem?
            </div>

            <div
              style="
                padding:18px;
                border-left:4px solid #eb3678;
                background:#f8f8fb;
                border-radius:0 14px 14px 0;
                white-space:pre-wrap;
                line-height:1.7;
                font-size:15px;
              "
            >
              ${safeDescription}
            </div>
          </div>

          <div>
            <div
              style="
                font-size:12px;
                text-transform:uppercase;
                letter-spacing:1.5px;
                color:#180161;
                font-weight:700;
                margin-bottom:10px;
              "
            >
              Ziel
            </div>

            <div
              style="
                padding:18px;
                background:#fff7f2;
                border-radius:14px;
                line-height:1.7;
                font-size:15px;
              "
            >
              ${safeGoal}
            </div>
          </div>

          <div
            style="
              margin-top:30px;
              padding-top:24px;
              border-top:1px solid #eeeeee;
            "
          >
            <a
              href="mailto:${safeEmail}"
              style="
                display:block;
                box-sizing:border-box;
                width:100%;
                text-align:center;
                padding:14px 20px;
                border-radius:12px;
                background:#fb773c;
                color:#ffffff;
                text-decoration:none;
                font-weight:700;
              "
            >
              ${safeName} antworten
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div
          style="
            padding:18px 30px;
            background:#021526;
            color:rgba(255,255,255,.55);
            text-align:center;
            font-size:12px;
          "
        >
          CodeWithMiguel · Anfrage über deine Website
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

        console.log("RESEND RESPONSE", {
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
                    resend: result,
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
        console.error("MAIL ERROR:", error);

        return Response.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "Unbekannter Fehler",
            },
            {
                status: 500,
            },
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