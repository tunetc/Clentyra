import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header"; // Переконайтеся, що шлях правильний

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
      </body>
    </html>
  );
}