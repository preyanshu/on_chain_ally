import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomRuntimeProvider } from "@/providers/CustomRuntimeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnChain Ally",
  description: "A friendly guide to help you navigate the blockchain world."
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <CustomRuntimeProvider>{children}</CustomRuntimeProvider>
      </body>
    </html>
  );
}
