import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "ETS Ltd | Premium Commercial Electrical Specialists",
  description: "Electro Technical Systems (ETS) Ltd - Leading commercial and industrial electrical engineering contractors. NICEIC accredited specialists in high-end infrastructure.",
  keywords: ["Commercial Electrician", "Industrial Electrical Contractor", "ETS Ltd", "Electrical Infrastructure", "NICEIC Contractor"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
