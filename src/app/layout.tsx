// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/Loader/PreLoaderWrapper";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/page";
import RouteTransitionProvider from "@/components/Transition/RouteTransitionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NAMRA",
  description: "New version of NAMRA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PreloaderWrapper>
          <RouteTransitionProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </RouteTransitionProvider>
        </PreloaderWrapper>
      </body>
    </html>
  );
}
