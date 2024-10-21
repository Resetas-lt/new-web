"use client";
import "./globals.css";

import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

// COMPONENTS
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Intro from "../components/Intro/Intro";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [introEnded, setIntroEnded] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class">
          {!introEnded && <Intro onAnimationEnd={() => setIntroEnded(true)} />}
          {introEnded && (
            <>
              <Banner />
              <Navbar />
              <main className="main-content">{children}</main>
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
