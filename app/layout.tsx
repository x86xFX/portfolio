import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {Navbar} from "@/app/partials/Navbar";
import {Footer} from "@/app/partials/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "x86xfx Portfolio",
  description: "x86xfx's Portfolio",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={"bg-slate-900 text-gray-100 " + inter.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
