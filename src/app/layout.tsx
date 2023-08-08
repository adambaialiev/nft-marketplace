import "./globals.css";
import type { Metadata } from "next";
import { Jura } from "next/font/google";

const inter = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "NFT Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
