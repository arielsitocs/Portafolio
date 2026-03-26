import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  weight: '400',
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
    <html lang="es" className="scroll-smooth scroll-pt-20" >
      <body
        className={`${inter.variable} ${righteous.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
