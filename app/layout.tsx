// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "WeldHouse Limited | Nigeria's First Modern Oil & Gas Fabrication Yard",
    template: "%s | WeldHouse Limited",
  },
  description:
    "WeldHouse Limited is developing Nigeria's first modern high tonnage Oil & Gas Fabrication Yard — enabling full in-country compliance with the Nigerian Content Law.",
  keywords: [
    "WeldHouse",
    "Nigeria fabrication yard",
    "Oil and Gas Nigeria",
    "FPSO fabrication",
    "Nigerian Content Law",
    "offshore fabrication Nigeria",
    "Akwa Ibom fabrication yard",
  ],
  authors: [{ name: "WeldHouse Limited" }],
  creator: "WeldHouse Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.weldhouseltd.com",
    siteName: "WeldHouse Limited",
    title: "WeldHouse Limited | Nigeria's First Modern Oil & Gas Fabrication Yard",
    description:
      "Developing Nigeria's first modern high tonnage Oil & Gas Fabrication Yard. US$450M project backed by Deloitte financial model with NPV of US$1.4B.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeldHouse Limited | Nigeria's First Modern Oil & Gas Fabrication Yard",
    description:
      "Developing Nigeria's first modern high tonnage Oil & Gas Fabrication Yard. US$450M project backed by Deloitte financial model with NPV of US$1.4B.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}