import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Clentyra Site",
  description: "Багатосторінковий сайт-візитка",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        {/* Хедер буде відображатися зверху на кожній сторінці */}
        <Header /> 
        
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}