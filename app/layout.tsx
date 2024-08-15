import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <head>
    <title>JuanDiegoRDev-Portafolio</title>
    <link rel="icon"  href="https://i.pinimg.com/564x/e5/ee/3f/e5ee3f52f71a393e093f333ae47bf9ed.jpg" />
  </head>
  <body>
    <div id="root"></div>

      <Navbar />
        <Header />
        {children}
  </body>
    </html>
  );
}
