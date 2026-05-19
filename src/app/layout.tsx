import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Katherine Biewer",
  description:
    "Researcher exploring how hardware shapes AI progress and how AI transforms hardware design.",
  icons: { icon: "/favicon.svg" },
};

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/75 border-b border-border/50">
          <nav className="mx-auto max-w-content px-6 py-4 flex items-center justify-between text-sm font-medium">
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-text-muted hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                href="/writings"
                className="text-text-muted hover:text-accent transition-colors"
              >
                Writing
              </Link>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/katbiewer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted/70 hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/katherine-biewer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted/70 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:katbiewer@gmail.com"
                className="text-text-muted/70 hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-content px-6 py-16 md:py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
