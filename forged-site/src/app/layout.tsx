import type { Metadata } from "next";
import { Bebas_Neue, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beforged.co"),
  title: "FORGED — Built Different. By Design.",
  description:
    "FORGED is an elite athlete, coach, and expert development summit. First event: Phoenix, AZ, November 26–29, 2026 — Indoor Volleyball. Expanding across all sports.",
  openGraph: {
    title: "FORGED — Built Different. By Design.",
    description:
      "FORGED is an elite athlete, coach, and expert development summit. First event: Phoenix, AZ, Nov 26–29, 2026 — Indoor Volleyball. Expanding across all sports.",
    type: "website",
    images: ["/forged-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} ${cormorant.variable}`}>
      <body>
        <div className="h-[3px] bg-gradient-to-r from-gold-d via-gold to-gold-d" />
        <Nav />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
