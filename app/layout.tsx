import "./globals.css";
import { ScrollBorderController } from "@/components/scroll-border-controller";
import { Analytics } from "@vercel/analytics/next"
export const metadata = {
    title: "Informatik Nachhilfe",
    description: "Individuelle Informatik-Nachhilfe",
};

const themeScript = `
(function () {
  try {
    const stored = localStorage.getItem("theme");

    if (stored === "light") {
      document.documentElement.classList.remove("dark");
      return;
    }

    document.documentElement.classList.add("dark");
  } catch (_) {}
})();
`;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" suppressHydrationWarning>
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: themeScript,
                }}
            />
        </head>
        <body>
        <ScrollBorderController />
        {children}
        <Analytics />
        </body>
        </html>
    );
}