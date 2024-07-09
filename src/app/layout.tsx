import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/navbar'
import { baseFont } from '../styles'


export const metadata: Metadata = {
  title: "Katherine Biewer",
  icons: { icon: "/frog.ico" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={baseFont.className}>
        <div className="flex flex-col"> 
          <Navbar />
          <main className="container mx-auto pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
