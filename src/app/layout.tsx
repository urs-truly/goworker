import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goworker",
  description: "Your commute has never been easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            GoWorker
          </Link>
          <nav className="flex gap-4">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </header>

        <main className="flex-1 p-6">{children}</main>

        <footer className="w-full text-center py-4 bg-white border-t">
          © {new Date().getFullYear()} GoWorker. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
