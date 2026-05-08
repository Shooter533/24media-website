import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "24Media — AI Automation for Small Business",
  description:
    "We help trades, retail, and service businesses automate scheduling, customer support, and lead follow-ups with tailored AI solutions. Less busywork, more bookings.",
  openGraph: {
    title: "24Media — AI Automation for Small Business",
    description:
      "Automate scheduling, customer support, and lead follow-ups with tailored AI solutions built for small service businesses.",
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
    <html lang="en" className={`${jakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-white text-primary" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
