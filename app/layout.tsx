import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Inconsolata, Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });
const inconsolata = Inconsolata({subsets: ['latin']})

// For non-variable fonts, specify weights
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
