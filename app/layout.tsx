import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Layout/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funvita Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-neutral-50 to-sky-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
