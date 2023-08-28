import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "MagnitudeDance | Cursuri de dans in Iasi: Salsa, Bachata, Kizomba, Vals",
  description:
    "Cursuri de dans Iasi - Magnitude Dance. Vino si tu sa inveti sa dansezi Bachata, Salsa, Kizomba, Vals nunta. Scoala de dans latino Iasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center overflow-x-hidden">
        <div className="w-full">
          <Header />
          <Separator className="mb-4" />
          {children}
        </div>
      </body>
    </html>
  );
}
