import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../src/components/Navbar";
import MobileQuickActions from "../src/components/MobileQuickActions";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digital & Social",
  description: "Premium Web • Motion • SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={inter.variable}>
      <body
        className="bg-black text-white antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <MobileQuickActions />
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
