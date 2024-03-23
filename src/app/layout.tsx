import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "../../context/active-section-context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "react-hot-toast";
import Themeswitch from "@/components/themeswitch";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil | Portfolio",
  description: "Sahil is a fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className=" bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem] w-[31rem] rounded-full blur-[10rem] sm:w-[68rem]"></div>
        <div className=" bg-[#a99ae0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31rem] w-[50rem] rounded-full blur-[12rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-right" />
        </ActiveSectionContextProvider>
        <Themeswitch />
      </body>
    </html>
  );
}
