import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/JsonLd";
import MotionProvider from "@/components/MotionProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahriar Ridom - Portfolio",
  description: "Fullstack Developer & Creative Technologist",
  appleWebApp: {
    title: "Shahriar Ridom",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <JsonLd />
        <MotionProvider>{children}</MotionProvider>
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
