import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Korra Marketing Agency — Digital Marketing & Content Creation",
  description: "Full-service digital marketing and content creation agency helping local businesses grow in the digital space.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ backgroundColor: "#0A0A0A", color: "#F5F0E8", fontFamily: "var(--font-dmsans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
