import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import { birthdayConfig } from "@/config/birthday";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Happy Birthday, ${birthdayConfig.recipientName} | A Universe Created For You`,
  description: `A cinematic, luxury digital celebration for ${birthdayConfig.recipientName}. A love story in typography, memories, and light.`,
  keywords: ["birthday", "Deepika", "love letter", "cinematic", "memories", "celebration"],
  authors: [{ name: birthdayConfig.senderName }],
  openGraph: {
    title: `Happy Birthday, ${birthdayConfig.recipientName}`,
    description: "A little universe, created just for you.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070509",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#070509] text-[#FFF9F2] font-sans antialiased selection:bg-[#5C122D] selection:text-[#F5CE85] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
