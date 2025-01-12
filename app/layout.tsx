import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Aside from "./_components/aside";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dull Generation",
  description: "Moodle-like platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full relative pr-4 bg-[#f5f5f5]`}
      >
        <div className="w-full flex gap-4">
          {/* Take as much space as needed */}
          <div className="relative z-50 h-screen">
            <Aside />
          </div>         

          {/* Take everything left */}
          <div className="relative flex-grow flex flex-col justify-start items-start gap-4">
            <div className="relative top-0 z-50 w-full flex-none">
              <Header />
            </div>
            <div className="flex justify-center w-full items-center pb-10">
              {children}
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
