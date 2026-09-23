import "./globals.css";
import { ScrollBorderController } from "@/components/scroll-border-controller";
export const metadata = {
    title: "Informatik Nachhilfe",
    description: "Individuelle Informatik-Nachhilfe",
};

const themeScript = `
(function () {
  try {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (stored === "dark" || (!stored && systemDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
        </body>
        </html>
    );
}