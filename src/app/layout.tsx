import type { Metadata } from "next";
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
        <main className="mx-auto max-w-content px-6 py-16 md:py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
