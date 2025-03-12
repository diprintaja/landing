import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/molecules/footer";
import { Navbar } from "@/components/molecules/navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diprint - cetak dokumen lebih mudah",
  description: "Cetak Dokumen lebih mudah dengan Diprint",
};

type Props = Readonly<PropsWithChildren>;

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen flex flex-col items-stretch flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
