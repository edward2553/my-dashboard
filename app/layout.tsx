import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const inter = Gothic_A1({ subsets: ["latin"], weight: '600'});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
