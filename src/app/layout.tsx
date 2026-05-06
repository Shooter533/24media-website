import type { Metadata } from "next";
import { Outfit, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${outfit.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-stone text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
