import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

//Definicion de fuentes de letra

import { Italiana } from "next/font/google";
import Footer from "./components/Footer";

const italiana = Italiana({
  weight: "400", // solo tiene 400
  subsets: ["latin"],
});

// Definición de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // opcional si quieres usar variable CSS
});

// Metadata del sitio
export const metadata: Metadata = {
  title: "Eac Nails con App Router y Prisma",
  description: "Eac Nails con App Router y Prisma",
};

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${italiana.className}  bg-gray-100` }>
         <NavBar></NavBar> 
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
