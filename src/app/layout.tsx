import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "24Media — AI Receptionists & Lead Response for Trade Businesses",
  description:
    "24Media installs AI voice receptionists and lead response systems for trade businesses. Every call answered, every lead followed up — automatically. Based in Australia.",
  openGraph: {
    title: "24Media — Never Miss Another Job",
    description:
      "AI receptionists and lead response systems for trade businesses. Every call answered, every lead followed up — automatically.",
    url: "https://24media.com.au",
    siteName: "24Media",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
