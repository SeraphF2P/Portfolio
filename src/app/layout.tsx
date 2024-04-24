import { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ReactNode } from "react";
import Background3D from "./_component/Background3D";
import { Header } from "./_component/Header";
import { FullPageSvg } from "./_component/svgs/FullPageSvg";
import "./index.css";
import { Icon } from "../ui/server";

type layoutProps = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title: "jaffer ali portfolio",
};
const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["200", "500", "700"],
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function RootLayout({ children }: layoutProps) {
  return (
    <html className=" scroll-smooth remove-scroll-bar">
      <body
        
        className={`   text-neutral-revert remove-scroll-bar    ${inter.className} ${outfit.variable}  `}
      >
        <Background3D />
        <FullPageSvg />
        <Header />
      
        {children}
     
      </body>
    </html>
  );
}
