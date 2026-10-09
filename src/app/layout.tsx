import type { Metadata } from "next";
import { Cormorant_Garamond, Marcellus, Jost } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { CartDrawer } from "@/components/CartDrawer";
import { CustomCursor } from "@/components/motion/CustomCursor";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const accent = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent",
  display: "swap",
});
const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "San Luxury",
    "fashion jewellery",
    "imitation jewellery",
    "kundan",
    "bridal jewellery",
    "necklaces",
    "earrings",
    "buy jewellery online india",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${accent.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-cream">
        <AnnouncementBar />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
        <CartDrawer />
        <CustomCursor />
      </body>
    </html>
  );
}
