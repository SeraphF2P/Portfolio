import { ReactNode } from "react";
import "./index.css";
import Background3D from "./_component/Background3D";
import { Header } from "./_component/Header";
import { Metadata } from "next";

type layoutProps = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title: "jaffer ali portfolio",
};
export default function RootLayout({ children }: layoutProps) {
  return (
    <html>
      <body className="     overflow-x-hidden scrollbar   ">
        <Background3D />
        <Header />
        <main className="parallax-container h-svh ">{children}</main>
      </body>
    </html>
  );
}
