"use client";
import "./globals.css";

// FONTS
import { Inter } from "next/font/google";

import { useState } from "react";
import { ThemeProvider } from "next-themes";

// COMPONENTS
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Header/Banner";
import Intro from "../components/Intro/Intro";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";

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
              <ScrollTop />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
