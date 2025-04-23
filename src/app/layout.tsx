import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
export const baseFont = Figtree({ weight: ["400"], preload: false });

export const metadata: Metadata = {
  title: "Katherine Biewer",
  icons: { icon: "/frog.ico" },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={baseFont.className}>
        <div className="flex flex-col"> 
          <main className="container mx-auto pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
