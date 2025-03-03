import type { Metadata } from "next";
import "./globals.css";
import { HeaderSection } from "@/components/header/HeaderSection/HeaderSection";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-black text-gray-100">
          {/* Navigation */}
          <HeaderSection />

          {children}
        </div>
      </body>
    </html>
  );
}
