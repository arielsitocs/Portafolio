import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

const DMsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
});

const DMmono = DM_Mono({
  variable: "--font-dmmono",
  weight: ['400', '300'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ariel Escobar",
  description: "Portafolio Ariel Escobar",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth scroll-pt-20 px-3" >
      <body
        className={`${DMsans.variable} ${DMmono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
