import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import LenisProvider from "./providers/LenisProvider";
import { LanguageProvider } from "@/app/providers/LanguageContext";

export const metadata: Metadata = {
  title: "MELBET SAUDI ARABIA",
  description: "MELBET SAUDI ARABIA AFFILIATE NETWORK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <LenisProvider>
          <LanguageProvider>
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black" />
              <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,145,80,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(255,193,0,0.08),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(0,145,80,0.10),transparent_30%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35))]" />
            </div>

            <div className="page-shell relative z-10 min-h-screen">
              <Header />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  );
}